import type { MetadataRoute } from "next";
import { content } from "@/content";

export default function robots(): MetadataRoute.Robots {
  return { rules: content.publishReady ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" } };
}
