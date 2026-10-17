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
    : `${text}\nKit selecionado: ${kit.name}.`;
}

export function kitAction(kit: Kit): string {
  return kit.availability === "unavailable"
    ? "Consultar disponibilidade"
    : "Quero este Kit";
}

export function availabilityLabel(kit: Kit): string {
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
