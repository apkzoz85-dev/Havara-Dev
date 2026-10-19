// ===== Global site config — edit here only =====
export const SITE = {
  url: "https://hava-residence.com", // ← غيّرها للدومين الفعلي قبل الرفع
  phone: "01001050018",
  phoneIntl: "+201001050018",
  whatsapp: "201001050018",
  developerHotline: "16861",
  agencyName: "Grandeur Spaces",
  agencyNameAr: "جراندير سبيسز",

  // Google Tag Manager container
  gtmId: "GTM-5TFJGJNK",
  // Google Ads tag (gtag.js)
  adsId: "AW-18171758010",
} as const;

export type Lang = "ar" | "en";
export type Project = "hava" | "nuzul";

const waText: Record<Project, Record<Lang, string>> = {
  hava: {
    ar: "مرحباً، أريد معرفة تفاصيل وأسعار هافا ريزيدنس – العاصمة الإدارية R8",
    en: "Hello, I'd like details and prices for Hava Residence – New Capital R8",
  },
  nuzul: {
    ar: "مرحباً، أريد معرفة تفاصيل وأسعار نزل تاور – الداون تاون العاصمة الإدارية",
    en: "Hello, I'd like details and prices for NUZUL Tower – New Capital Downtown",
  },
};

export const waLink = (lang: Lang, project: Project = "hava") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waText[project][lang])}`;

export const telLink = `tel:${SITE.phone}`;

export const path = (lang: Lang, p = "") =>
  lang === "ar" ? `/${p}`.replace(/\/$/, "") || "/" : `/en${p ? `/${p}` : ""}`;
