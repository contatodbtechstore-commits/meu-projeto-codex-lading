import { content, type Kit } from "@/content";

export function isValidHttpsUrl(value: string | null | undefined): value is string {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && !["example.com", "example.org", "localhost"].includes(url.hostname);
  } catch { return false; }
}

export function checkoutUrl(kit: Kit): string | null {
  return isValidHttpsUrl(kit.checkoutUrl) ? kit.checkoutUrl : null;
}
export function formatPrice(priceCents: number | null) {
  return typeof priceCents === "number" && Number.isFinite(priceCents) && priceCents >= 0
    ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(priceCents / 100)
    : null;
}
export function discountPercent(kit: Kit): number | null {
  const { originalPriceCents: original, priceCents: current } = kit;
  if (original === null || current === null || original <= current || current < 0) return null;
  return Math.round((1 - current / original) * 100);
}
export function whatsappHref() {
  const digits = content.brand.whatsapp.phone?.replace(/\D/g, "") || "";
  if (digits.length < 12 || digits.length > 15) return null;
  return "https://wa.me/" + digits + "?text=" + encodeURIComponent(content.brand.whatsapp.message);
}
