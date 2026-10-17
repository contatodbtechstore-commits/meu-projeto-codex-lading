import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {
  cp,
  mkdtemp,
  readFile,
  writeFile,
  symlink,
  rm,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFileSync, spawn, type ChildProcess } from "node:child_process";

test.describe.configure({ mode: "serial" });
let fixtureRoot = "";
let server: ChildProcess | undefined;
const url = "http://127.0.0.1:6174";

test.beforeAll(async () => {
  test.setTimeout(120_000);
  const source = process.cwd();
  fixtureRoot = await mkdtemp(join(tmpdir(), "aura-commercial-test-"));
  for (const path of [
    "src",
    "scripts",
    "public",
    "package.json",
    "tsconfig.json",
    "vite.config.ts",
    "index.html",
  ])
    await cp(join(source, path), join(fixtureRoot, path), { recursive: true });
  await symlink(
    join(source, "node_modules"),
    join(fixtureRoot, "node_modules"),
    "dir",
  );
  const contentPath = join(fixtureRoot, "src/content.ts");
  let content = await readFile(contentPath, "utf8");
  // Dados sintéticos ficam apenas nesta cópia descartável, nunca na configuração comercial.
  content = content
    .replace("demoMode: true", "demoMode: false")
    .replace('whatsapp: ""', 'whatsapp: "5511000000000"')
    .replace('siteUrl: ""', 'siteUrl: "https://example.com/"');
  content = content.replace(
    "export const faqs = [",
    `
    kits.splice(3);
    kits.forEach((kit, i) => {
      kit.kind = "kit";
      kit.id = ["glow", "essencial", "premium"][i];
      kit.image = "/images/" + kit.id + ".svg";
      kit.name = ["Kit Glow", "Kit Essencial", "Kit Premium"][i];
      kit.whatsappMessage = "Olá! Tenho interesse no {kit} e gostaria de saber mais sobre ele.";
    });
    kits[0].price = 150;
    kits[0].promotionalPrice = 120;
    kits[0].availability = "available";
    kits[0].imageMode = "photo";
    kits[0].includedProducts = [{ name: "Produto de teste", quantity: 2, details: "Conteúdo sintético para validar o componente" }];
    kits[0].highlights = ["Destaque configurado para teste"];
    kits[0].additionalImages = [{ image: "/images/essencial.svg", imageAlt: "Imagem complementar de teste", imageMode: "photo", imageFit: "contain" }];
    kits[2].whatsappMessage = undefined;
    kits[2].order = 0;
    kits[2].availability = "unavailable";
    kits.push({ ...kits[0], id: "rascunho", name: "Kit não publicado", published: false });
    export const faqs = [`,
  );
  await writeFile(contentPath, content);
  execFileSync(
    process.execPath,
    [join(source, "node_modules/typescript/bin/tsc"), "-b"],
    { cwd: fixtureRoot, stdio: "pipe" },
  );
  execFileSync(
    process.execPath,
    [
      join(source, "node_modules/vite/bin/vite.js"),
      "build",
      "--mode",
      "release",
    ],
    { cwd: fixtureRoot, stdio: "pipe" },
  );
  server = spawn(
    process.execPath,
    [
      join(source, "node_modules/vite/bin/vite.js"),
      "preview",
      "--host",
      "127.0.0.1",
      "--port",
      "6174",
      "--strictPort",
    ],
    { cwd: fixtureRoot, stdio: "ignore" },
  );
  let ready = false;
  for (let i = 0; i < 100; i++) {
    try {
      if ((await fetch(url)).ok) {
        ready = true;
        break;
      }
    } catch {
      /* O servidor ainda está iniciando. */
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  expect(ready).toBeTruthy();
});

test.afterAll(async () => {
  if (server && server.exitCode === null) {
    const exited = new Promise((resolve) => server!.once("exit", resolve));
    server.kill("SIGTERM");
    await exited;
  }
  if (fixtureRoot) await rm(fixtureRoot, { recursive: true, force: true });
});

test("configuração comercial: ordem, promoção, galeria, composição e mensagem do kit", async ({
  page,
}, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url);
  await expect(page.locator(".kit-card h3")).toHaveText([
    "Kit Premium01",
    "Kit Glow02",
    "Kit Essencial03",
  ]);
  await expect(page.getByText("Kit não publicado")).toHaveCount(0);
  const glow = page
    .locator(".kit-card")
    .filter({ has: page.getByRole("heading", { name: "Kit Glow" }) });
  await expect(glow.locator(".kit-price del")).toContainText("150,00");
  await expect(glow.locator(".kit-price > span")).toContainText("120,00");
  await glow
    .getByRole("button", { name: "Quero este Kit: Kit Glow", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByText("2 × Produto de teste", { exact: true }),
  ).toBeVisible();
  await expect(
    dialog.getByText("Destaque configurado para teste", { exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Ver imagem 2 do Kit Glow", exact: true })
    .focus();
  await page.keyboard.press("Enter");
  await expect(dialog.locator(".dialog-art > img")).toHaveAttribute(
    "alt",
    "Imagem complementar de teste",
  );
  await expect(
    page.getByRole("button", { name: "Ver imagem 2 do Kit Glow", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  const href = await dialog
    .getByRole("link", { name: "Consultar no WhatsApp" })
    .getAttribute("href");
  const message = new URL(href!).searchParams.get("text");
  expect(message).toBe(
    "Olá! Tenho interesse no Kit Glow e gostaria de saber mais sobre ele.",
  );
  expect(new URL(href!).pathname).toBe("/5511000000000");
  await expect(dialog.getByText(/Vitrine demonstrativa/)).toHaveCount(0);
  await page.screenshot({
    path: testInfo.outputPath("commercial-desktop.png"),
  });
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
});

test("indisponível permite consulta clara sem fingir pedido; galeria reinicia ao trocar kit", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url);
  await page
    .getByRole("button", {
      name: "Consultar disponibilidade: Kit Premium",
      exact: true,
    })
    .click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByText("Indisponível no momento", { exact: true }),
  ).toBeVisible();
  const href = await dialog
    .getByRole("link", { name: "Consultar disponibilidade", exact: true })
    .getAttribute("href");
  expect(new URL(href!).searchParams.get("text")).toContain(
    "consultar a disponibilidade do Kit Premium",
  );
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Glow", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Ver imagem 2 do Kit Glow", exact: true })
    .click();
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Essencial", exact: true })
    .click();
  await expect(dialog.locator(".dialog-art > img")).toHaveAttribute(
    "src",
    "/images/essencial.svg",
  );
  await expect(dialog.locator(".dialog-thumbnails")).toHaveCount(0);
});

test("celular: imagens, preços, detalhes e WhatsApp continuam acessíveis", async ({
  page,
}, testInfo) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url);
  const cards = await page.locator(".kit-card").all();
  const positions = await Promise.all(cards.map((card) => card.boundingBox()));
  expect(positions[0]!.y).toBeLessThan(positions[1]!.y);
  expect(positions[1]!.y).toBeLessThan(positions[2]!.y);
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Glow", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await page
    .getByRole("button", { name: "Ver imagem 2 do Kit Glow", exact: true })
    .click();
  await page.screenshot({
    path: testInfo.outputPath("commercial-mobile-top.png"),
  });
  await dialog
    .getByRole("link", { name: "Consultar no WhatsApp" })
    .scrollIntoViewIfNeeded();
  await expect(
    dialog.getByRole("link", { name: "Consultar no WhatsApp" }),
  ).toBeVisible();
  expect(
    await dialog.evaluate((el) => el.scrollWidth <= el.clientWidth),
  ).toBeTruthy();
  const close = page.getByRole("button", { name: "Fechar seleção" });
  expect((await close.boundingBox())!.y).toBeGreaterThanOrEqual(0);
  const audit = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(audit.violations).toEqual([]);
});
