import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";

const source = await readFile("integration/nuvemshop/mkc-kits-clean.html", "utf8");
const installer = await readFile("integration/nuvemshop/mkc-kits-instalar.html", "utf8");
const manifest = JSON.parse(await readFile("integration/nuvemshop/mkc-kits-manifest.json", "utf8"));
const origin = "https://mkcmagazine.com";
const necessity = "/produtos/kit-necessaire-da-beleza-completa-15-a-20-itens-1rglv/";

async function fixture(page: Page, options: { canonical?: string; failed?: boolean; soldOut?: boolean; noPix?: boolean } = {}) {
  await page.route("https://dcdn-us.mitiendanube.com/**", (route) => route.abort());
  await page.route(manifest.url, async (route) => route.fulfill({ body: await readFile("public/nuvemshop/mkc-kits-clean-v1.js"), contentType: "text/javascript; charset=utf-8", headers: { "access-control-allow-origin": "*" } }));
  await page.route(`${origin}/produtos/**`, (route) => {
    if (options.failed) return route.fulfill({ status: 503, body: "Temporariamente indisponível" });
    const path = new URL(route.request().url()).pathname;
    return route.fulfill({ contentType: "text/html; charset=utf-8", body: `<html><head><link rel="canonical" href="${origin}${options.canonical || path}"></head><body><form id="product_form"><input type="submit" data-store="product-buy-button" value="${options.soldOut ? 'Esgotado' : 'Comprar'}" ${options.soldOut ? 'disabled' : ''}></form><span id="price_display" data-product-price="9990">R$99,90</span>${options.noPix ? '' : '<span class="js-payment-discount-price-product" data-priceraw-without-shipping="9491">R$94,91</span><span class="js-payment-discount-name-product">Pix</span>'}</body></html>` });
  });
  await page.route(`${origin}/mkc-clean-fixture/`, (route) => route.fulfill({ contentType: "text/html; charset=utf-8", body: `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Campanha MKC</title><style>body{margin:0;background:yellow;color:blue}h2{font:50px monospace}button{background:lime;font-size:40px}.container{padding:50px;max-width:600px}</style></head><body><header class="js-header">Cabeçalho original</header><main id="MainContent"><section class="ns-section"><div class="container">${installer}</div></section></main><footer id="ns-section-footer">Rodapé original</footer></body></html>` }));
  await page.goto(`${origin}/mkc-clean-fixture/`);
  await expect(page.locator("#mkc-kits-clean")).toBeVisible();
}

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`campanha MKC: paleta própria, organização e limites em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await fixture(page);
    await expect(page.locator("body>header.js-header")).toBeHidden();
    await expect(page.locator("body>footer#ns-section-footer")).toBeHidden();
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator("#m2-outros-kits .m2-card")).toHaveCount(4);
    await expect(page.locator(".m2-thumbs button")).toHaveCount(5);
    await expect(page.locator(".m2-feature .m2-btn")).toHaveCSS("background-color", "rgb(201, 43, 104)");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    await page.locator(".m2-legal").scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    if (width <= 1000) {
      const next = page.getByRole("button", { name: "Ver próximos kits" });
      await next.click();
      await expect(page.getByRole("button", { name: "Ver kits anteriores" })).toBeEnabled();
      await page.locator(".m2-dots button").last().click();
      await expect(next).toBeDisabled();
    }
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.getByRole("link", { name: "Rever os outros kits" }).click();
    expect(errors).toEqual([]);
  });
}

test("campanha MKC: miniaturas, ampliação, Escape e FAQ por teclado", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await fixture(page);
  const thumbnail = page.getByRole("button", { name: "Ver foto 3 da Necessaire" });
  await thumbnail.click();
  await expect(thumbnail).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#m2-main-photo")).toHaveAttribute("alt", "Foto real 3 da Necessaire da Beleza");
  await expect(page.locator("#m2-main-photo")).toHaveAttribute("src", /3-e7c912.*1024-1024.webp$/);
  const zoom = page.getByRole("link", { name: "Ampliar a foto da Necessaire da Beleza" });
  await zoom.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).overflow)).toBe("hidden");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(zoom).toBeFocused();
  const question = page.locator("summary").filter({ hasText: "É uma compra avulsa" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details[open]")).toContainText("sem mensalidade");
});

test("campanha MKC: consulta preço/Pix pelo produto correto e sinaliza indisponibilidade", async ({ page }) => {
  await fixture(page, { soldOut: true });
  const feature = page.locator(".m2-feature");
  await feature.scrollIntoViewIfNeeded();
  await expect(feature.locator("[data-mkc-price]")).toContainText("99,90");
  await expect(feature.locator("[data-mkc-pix]")).toContainText("94,91 com Pix");
  await expect(feature.locator("[data-mkc-price-note]")).toHaveText("Preço consultado na loja");
  await expect(feature.locator("[data-mkc-buy]")).toContainText("Consultar disponibilidade");
  await expect(feature.locator("[data-mkc-buy]")).toHaveAttribute("href", `${origin}${necessity}`);
});

for (const options of [{ failed: true }, { canonical: "/produtos/outro-produto/" }]) {
  test(`campanha MKC: mantém referências quando consulta não é válida ${JSON.stringify(options)}`, async ({ page }) => {
    await fixture(page, options);
    const feature = page.locator(".m2-feature");
    await feature.scrollIntoViewIfNeeded();
    await expect(feature.locator("[data-mkc-price]")).toHaveText("R$ 89,90");
    await expect(feature.locator("[data-mkc-price-note]")).toHaveText("Preço de referência");
  });
}

test("campanha MKC: ausência de condição Pix não mantém desconto antigo", async ({ page }) => {
  await fixture(page, { noPix: true });
  const feature = page.locator(".m2-feature");
  await feature.scrollIntoViewIfNeeded();
  await expect(feature.locator("[data-mkc-price]")).toContainText("99,90");
  await expect(feature.locator("[data-mkc-pix]")).toBeHidden();
});

test("campanha MKC: destinos existentes, tamanho do código e instalação idempotente", async ({ page }) => {
  expect(source.length).toBeLessThan(50000);
  expect(Buffer.byteLength(source)).toBeLessThan(50000);
  expect(installer.length).toBeLessThan(50000);
  expect(source.toLowerCase()).not.toContain("últimas unidades");
  expect(source.toLowerCase()).not.toContain("#f27186");
  await fixture(page);
  const buttons = page.locator("[data-mkc-buy]");
  await expect(buttons).toHaveCount(5);
  for (const button of await buttons.all()) await expect(button).toHaveAttribute("href", /^https:\/\/mkcmagazine\.com\/produtos\//);
  await expect(page.getByRole("link", { name: "Explorar maquiagem" })).toHaveAttribute("href", `${origin}/maquiagem/`);
  await expect(page.getByRole("link", { name: "Conhecer Grand Amour" })).toHaveAttribute("href", `${origin}/grand-amour/`);
  await page.addScriptTag({ content: installer.match(/<script>([\s\S]*?)<\/script>/)![1] });
  await expect(page.locator("#mkc-kits-clean")).toHaveCount(1);
  await page.evaluate(() => document.getElementById("mkc-campaign-slot")!.replaceChildren());
  await expect(page.locator("#mkc-kits-clean")).toHaveCount(1);
  await page.evaluate(() => document.getElementById("mkc-campaign-slot")!.remove());
  await expect(page.locator("body>header.js-header")).toBeVisible();
  await expect(page.locator("body>footer#ns-section-footer")).toBeVisible();
});

test("campanha MKC: acessibilidade da página e da foto ampliada", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await fixture(page);
  const audit = await new AxeBuilder({ page }).include("#mkc-kits-clean").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(audit.violations).toEqual([]);
  await page.getByRole("link", { name: "Ampliar a foto da Necessaire da Beleza" }).click();
  const dialogAudit = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(dialogAudit.violations).toEqual([]);
});
