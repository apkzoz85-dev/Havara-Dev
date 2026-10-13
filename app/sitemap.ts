import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/privacy", "/disclaimer"];
  return pages.flatMap((p) => [
    { url: `${SITE.url}${p || "/"}`, changeFrequency: "weekly" as const, priority: p ? 0.3 : 1, alternates: { languages: { ar: `${SITE.url}${p || "/"}`, en: `${SITE.url}/en${p}` } } },
    { url: `${SITE.url}/en${p}`, changeFrequency: "weekly" as const, priority: p ? 0.3 : 0.9, alternates: { languages: { ar: `${SITE.url}${p || "/"}`, en: `${SITE.url}/en${p}` } } },
  ]);
}
