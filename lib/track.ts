"use client";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pushes lead events to GTM's dataLayer.
 * In GTM create Custom Event triggers with these event names:
 *   lead_form      → fired on /thank-you after a real form submit
 *   whatsapp_click → any WhatsApp button
 *   call_click     → any call button
 * Each event carries: project (hava | nuzul), page_language (ar | en)
 */
export function trackConversion(kind: "form" | "whatsapp" | "call") {
  if (typeof window === "undefined") return;
  const event = kind === "form" ? "lead_form" : kind === "whatsapp" ? "whatsapp_click" : "call_click";
  const path = window.location.pathname;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    project: path.includes("/nuzul") || window.location.search.includes("p=nuzul") ? "nuzul" : "hava",
    page_language: path.startsWith("/en") ? "en" : "ar",
  });
}
