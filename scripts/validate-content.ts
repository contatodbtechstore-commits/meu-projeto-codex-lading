import { existsSync } from "node:fs";
import { resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import {
  brand,
  catalog,
  kits,
  seo,
  visuals,
  type ProductImage,
} from "../src/content";
import { validateCatalog } from "../src/utils/catalog-validation";

export function validateContent(release: boolean) {
  const issues = validateCatalog(kits, {
    release,
    demoMode: catalog.demoMode,
    whatsapp: brand.whatsapp,
    siteUrl: seo.siteUrl,
  });
  const publicRoot = fileURLToPath(new URL("../public", import.meta.url));
  function validateImage(image: ProductImage) {
    if (/^https:\/\//.test(image.image)) {
      try {
        const url = new URL(image.image);
        if (url.username || url.password) throw new Error();
        return;
      } catch {
        issues.push(
          "Imagem com URL HTTPS inválida ou com credenciais. Use um endereço público sem autenticação.",
        );
        return;
      }
    }
    if (!image.image.startsWith("/") || image.image.startsWith("//")) {
      issues.push(
        `Use um caminho local iniciado por / ou uma URL HTTPS para a imagem: ${image.image}`,
      );
      return;
    }
    try {
      const path = resolve(
        publicRoot,
        `.${decodeURIComponent(new URL(image.image, "https://local.invalid").pathname)}`,
      );
      if (!path.startsWith(publicRoot + sep) || !existsSync(path))
        issues.push(`Imagem local não encontrada em public: ${image.image}`);
    } catch {
      issues.push(`Caminho de imagem inválido: ${image.image}`);
    }
  }
  for (const image of [
    visuals.hero,
    visuals.editorial,
    ...kits
      .filter((kit) => kit.published)
      .flatMap((kit) => [kit, ...kit.additionalImages]),
  ])
    validateImage(image);
  if (issues.length)
    throw new Error(`Revise src/content.ts:\n- ${issues.join("\n- ")}`);
}
