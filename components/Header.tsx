"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X, Globe } from "lucide-react";
import { dict } from "@/lib/content";
import { path, telLink, SITE, type Lang, type Project } from "@/lib/site";
import { nuzulDict } from "@/lib/nuzul";
import { ProjectLogo } from "./Brand";
import { trackConversion } from "@/lib/track";

export default function Header({ lang, altHref, home = true, project = "hava" }: { lang: Lang; altHref: string; home?: boolean; project?: Project }) {
  const d = dict(lang);
  const nz = project === "nuzul";
  const nav = nz ? nuzulDict(lang).nav : d.nav;
  const [solid, setSolid] = useState(!home);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!home) return;
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, [home]);

  const base = home ? "" : path(lang);
  return (
    <header className={`fixed inset-x-0 top-0 z-[70] transition-colors duration-300 ${solid || open ? `${nz ? "bg-char/95" : "bg-teal-deep/95"} shadow-lg shadow-black/10 backdrop-blur` : "bg-gradient-to-b from-black/40 to-transparent"}`}>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={path(lang, nz ? "nuzul" : "")} className="flex items-center gap-3" aria-label={nz ? "NUZUL Tower" : "Hava Residence"}>
          <ProjectLogo project={project} />
          <span className="hidden h-7 w-px bg-white/25 sm:block" />
          <img src="/brand/qurtuba-logo-white.png" alt="Qurtuba Developments – قرطبة للتطوير العقاري" width={283} height={74} className="hidden h-6 w-auto opacity-90 sm:block" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="primary">
          {nav.map((n) => (
            <a key={n.id} href={`${base}#${n.id}`} className={`text-sm text-white/85 transition ${nz ? "hover:text-gold" : "hover:text-lagoon"}`}>{n.label}</a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={altHref} hrefLang={lang === "ar" ? "en" : "ar"} className="btn btn-ghost px-3 py-2 text-xs">
            <Globe className="size-4" />
            <span className={lang === "ar" ? "font-[Poppins]" : ""}>{d.ui.switchLang}</span>
          </Link>
          <a href={telLink} onClick={() => trackConversion("call")} className={`btn ${nz ? "btn-gold" : "btn-lagoon"} hidden px-4 py-2 sm:inline-flex`} dir="ltr">
            <Phone className="size-4" /> {SITE.phone}
          </a>
          <button onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full text-white lg:hidden" aria-label={d.ui.menu} aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 pb-5 lg:hidden" aria-label="mobile">
          {nav.map((n) => (
            <a key={n.id} href={`${base}#${n.id}`} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 text-white/90">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
