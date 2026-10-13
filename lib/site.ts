// ===== Global site config — edit here only =====
export const SITE = {
  url: "https://hava-residence.com", // ← غيّرها للدومين الفعلي قبل الرفع
  phone: "01001050018",
  phoneIntl: "+201001050018",
  whatsapp: "201001050018",
  developerHotline: "16861",
  web3formsKey: "9ccc38bd-3017-4286-a082-e3aae869c3fa",
  agencyName: "Grandeur Spaces",
  agencyNameAr: "جراندير سبيسز",

  // Google Ads — replace placeholders with real IDs/labels
  gtagId: "AW-XXXXXXXXXX",
  conversions: {
    form: "AW-XXXXXXXXXX/FORM_LABEL",
    whatsapp: "AW-XXXXXXXXXX/WA_LABEL",
    call: "AW-XXXXXXXXXX/CALL_LABEL",
  },
} as const;

export type Lang = "ar" | "en";

export const waLink = (lang: Lang) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    lang === "ar"
      ? "مرحباً، أريد معرفة تفاصيل وأسعار هافا ريزيدنس – العاصمة الإدارية R8"
      : "Hello, I'd like details and prices for Hava Residence – New Capital R8"
  )}`;

export const telLink = `tel:${SITE.phone}`;

export const path = (lang: Lang, p = "") =>
  lang === "ar" ? `/${p}`.replace(/\/$/, "") || "/" : `/en${p ? `/${p}` : ""}`;
