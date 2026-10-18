import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { ritualKits } from "../src/rituals";

for (const width of [320, 390, 768, 1440]) {
  test(`kits: deslizar, controles e limites em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    const section = page.locator("#kits-grand-amour");
    await section.scrollIntoViewIfNeeded();
    await expect(section.locator(".ritual-card")).toHaveCount(4);
    expect(await section.evaluate((el) => !!el.previousElementSibling?.matches("#kits") && !!el.nextElementSibling?.matches("#beneficios"))).toBeTruthy();
    const previous = section.getByRole("button", { name: "Ver kits anteriores" });
    const next = section.getByRole("button", { name: "Ver próximos kits" });
    await expect(previous).toBeDisabled();
    await expect(next).toBeEnabled();
    await next.click();
    await expect(previous).toBeEnabled();
    await expect.poll(() => section.locator(".ritual-track").evaluate((el) => el.scrollLeft)).toBeGreaterThan(100);
    const dots = section.locator(".ritual-dots button");
    await dots.last().click();
    await expect(next).toBeDisabled();
    await expect(dots.last()).toHaveAttribute("aria-current", "true");
    await dots.first().click();
    await expect(previous).toBeDisabled();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
    for (const card of await section.locator(".ritual-card").all()) {
      const row = card.locator(".ritual-card-actions");
      expect(await row.evaluate((el) => el.scrollWidth <= el.clientWidth + 1)).toBeTruthy();
    }
  });
}

test("kits: cada compra tem o destino certo e carrinho envia só 1 unidade do kit", async ({ page }) => {
  for (const kit of ritualKits) {
    await page.goto("/");
    const card = page.locator(".ritual-card").filter({ has: page.getByRole("heading", { name: kit.name, exact: true }) });
    await expect(card.locator(".ritual-buy")).toHaveAttribute("href", kit.url);
    await expect(card.locator("img")).toHaveAttribute("src", kit.image);
    // Intercepta o POST; o teste nunca altera carrinhos reais.
    await page.route("https://mkcmagazine.com/comprar/", async (route) => {
      const request = route.request();
      expect(request.method()).toBe("POST");
      expect([...new URLSearchParams(request.postData() || "").entries()]).toEqual([
        ["add_to_cart", kit.productId], ["quantity", "1"],
      ]);
      await route.fulfill({ contentType: "text/html", body: "<h1>Carrinho de teste</h1>" });
    });
    await card.getByRole("button", { name: /Adicionar 1 Kit/ }).click();
    await expect(page).toHaveURL("https://mkcmagazine.com/comprar/");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    await page.unroute("https://mkcmagazine.com/comprar/");
  }
});

test("kits: teclado e acessibilidade da nova seção", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.locator("#kits-grand-amour").scrollIntoViewIfNeeded();
  const next = page.getByRole("button", { name: "Ver próximos kits" });
  await next.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Ver kits anteriores" })).toBeEnabled();
  const audit = await new AxeBuilder({ page }).include("#kits-grand-amour").withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(audit.violations).toEqual([]);
});
