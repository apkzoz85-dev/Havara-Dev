"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nuzulDict } from "@/lib/nuzul";
import { ProjectLogo } from "./Brand";
import { PhoneCall, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { dict } from "@/lib/content";
import { path, telLink, waLink, type Lang } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import LeadForm from "./LeadForm";
import { privacyText } from "@/lib/legal";

type UI = { openPrivacy: () => void; openLead: () => void };
const Ctx = createContext<UI>({ openPrivacy: () => {}, openLead: () => {} });
export const useUI = () => useContext(Ctx);

function Modal({ open, onClose, children, label, wide = false }: {
  open: boolean; onClose: () => void; children: React.ReactNode; label: string; wide?: boolean;
}) {
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-teal-deep/70 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose} role="dialog" aria-modal="true" aria-label={label}>
      <div onClick={(e) => e.stopPropagation()} className={`rise relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl ${wide ? "sm:max-w-2xl" : "sm:max-w-md"}`}>
        <button onClick={onClose} aria-label="close" className="absolute end-3 top-3 z-10 grid size-9 place-items-center rounded-full bg-black/5 text-ink hover:bg-black/10">
          <X className="size-4" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default function UIProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const d = dict(lang);
  const pathname = usePathname() || "";
  const project = pathname.includes("/nuzul") ? "nuzul" : "hava";
  const onThanks = pathname.includes("thank-you");
  const nz = project === "nuzul";
  const popup = nz ? nuzulDict(lang).popup : d.popup;
  const [privacy, setPrivacy] = useState(false);
  const [lead, setLead] = useState(false);
  const [cookie, setCookie] = useState(false);
  const shown = useRef(false);

  const openLead = useCallback(() => { shown.current = true; setLead(true); }, []);
  const openPrivacy = useCallback(() => setPrivacy(true), []);

  // Popup: 55% scroll OR 16 seconds — once per session
  useEffect(() => {
    if (window.location.pathname.includes("thank-you")) return;
    let seen = false;
    try { seen = sessionStorage.getItem("hava_popup") === "1"; } catch {}
    if (seen) { shown.current = true; return; }
    const fire = () => {
      if (shown.current) return;
      shown.current = true;
      setLead(true);
      try { sessionStorage.setItem("hava_popup", "1"); } catch {}
    };
    const timer = setTimeout(fire, 16000);
    const onScroll = () => {
      const h = document.documentElement;
      if ((h.scrollTop + h.clientHeight) / h.scrollHeight >= 0.55) fire();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    try { if (!localStorage.getItem("hava_cookie")) setCookie(true); } catch { setCookie(true); }
  }, []);
  const decide = (v: string) => { try { localStorage.setItem("hava_cookie", v); } catch {} setCookie(false); };

  return (
    <Ctx.Provider value={{ openPrivacy, openLead }}>
      {children}

      {/* Floating call + WhatsApp (all screens) */}
      {!onThanks && <div className="fixed bottom-5 end-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:end-6">
        <a href={waLink(lang, project)} target="_blank" rel="noopener" onClick={() => trackConversion("whatsapp")} aria-label={d.ui.whatsapp}
          className="grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 sm:size-14">
          <WhatsAppIcon className="size-7" />
        </a>
        <a href={telLink} onClick={() => trackConversion("call")} aria-label={d.ui.call}
          className={`grid size-13 place-items-center rounded-full ${nz ? "bg-gold text-char" : "bg-plum text-white"} shadow-lg shadow-black/25 transition hover:scale-105 sm:size-14`}>
          <PhoneCall className="size-6" />
        </a>
      </div>}

      <Modal open={lead} onClose={() => setLead(false)} label={popup.title}>
        <div className={`${nz ? "bg-char" : "bg-teal-deep"} px-6 pb-6 pt-8 text-white`}>
          <div className="mb-4"><ProjectLogo project={project} className="h-8 w-auto" /></div>
          <p className="text-xl font-bold">{popup.title}</p>
          <p className="mt-1 text-sm text-white/75">{popup.sub}</p>
        </div>
        <div className="p-6"><LeadForm lang={lang} source="popup" project={project} /></div>
      </Modal>

      <Modal open={privacy} onClose={() => setPrivacy(false)} label={d.footer.links.privacy} wide>
        <div className="p-6 sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-teal">{d.footer.links.privacy}</h2>
          <div className="space-y-3 text-sm leading-7 text-ink/80">
            {privacyText(lang).map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <Link href={path(lang, "privacy")} className="mt-5 inline-block text-sm font-semibold text-lagoon underline">{d.footer.links.privacy} ↗</Link>
        </div>
      </Modal>

      {cookie && (
        <div className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-xl rounded-2xl bg-ink/95 p-4 text-sm text-white shadow-xl md:bottom-6 md:start-6 md:end-auto">
          <p className="mb-3 leading-6">{d.cookie.text}{" "}
            <button onClick={openPrivacy} className="underline">{d.footer.links.privacy}</button>
          </p>
          <div className="flex gap-2">
            <button onClick={() => decide("1")} className="btn btn-lagoon px-5 py-2">{d.cookie.accept}</button>
            <button onClick={() => decide("0")} className="btn btn-ghost px-5 py-2">{d.cookie.decline}</button>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
