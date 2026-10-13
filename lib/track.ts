"use client";
import { SITE } from "./site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackConversion(kind: "form" | "whatsapp" | "call") {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "conversion", { send_to: SITE.conversions[kind] });
  window.gtag("event", kind === "form" ? "generate_lead" : `click_${kind}`, {
    event_category: "lead",
    event_label: "hava-residence",
  });
}
