import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";
import { ritualKits } from "../src/rituals";

const origin = "https://mkcmagazine.com";
const fixtureUrl = `${origin}/ga-kits-test/`;
const base = "https://cdn.jsdelivr.net/gh/contatodbtechstore-commits/meu-projeto-codex-lading@ga-nuvemshop-v1.0.0/public/";
const manifest = JSON.parse(await readFile("integration/nuvemshop/kits-manifest.json", "utf8"));
const installer = await readFile("integration/nuvemshop/07-kits-grand-amour.html", "utf8");
const mime: Record<string, string> = { ".js": "text/javascript", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" };

async function fixture(page: Page, options: { before?: boolean; variant?: boolean; mismatch?: boolean; soldOut?: boolean; failPost?: boolean } = {}) {
  const posts: URLSearchParams[] = [];
  await page.route(`${base}**`, async (route) => {
    const path = resolve("public", route.request().url().slice(base.length));
    await route.fulfill({ body: await readFile(path), contentType: mime[extname(path)], headers: { "access-control-allow-origin": "*" } });
  });
  await page.route(manifest.url, async (route) => route.fulfill({ body: await readFile("public/nuvemshop/grand-amour-kits-v1.js"), contentType: "text/javascript", headers: { "access-control-allow-origin": "*" } }));
  // Estes testes validam o código do bloco; a aprovação das fotos foi feita na prévia.
  await page.route("https://dcdn-us.mitiendanube.com/**", (route) => route.abort());
  await page.route(`${origin}/produtos/**`, async (route) => {
    const kit = ritualKits.find((item) => item.url === route.request().url());
    const body = kit ? `<form id="product_form" method="post" action="/comprar/"><input name="add_to_cart" value="${options.mismatch ? "0" : kit.productId}"><input name="quantity" value="1">${options.variant ? '<select name="variation"><option>Escolha</option></select>' : ''}<input type="submit" data-store="product-buy-button" value="${options.soldOut ? "Esgotado" : "Comprar"}" ${options.soldOut ? "disabled" : ""}></form>` : "<html></html>";
    await route.fulfill({ contentType: "text/html", body });
  });
  await page.route(`${origin}/comprar/`, async (route) => {
    const request = route.request();
    if (request.method() !== "POST") return route.fulfill({ body: "Carrinho de teste" });
    const data = new URLSearchParams(request.postData() || "");
    posts.push(data);
    if (options.failPost) return route.fulfill({ status: 503, body: "Indisponível" });
    if (data.has("go_to_checkout")) return route.fulfill({ contentType: "text/html; charset=utf-8", body: '<!doctype html><meta charset="utf-8"><h1>Finalização de teste</h1>' });
    await route.fulfill({ body: "Carrinho de teste" });
  });
  const block = await readFile("integration/nuvemshop/01-instalar.html", "utf8");
  const patches = await Promise.all(["03-rosa-botoes.html", "04-checkout-direto.html", "05-botoes-carrinho.html", "06-ajuste-cores-acoes.html"].map((file) => readFile(`integration/nuvemshop/${file}`, "utf8")));
  await page.route(fixtureUrl, (route) => route.fulfill({ contentType: "text/html", body: `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kits Grand Amour</title><style>body{margin:0}button{font-size:40px;background:lime}h2{font:40px monospace}</style></head><body>${options.before ? installer : ""}${block}${patches.join("")}${options.before ? "" : installer}</body></html>` }));
  await page.goto(fixtureUrl);
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("#kits-grand-amour .ritual-card")).toHaveCount(4);
  return posts;
}

for (const width of [320, 390, 768, 1440]) {
  test(`bloco de kits: posição, isolamento e carrossel em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await fixture(page);
    const section = page.locator("#kits-grand-amour");
    await section.scrollIntoViewIfNeeded();
    expect(await section.evaluate((el) => el.previousElementSibling?.id)).toBe("kits");
    await expect(page.locator(".kit-info")).toHaveCount(5);
    await expect(page.locator(".ga-cart-add")).toHaveCount(5);
    await expect(section.locator(".ritual-add")).toHaveCount(4);
    await expect(section.locator("h2")).toHaveCSS("font-family", /GA Cormorant/);
    const next = section.getByRole("button", { name: "Ver próximos kits" });
    await next.click();
    await expect(section.getByRole("button", { name: "Ver kits anteriores" })).toBeEnabled();
    await section.locator(".ritual-dots button").last().click();
    await expect(next).toBeDisabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  });
}

test("bloco de kits: quatro carrinhos enviam uma unidade e permanecem na página", async ({ page }) => {
  const posts = await fixture(page);
  for (const [i, kit] of ritualKits.entries()) {
    const card = page.locator(`[data-ritual-id="${kit.id}"]`);
    await card.locator(".ritual-add").click();
    await expect(card.getByRole("link", { name: "Ver carrinho", exact: true })).toBeVisible();
    expect(posts).toHaveLength(i + 1);
    expect([...posts[i].entries()]).toEqual([["add_to_cart", kit.productId], ["quantity", "1"]]);
    await expect(page).toHaveURL(fixtureUrl);
    await expect(page.getByRole("dialog")).not.toBeVisible();
  }
});

test("bloco de kits: cliques simultâneos não duplicam a adição ou abrem o diálogo antigo", async ({ page }) => {
  const posts = await fixture(page);
  await page.evaluate(() => {
    const root = document.getElementById("ga-nuvemshop-page")!.shadowRoot!;
    root.querySelector<HTMLButtonElement>(".ritual-add")!.click();
    root.querySelector<HTMLAnchorElement>(".ritual-buy")!.click();
    root.querySelector<HTMLButtonElement>(".kit-button")!.click();
  });
  await expect(page.locator(".ritual-card").first().getByRole("link", { name: "Ver carrinho", exact: true })).toBeVisible();
  expect(posts).toHaveLength(1);
  await expect(page).toHaveURL(fixtureUrl);
  await expect(page.getByRole("dialog")).not.toBeVisible();
});

for (const kit of ritualKits) {
  test(`bloco de kits: ${kit.name} adiciona uma unidade e inicia checkout nativo`, async ({ page }) => {
    const posts = await fixture(page);
    await page.locator(`[data-ritual-id="${kit.id}"] .ritual-buy`).click();
    await expect(page).toHaveURL(`${origin}/comprar/`);
    await expect(page.getByRole("heading", { name: "Finalização de teste" })).toBeVisible();
    expect(posts).toHaveLength(2);
    expect([...posts[0].entries()]).toEqual([["add_to_cart", kit.productId], ["quantity", "1"]]);
    expect([...posts[1].entries()]).toEqual([["go_to_checkout", "Iniciar compra"]]);
    await expect(page.getByRole("dialog")).toHaveCount(0);
  });
}

test("bloco de kits: pode carregar antes da página e o editor pode recriar o host", async ({ page }) => {
  await fixture(page, { before: true });
  await page.addScriptTag({ content: installer.match(/<script>([\s\S]*?)<\/script>/)![1] });
  await expect(page.locator("#kits-grand-amour")).toHaveCount(1);
  await page.evaluate(() => {
    const host = document.getElementById("ga-nuvemshop-page")!;
    host.replaceWith(host.cloneNode(false));
  });
  await expect(page.locator("#kits-grand-amour .ritual-card")).toHaveCount(4);
  await expect(page.locator("#kits-grand-amour")).toHaveCount(1);
});

for (const options of [{ variant: true }, { mismatch: true }, { soldOut: true }]) {
  test(`bloco de kits: não adiciona produto que exige revisão ${JSON.stringify(options)}`, async ({ page }) => {
    const posts = await fixture(page, options);
    const card = page.locator(".ritual-card").first();
    await card.locator(".ritual-add").click();
    await expect(card.getByRole("link", { name: "Ver kit", exact: true })).toBeVisible();
    expect(posts).toHaveLength(0);
    await expect(page).toHaveURL(fixtureUrl);
  });
}

test("bloco de kits: falha na loja permite consultar o kit sem confirmar adição", async ({ page }) => {
  const posts = await fixture(page, { failPost: true });
  const card = page.locator(".ritual-card").first();
  await card.locator(".ritual-add").click();
  await expect(card.getByRole("link", { name: "Ver kit", exact: true })).toBeVisible();
  await expect(card.locator(".ritual-notice")).not.toContainText("Solicitação enviada");
  expect(posts).toHaveLength(1);
  await expect(card.locator(".ritual-add")).toBeEnabled();
});

test("bloco de kits: limite de caracteres, teclado e acessibilidade", async ({ page }) => {
  expect(installer.length).toBeLessThan(50000);
  expect(Buffer.byteLength(installer)).toBeLessThan(50000);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await fixture(page);
  await page.locator("#kits-grand-amour").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Ver próximos kits" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Ver kits anteriores" })).toBeEnabled();
  const audit = await new AxeBuilder({ page }).include(["#ga-nuvemshop-page", "#kits-grand-amour"]).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(audit.violations).toEqual([]);
});
