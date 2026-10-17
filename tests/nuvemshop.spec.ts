import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import { resolve, extname } from "node:path";

const prefix = "https://cdn.jsdelivr.net/gh/contatodbtechstore-commits/meu-projeto-codex-lading@ga-nuvemshop-v1.0.0/public/";
const mime: Record<string, string> = { ".js": "text/javascript", ".svg": "image/svg+xml", ".webp": "image/webp", ".woff2": "font/woff2" };
async function fixture(page: Page, fail = false) {
  await page.route(`${prefix}**`, async (route) => {
    const relative = route.request().url().slice(prefix.length);
    if (fail && relative.endsWith("grand-amour.js")) return route.fulfill({ status: 503, body: "Temporarily unavailable", headers: { "access-control-allow-origin": "*" } });
    const path = resolve("public", relative);
    if (!path.startsWith(resolve("public") + "/")) throw new Error("Invalid asset path");
    await route.fulfill({ body: await readFile(path), contentType: mime[extname(path)], headers: { "access-control-allow-origin": "*" } });
  });
  const block = await readFile("integration/nuvemshop/01-instalar.html", "utf8");
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Grand Amour — MKC Magazine</title><style>
  body{margin:0;color:navy;font-family:Arial;background:white} .header{background:orange;height:120px} .container{max-width:980px;margin:auto;padding:48px} button{background:lime;font-size:32px;border:12px solid red} h1{font:60px monospace;color:blue} footer{min-height:200px;background:gray}
  </style></head><body><header class="js-header header">MKC Magazine</header><main id="MainContent" class="container"><section id="ns-section-heading"><h1>Título padrão da loja</h1></section><section id="ns-section-page_content">Conteúdo padrão vazio</section><section class="ns-section"><div class="container">${block}</div></section></main><footer id="ns-section-footer">Rodapé MKC</footer></body></html>`;
  await page.route("**/integration-fixture", (route) => route.fulfill({ body: html, contentType: "text/html" }));
  await page.goto("/integration-fixture");
  if (!fail) {
    await expect(page.locator("#ga-nuvemshop-page")).toHaveAttribute("data-ga-ready");
    await expect(page.getByRole("heading", { level: 1, name: /Beleza real/ })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
  }
}

test("Nuvemshop: bloco abaixo do limite, isolamento e compra dos cinco produtos", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const block = await readFile("integration/nuvemshop/01-instalar.html", "utf8");
  expect(block.length).toBeLessThan(50000);
  expect(Buffer.byteLength(block)).toBeLessThan(50000);
  expect(block).not.toContain("<iframe");
  await fixture(page);
  await expect(page.locator("body>header.js-header")).toBeHidden();
  await expect(page.locator("#ns-section-heading")).toBeHidden();
  await expect(page.locator("body>footer#ns-section-footer")).toBeHidden();
  const cta = page.getByRole("link", { name: "Explorar Nossa Linha" });
  expect(await cta.evaluate((el) => getComputedStyle(el).fontSize)).not.toBe("32px");
  await cta.click();
  await expect.poll(async () => (await page.locator("#kits").boundingBox())!.y).toBeLessThan(130);
  const buttons = page.getByRole("button", { name: /Quero este produto:/ });
  await expect(buttons).toHaveCount(5);
  for (const button of await buttons.all()) {
    await button.click();
    const buy = page.getByRole("link", { name: "Comprar na MKC Magazine" });
    await expect(buy).toHaveAttribute("href", /^https:\/\/mkcmagazine\.com\/produtos\//);
    await expect(page.locator("#ga-nuvemshop-page")).toHaveAttribute("data-ga-dialog-open");
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe("hidden");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).not.toBeVisible();
  }
  await expect(page.getByRole("link", { name: /Voltar à MKC Magazine/ })).toHaveAttribute("href", "https://mkcmagazine.com/");
  expect(errors).toEqual([]);
});

for (const width of [320, 390, 768, 1440]) {
  test(`Nuvemshop: layout e navegação em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await fixture(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    const host = await page.locator("#ga-nuvemshop-page").boundingBox();
    expect(host!.width).toBe(width);
    if (width <= 640) {
      await page.getByRole("button", { name: "Abrir menu" }).tap({ force: true }).catch(() => page.getByRole("button", { name: "Abrir menu" }).click());
      await page.getByRole("navigation", { name: "Navegação mobile" }).getByRole("link", { name: "Nossa Linha" }).click();
      await expect(page.getByRole("navigation", { name: "Navegação mobile" })).toHaveCount(0);
    }
    await page.getByRole("button", { name: "Quero este produto: Sérum C+E", exact: true }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.getByRole("link", { name: "Comprar na MKC Magazine" })).toBeVisible();
    await page.getByRole("button", { name: "Fechar seleção" }).click();
    await page.locator("footer.footer").scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
  });
}

test("Nuvemshop: editor pode recriar o bloco; remover a página restaura a loja", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await fixture(page);
  await page.locator("#ga-nuvemshop-page").evaluate((host) => host.replaceWith(host.cloneNode(false)));
  await expect(page.getByRole("heading", { level: 1, name: /Beleza real/ })).toBeVisible();
  await expect(page.getByRole("heading", { level: 1, name: /Beleza real/ })).toHaveCount(1);
  await page.locator("#ga-nuvemshop-page").evaluate((host) => host.remove());
  await expect(page.locator("body>header.js-header")).toBeVisible();
  await expect(page.locator("body>footer#ns-section-footer")).toBeVisible();
  await expect(page.locator("#ns-section-heading")).toBeVisible();
});

test("Nuvemshop: fallback com links reais se o arquivo não carregar", async ({ page }) => {
  await fixture(page, true);
  await expect(page.getByRole("status")).toContainText("Não foi possível carregar");
  await expect(page.locator("#ga-nuvemshop-page a")).toHaveCount(5);
  await expect(page.locator("body>footer#ns-section-footer")).toBeVisible();
});

test("Nuvemshop: acessibilidade automática da página e diálogo isolados", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await fixture(page);
  for (const section of await page.locator("#ga-nuvemshop-page .ga-surface section").all()) await section.scrollIntoViewIfNeeded();
  await expect.poll(async () => (await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]);
  await page.getByRole("button", { name: "Quero este produto: Sérum C+E", exact: true }).click();
  expect((await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze()).violations).toEqual([]);
});

test("Nuvemshop: consulta preço e estoque públicos sem confundir produtos relacionados", async ({ page }) => {
  await page.route("**/produtos/**", async (route) => {
    const path = new URL(route.request().url()).pathname;
    expect(route.request().headers()["cookie"]).toBeUndefined();
    const related = { "@type": "Product", "@id": "https://mkcmagazine.com/produtos/outro-produto/", offers: { priceCurrency: "BRL", price: "1.00" } };
    const correct = { "@type": "WebPage", mainEntity: { "@type": "Product", "@id": `https://mkcmagazine.com${path}`, offers: { priceCurrency: "BRL", price: "61.90", availability: "https://schema.org/OutOfStock" } } };
    await route.fulfill({ contentType: "text/html; charset=utf-8", body: `<script type="application/ld+json">${JSON.stringify(related)}</script><script type="application/ld+json">${JSON.stringify(correct)}</script>` });
  });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await fixture(page);
  await page.locator("#kits").scrollIntoViewIfNeeded();
  const card = page.locator(".kit-card").filter({ has: page.getByRole("heading", { name: "Sérum C+E" }) });
  await expect(card.locator(".kit-price")).toContainText("61,90");
  await expect(card).toContainText("Indisponível na loja");
  await card.getByRole("button", { name: "Consultar disponibilidade: Sérum C+E", exact: true }).click();
  await expect(page.getByRole("link", { name: "Ver disponibilidade na MKC" })).toHaveAttribute("href", /serum-facial-vitamina-c-e-grand-amour-19jg5/);
});
