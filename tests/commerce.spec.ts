import { test, expect } from "@playwright/test";
import { formatPrice, getWhatsAppUrl } from "../src/utils/commerce";

test("preço opcional em reais, incluindo zero e valores inválidos", () => {
  expect(formatPrice(null)).toBeNull();
  expect(formatPrice(undefined)).toBeNull();
  expect(formatPrice(-1)).toBeNull();
  expect(formatPrice(NaN)).toBeNull();
  expect(formatPrice(Infinity)).toBeNull();
  expect(formatPrice(149.9)).toMatch(/R\$\s149,90/);
  expect(formatPrice(0)).toMatch(/R\$\s0,00/);
});

test("link WhatsApp valida formato e preserva a mensagem do kit sem enviar nada", () => {
  for (const invalid of [
    "",
    "123",
    "https://example.com",
    "00000000000",
    "numero-desconhecido",
  ])
    expect(getWhatsAppUrl(invalid, "Kit Glow")).toBeNull();
  // Dado sintético apenas para validar a construção da URL; não é contato da marca.
  const url = new URL(
    getWhatsAppUrl(
      "+55 (11) 00000-0000",
      "Olá! Tenho interesse no Kit Glow & Essencial.",
    )!,
  );
  expect(url.origin).toBe("https://wa.me");
  expect(url.pathname).toBe("/5511000000000");
  expect(url.searchParams.get("text")).toBe(
    "Olá! Tenho interesse no Kit Glow & Essencial.",
  );
});

test("promoção só aparece abaixo de um preço regular válido", async () => {
  const { getKitPrice } = await import("../src/utils/commerce");
  expect(getKitPrice({ price: null, promotionalPrice: null })).toEqual({
    current: null,
    previous: null,
  });
  expect(getKitPrice({ price: 150, promotionalPrice: 120 })).toMatchObject({
    current: expect.stringMatching(/120,00/),
    previous: expect.stringMatching(/150,00/),
  });
  expect(
    getKitPrice({ price: 150, promotionalPrice: 150 }).previous,
  ).toBeNull();
  expect(
    getKitPrice({ price: 150, promotionalPrice: 200 }).previous,
  ).toBeNull();
  expect(
    getKitPrice({ price: null, promotionalPrice: 120 }).current,
  ).toBeNull();
});

test("catálogo ordena sem mutar os dados e omite itens não publicados", async () => {
  const { kits } = await import("../src/content");
  const { getPublishedKits } = await import("../src/utils/commerce");
  const input = kits.map((kit, i) => ({
    ...kit,
    order: i === 2 ? 0 : 10,
    published: i !== 1,
  }));
  const before = input.map((kit) => kit.id);
  expect(getPublishedKits(input).map((kit) => kit.id)).toEqual([
    "nutri-skin",
    "serum-ce",
    "puri-derma",
    "hidra-derm",
  ]);
  expect(input.map((kit) => kit.id)).toEqual(before);
  expect(
    getPublishedKits(kits.map((kit) => ({ ...kit, order: 0 }))).map(
      (kit) => kit.id,
    ),
  ).toEqual(kits.map((kit) => kit.id));
});

test("mensagem identifica kit, personalização e consulta de indisponíveis", async () => {
  const { kits } = await import("../src/content");
  const { buildKitMessage } = await import("../src/utils/commerce");
  expect(buildKitMessage(kits[0])).toBe(
    "Olá! Tenho interesse em Sérum C+E e gostaria de saber mais sobre ele.",
  );
  expect(
    buildKitMessage({ ...kits[0], availability: "unavailable" }),
  ).toContain("consultar a disponibilidade do Sérum C+E");
  expect(
    buildKitMessage({
      ...kits[0],
      whatsappMessage: "Olá, {brand}! Quero conhecer {kit}.",
    }),
  ).toBe("Olá, Grand Amour — Beleza & Cosméticos! Quero conhecer Sérum C+E.");
  expect(
    buildKitMessage({
      ...kits[0],
      whatsappMessage: "Gostaria de informações.",
    }),
  ).toContain("Produto selecionado: Sérum C+E");
});

test("validação bloqueia dados inconsistentes e diferencia demonstração de publicação", async () => {
  const { kits } = await import("../src/content");
  const { validateCatalog } = await import("../src/utils/catalog-validation");
  const options = { demoMode: true, whatsapp: "", siteUrl: "" };
  expect(validateCatalog(kits, options)).toEqual([]);
  expect(validateCatalog(kits, { ...options, release: true })).toHaveLength(3);
  const invalid = {
    ...kits[0],
    promotionalPrice: 100,
    price: null,
    includedProducts: [{ name: "Produto", quantity: 0 }],
  };
  const errors = validateCatalog([invalid, invalid], options).join(" ");
  expect(errors).toMatch(/preço promocional/);
  expect(errors).toMatch(/inteiro positivo/);
  expect(errors).toMatch(/ID duplicado/);
});
