import type { MetadataRoute } from "next";
import { content } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = content.brand.siteUrl;
  return content.publishReady && origin ? [{ url: origin, lastModified: new Date() }] : [];
}
