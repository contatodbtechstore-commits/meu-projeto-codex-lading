import AxeBuilder from "@axe-core/playwright";
import { test, expect } from "@playwright/test";

test("desktop: conteúdo, recursos locais e navegação sem erros", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const failed: string[] = [];
  page.on("response", (response) => {
    if (response.status() >= 400) failed.push(response.url());
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page).toHaveTitle(/Aura Bloom Beauty/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "extraordinário.",
  );
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole("link", { name: "Explorar Nossos Kits" }).click();
  await expect(page).toHaveURL(/#kits$/);
  await expect(page.getByRole("heading", { name: "Kit Glow" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Quero este Kit:/ }),
  ).toHaveCount(3);
  // Imagens lazy só são verificadas depois que entram no viewport e concluem o carregamento.
  for (const image of await page.locator("img").all()) {
    await image.evaluate((img) =>
      img.scrollIntoView({ block: "center", behavior: "instant" }),
    );
    await expect
      .poll(() =>
        image.evaluate(
          (img) =>
            (img as HTMLImageElement).complete &&
            (img as HTMLImageElement).naturalWidth > 0,
        ),
      )
      .toBeTruthy();
  }
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});

test("seleção: foco, cópia, download, Escape e troca de kit", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  const button = page.getByRole("button", {
    name: "Quero este Kit: Kit Glow",
    exact: true,
  });
  await button.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(dialog.getByRole("heading")).toContainText("Kit Glow");
  await page.getByRole("button", { name: "Copiar meu interesse" }).click();
  await expect(page.getByRole("status")).toContainText("copiado");
  expect(await page.evaluate(() => navigator.clipboard.readText())).toContain(
    "Kit Glow",
  );
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Baixar resumo da escolha" }).click();
  expect((await download).suggestedFilename()).toBe("meu-glow-aura-bloom.txt");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(button).toBeFocused();
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Premium", exact: true })
    .click();
  await expect(dialog.getByRole("heading")).toContainText("Kit Premium");
  await page.getByRole("button", { name: "Fechar seleção" }).click();
  await expect(dialog).not.toBeVisible();
});

test("sem permissão de clipboard: oferece cópia manual", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("Permissão negada")) },
      configurable: true,
    });
  });
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Essencial", exact: true })
    .click();
  await page.getByRole("button", { name: "Copiar meu interesse" }).click();
  await expect(page.getByRole("textbox")).toHaveValue(/Kit Essencial/);
});

test("mobile: menu, teclado, FAQ e seleção", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(
    page.getByRole("navigation", { name: "Navegação mobile" }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Abrir menu" })).toBeFocused();
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page
    .getByRole("navigation", { name: "Navegação mobile" })
    .getByRole("link", { name: "Nossos Kits" })
    .click();
  await expect(
    page.getByRole("navigation", { name: "Navegação mobile" }),
  ).toHaveCount(0);
  await expect(page).toHaveURL(/#kits$/);
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Glow", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Fechar seleção" }).click();
  const question = page
    .locator("summary")
    .filter({ hasText: "O que vem em cada kit?" });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details[open]")).toContainText("demonstrativos");
  await question.click();
  await expect(page.locator("details[open]")).toHaveCount(0);
});

for (const width of [320, 390, 768, 1024, 1440]) {
  test(`layout sem transbordamento em ${width}px e movimento reduzido`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
    expect(
      await page
        .locator(".marquee-track")
        .evaluate((el) => getComputedStyle(el).animationName),
    ).toBe("none");
    await page.locator("footer").scrollIntoViewIfNeeded();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBeTruthy();
  });
}

test("acessibilidade: página e seleção sem violações automáticas WCAG A/AA", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 700) {
    await page.evaluate((y) => scrollTo(0, y), y);
    await page.waitForTimeout(120);
  }
  await page.waitForTimeout(800);
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Glow", exact: true })
    .click();
  const modalResult = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(modalResult.violations).toEqual([]);
});

test("controle de movimento acessível por teclado e preferência do sistema", async ({
  page,
}) => {
  await page.goto("/");
  const control = page.locator(".motion-toggle");
  await control.focus();
  await page.keyboard.press("Enter");
  await expect(control).toHaveAttribute("aria-pressed", "true");
  expect(
    await page
      .locator(".marquee-track")
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe("paused");
  await expect
    .poll(() =>
      page
        .locator(".hero-products")
        .evaluate((el) => getComputedStyle(el).transform),
    )
    .toBe("none");
  await page.keyboard.press("Enter");
  await expect(control).toHaveAttribute("aria-pressed", "false");
  expect(
    await page
      .locator(".marquee-track")
      .evaluate((el) => getComputedStyle(el).animationPlayState),
  ).toBe("running");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(control).toHaveCount(0);
});

test("menu aberto não persiste ao passar para desktop", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(
    page.getByRole("navigation", { name: "Navegação mobile" }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("navigation", { name: "Navegação principal" }),
  ).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(
    page.getByRole("button", { name: "Abrir menu" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("todos os links internos e perguntas frequentes têm destino e resposta", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const links = page.locator('a[href^="#"]');
  for (let i = 0; i < (await links.count()); i++) {
    const link = links.nth(i);
    if (
      !(await link.isVisible()) ||
      (await link.getAttribute("class")) === "skip-link"
    )
      continue;
    const href = await link.getAttribute("href");
    expect(href).not.toBeNull();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator(href!)).toBeVisible();
  }
  for (const details of await page.locator("details").all()) {
    await details.locator("summary").click();
    await expect(details).toHaveAttribute("open", "");
    await expect(details.locator(".faq-answer")).toBeVisible();
    await details.locator("summary").click();
    await expect(details).not.toHaveAttribute("open");
  }
});

test("celular pequeno: modal rola, mantém fechar acessível e isola o fundo", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Premium", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await dialog.evaluate((el) => {
    el.scrollTop = el.scrollHeight;
  });
  const close = page.getByRole("button", { name: "Fechar seleção" });
  const bounds = await close.boundingBox();
  expect(bounds!.y).toBeGreaterThanOrEqual(0);
  expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(568);
  for (let i = 0; i < 6; i++) {
    await page.keyboard.press("Tab");
    // O diálogo nativo permite passar pelo chrome do navegador; controles de fundo continuam inertes.
    expect(
      await dialog.evaluate(
        (el) =>
          el.contains(document.activeElement) ||
          (!document.hasFocus() && document.activeElement === document.body),
      ),
    ).toBeTruthy();
  }
  await close.click();
  await expect(dialog).not.toBeVisible();
  await page
    .getByRole("button", { name: "Quero este Kit: Kit Essencial", exact: true })
    .click();
  await page.mouse.click(2, 2);
  await expect(dialog).not.toBeVisible();
});

test("SEO: metadados estáticos, idioma e hierarquia", async ({
  page,
  request,
}) => {
  const html = await (await request.get("/")).text();
  expect(html).toContain('lang="pt-BR"');
  expect(html).toContain("Aura Bloom Beauty");
  expect(html).not.toContain("__SITE_");
  expect(html).not.toContain('rel="canonical"');
  await page.goto("/");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Aura Bloom Beauty/,
  );
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "pt_BR",
  );
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(page.locator('a[href=""],a[href="#"]')).toHaveCount(0);
});
