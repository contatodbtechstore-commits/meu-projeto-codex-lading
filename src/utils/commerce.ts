import { brand, catalog, type Kit, type ProductImage } from "../content";
import type { CSSProperties } from "react";

const reais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
export function formatPrice(value: number | null | undefined): string | null {
  return typeof value === "number" && Number.isFinite(value) && value >= 0
    ? reais.format(value)
    : null;
}

/** Valida o formato; a existência do número deve ser confirmada pela marca. */
export function getWhatsAppUrl(phone: string, message: string): string | null {
  if (!/^\+?[\d\s().-]+$/.test(phone.trim())) return null;
  const digits = phone.replace(/\D/g, "");
  return /^[1-9]\d{9,14}$/.test(digits)
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : null;
}

export function photoStyle(image: ProductImage): CSSProperties | undefined {
  return image.imageMode === "photo"
    ? {
        objectFit: image.imageFit ?? "contain",
        objectPosition: image.imagePosition ?? "center",
      }
    : undefined;
}

export function getKitPrice(kit: Pick<Kit, "price" | "promotionalPrice">) {
  const regular = formatPrice(kit.price);
  const promotional = formatPrice(kit.promotionalPrice);
  const isPromotion =
    regular !== null &&
    promotional !== null &&
    kit.promotionalPrice! < kit.price!;
  return {
    current: isPromotion ? promotional : regular,
    previous: isPromotion ? regular : null,
  };
}

export function buildKitMessage(kit: Kit): string {
  const custom = kit.whatsappMessage?.trim();
  const template =
    custom ||
    (kit.availability === "unavailable"
      ? "Olá! Gostaria de consultar a disponibilidade do {kit}."
      : catalog.whatsappMessage);
  const text = template
    .replaceAll("{kit}", kit.name)
    .replaceAll("{brand}", brand.fullName);
  // Mesmo um texto personalizado sem marcador não perde a identificação do kit.
  return template.includes("{kit}")
    ? text
    : `${text}\n${kit.kind === "product" ? "Produto" : "Kit"} selecionado: ${kit.name}.`;
}

export function kitAction(kit: Kit): string {
  return kit.availability === "unavailable"
    ? "Consultar disponibilidade"
    : kit.kind === "product" ? "Quero este produto" : "Quero este Kit";
}

export function availabilityLabel(kit: Kit): string {
  if (getStoreProductUrl(kit.purchaseUrl)) {
    if (kit.priceSource === "store") return kit.availability === "unavailable"
      ? "Indisponível na loja. Consulte a reposição."
      : "Preço consultado na loja. Confirme as condições ao comprar.";
    return "Preço de referência. Consulte preço e estoque na loja.";
  }
  return {
    available: "Disponível",
    "on-request": "Disponibilidade a confirmar",
    unavailable: "Indisponível no momento",
  }[kit.availability];
}

export function getPublishedKits(items: readonly Kit[]): Kit[] {
  return items
    .filter((kit) => kit.published)
    .slice()
    .sort((a, b) => a.order - b.order);
}

/** Somente páginas públicas de produto da loja, sem credenciais ou destinos externos. */
export function getStoreProductUrl(value?: string): string | null {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      ["mkcmagazine.com", "www.mkcmagazine.com"].includes(url.hostname) &&
      url.pathname.startsWith("/produtos/") && !url.username && !url.password &&
      !url.port ? url.href : null;
  } catch { return null; }
}
