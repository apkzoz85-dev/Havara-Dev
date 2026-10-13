import Link from "next/link";
import { dict } from "@/lib/content";
import { path, SITE, type Lang } from "@/lib/site";

export default function Footer({ lang }: { lang: Lang }) {
  const d = dict(lang);
  return (
    <footer className="bg-ink pb-24 pt-12 text-white/70 md:pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src="/brand/hava-logo-white.png" alt="Hava Residence" width={325} height={71} className="h-9 w-auto" loading="lazy" />
            <span className="h-8 w-px bg-white/20" />
            <img src="/brand/qurtuba-logo-white.png" alt="Qurtuba Developments" width={283} height={74} className="h-7 w-auto opacity-80" loading="lazy" />
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href={path(lang, "about")} className="hover:text-sun">{d.footer.links.about}</Link>
            <Link href={path(lang, "privacy")} className="hover:text-sun">{d.footer.links.privacy}</Link>
            <Link href={path(lang, "disclaimer")} className="hover:text-sun">{d.footer.links.disclaimer}</Link>
            <a href={`tel:${SITE.phone}`} dir="ltr" className="text-sun">{SITE.phone}</a>
          </nav>
        </div>
        <p className="mt-6 max-w-4xl text-xs leading-6 text-white/50">{d.footer.disclosure}</p>
        <p className="mt-4 text-xs text-white/40">© {new Date().getFullYear()} {SITE.agencyName} — {d.footer.rights}</p>
      </div>
    </footer>
  );
}
