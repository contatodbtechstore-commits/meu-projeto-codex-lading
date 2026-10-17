import { defineConfig, type HtmlTagDescriptor } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { validateContent } from "./scripts/validate-content";
import { brand, seo, visuals } from "./src/content";

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export default defineConfig(({ command, mode }) => {
  if (command === "build") validateContent(mode === "release");
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: "brand-metadata",
        transformIndexHtml: {
          order: "pre",
          handler(html) {
            const tags: HtmlTagDescriptor[] = [{
              tag: "link",
              attrs: {
                rel: "preload",
                as: "image",
                href: visuals.hero.image,
                fetchpriority: "high",
              },
            }];
            if (seo.siteUrl) {
              const url = new URL(seo.siteUrl);
              if (url.protocol !== "https:" || url.username || url.password)
                throw new Error(
                  "seo.siteUrl deve ser uma URL HTTPS pública, sem credenciais.",
                );
              url.hash = "";
              url.search = "";
              tags.push({
                tag: "link",
                attrs: { rel: "canonical", href: url.href },
              });
              tags.push({
                tag: "meta",
                attrs: { property: "og:url", content: url.href },
              });
            }
            return {
              html: html
                .replaceAll("__SITE_TITLE__", escapeHtml(seo.title))
                .replaceAll("__SITE_DESCRIPTION__", escapeHtml(seo.description))
                .replaceAll("__SITE_NAME__", escapeHtml(brand.fullName)),
              tags,
            };
          },
        },
      },
    ],
  };
});
