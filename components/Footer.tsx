import Link from "next/link";
import { dict } from "@/lib/content";
import { path, SITE, type Lang, type Project } from "@/lib/site";
import { ProjectLogo } from "./Brand";

export default function Footer({ lang, project = "hava" }: { lang: Lang; project?: Project }) {
  const d = dict(lang);
  return (
    <footer className={`${project === "nuzul" ? "bg-char" : "bg-ink"} pb-28 pt-12 text-white/70 md:pb-10`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <ProjectLogo project={project} className="h-9 w-auto" />
            <span className="h-8 w-px bg-white/20" />
            <img src="/brand/qurtuba-logo-white.png" alt="Qurtuba Developments" width={283} height={74} className="h-7 w-auto opacity-80" loading="lazy" />
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href={path(lang, "about")} className={project === "nuzul" ? "hover:text-gold" : "hover:text-lagoon"}>{d.footer.links.about}</Link>
            <Link href={path(lang, "privacy")} className={project === "nuzul" ? "hover:text-gold" : "hover:text-lagoon"}>{d.footer.links.privacy}</Link>
            <Link href={path(lang, "disclaimer")} className={project === "nuzul" ? "hover:text-gold" : "hover:text-lagoon"}>{d.footer.links.disclaimer}</Link>
            <a href={`tel:${SITE.phone}`} dir="ltr" className={project === "nuzul" ? "text-gold" : "text-lagoon"}>{SITE.phone}</a>
          </nav>
        </div>
        <p className="mt-6 max-w-4xl text-xs leading-6 text-white/50">{d.footer.disclosure}</p>
        <p className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} {SITE.agencyName} — {d.footer.rights}</p>
      </div>
    </footer>
  );
}
