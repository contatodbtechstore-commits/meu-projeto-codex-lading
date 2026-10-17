import type { Kit } from "../content";
import { formatPrice, getWhatsAppUrl } from "./commerce";

export interface CatalogValidationOptions {
  release?: boolean;
  demoMode: boolean;
  whatsapp: string;
  siteUrl: string;
}

export function validateCatalog(
  kits: readonly Kit[],
  options: CatalogValidationOptions,
): string[] {
  const issues: string[] = [];
  const ids = new Set<string>();
  for (const kit of kits) {
    const prefix = `Kit ${kit.id || "sem ID"}`;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kit.id))
      issues.push(
        `${prefix}: use um ID único, com letras minúsculas, números e hífens.`,
      );
    if (ids.has(kit.id)) issues.push(`${prefix}: ID duplicado.`);
    ids.add(kit.id);
    if (!Number.isFinite(kit.order))
      issues.push(`${prefix}: ordem de exibição inválida.`);
    if (!kit.published) continue;
    for (const [field, value] of [
      ["nome", kit.name],
      ["descrição", kit.description],
      ["detalhes", kit.detail],
    ] as const) {
      if (!value.trim()) issues.push(`${prefix}: preencha ${field}.`);
    }
    if (kit.price !== null && formatPrice(kit.price) === null)
      issues.push(`${prefix}: preço deve ser um número não negativo ou null.`);
    if (
      kit.promotionalPrice !== null &&
      (formatPrice(kit.promotionalPrice) === null ||
        formatPrice(kit.price) === null ||
        kit.promotionalPrice >= kit.price!)
    )
      issues.push(
        `${prefix}: preço promocional exige preço regular válido e deve ser menor que ele.`,
      );
    for (const image of [kit, ...kit.additionalImages]) {
      if (!image.image.trim() || !image.imageAlt.trim())
        issues.push(
          `${prefix}: cada imagem precisa de caminho e descrição acessível.`,
        );
    }
    for (const product of kit.includedProducts) {
      if (!product.name.trim())
        issues.push(`${prefix}: produto incluído sem nome.`);
      if (
        product.quantity !== undefined &&
        (!Number.isInteger(product.quantity) || product.quantity <= 0)
      )
        issues.push(
          `${prefix}: a quantidade de cada produto deve ser um inteiro positivo.`,
        );
    }
    if (kit.highlights.some((text) => !text.trim()))
      issues.push(`${prefix}: remova destaques vazios.`);
  }
  if (options.whatsapp.trim() && !getWhatsAppUrl(options.whatsapp, ""))
    issues.push(
      "O WhatsApp precisa de número internacional válido, com país e DDD; não use texto de exemplo.",
    );
  if (options.siteUrl) {
    try {
      const url = new URL(options.siteUrl);
      if (url.protocol !== "https:" || url.username || url.password)
        throw new Error();
    } catch {
      issues.push(
        "O domínio público precisa ser uma URL HTTPS válida, sem credenciais.",
      );
    }
  }
  if (options.release) {
    if (options.demoMode)
      issues.push(
        "Publicação comercial: substitua os dados demonstrativos e só então defina catalog.demoMode como false.",
      );
    if (!getWhatsAppUrl(options.whatsapp, ""))
      issues.push(
        "Publicação comercial: configure o WhatsApp real da marca em brand.whatsapp.",
      );
    if (!options.siteUrl)
      issues.push(
        "Publicação comercial: configure o domínio HTTPS definitivo em seo.siteUrl.",
      );
    if (!kits.some((kit) => kit.published))
      issues.push(
        "Publicação comercial: publique pelo menos um kit com dados confirmados.",
      );
  }
  return issues;
}
