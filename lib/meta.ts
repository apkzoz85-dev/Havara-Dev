import type { Metadata } from "next";
import { dict } from "./content";
import { nuzulDict } from "./nuzul";
import { SITE, path, type Lang } from "./site";

export function pageMeta(lang: Lang, sub = "", override?: { title?: string; noindex?: boolean }): Metadata {
  const d = dict(lang);
  const url = path(lang, sub);
  const arUrl = path("ar", sub);
  const enUrl = path("en", sub);
  return {
    metadataBase: new URL(SITE.url),
    title: override?.title ? `${override.title} | ${lang === "ar" ? "هافا ريزيدنس" : "Hava Residence"}` : d.meta.title,
    description: d.meta.description,
    keywords: d.meta.keywords,
    alternates: { canonical: url, languages: { ar: arUrl, en: enUrl, "x-default": arUrl } },
    openGraph: {
      type: "website",
      url,
      title: d.meta.title,
      description: d.meta.description,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      alternateLocale: lang === "ar" ? "en_US" : "ar_EG",
      siteName: "Hava Residence",
      images: [{ url: "/images/og-hava-residence.jpg", width: 1200, height: 630, alt: d.meta.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: d.meta.title, description: d.meta.description, images: ["/images/og-hava-residence.jpg"] },
    robots: override?.noindex ? { index: false, follow: false } : { index: true, follow: true },
    icons: { icon: "/favicon.png" },
  };
}

export function nuzulMeta(lang: Lang): Metadata {
  const n = nuzulDict(lang);
  const url = path(lang, "nuzul");
  return {
    ...pageMeta(lang, "nuzul"),
    title: n.meta.title,
    description: n.meta.description,
    keywords: n.meta.keywords,
    openGraph: {
      type: "website",
      url,
      title: n.meta.title,
      description: n.meta.description,
      locale: lang === "ar" ? "ar_EG" : "en_US",
      siteName: "NUZUL Tower",
      images: [{ url: "/images/og-nuzul.jpg", width: 1200, height: 630, alt: n.meta.ogAlt }],
    },
    twitter: { card: "summary_large_image", title: n.meta.title, description: n.meta.description, images: ["/images/og-nuzul.jpg"] },
  };
}
