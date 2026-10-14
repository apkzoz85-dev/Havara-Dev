"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { dict } from "@/lib/content";
import { path, waLink, type Lang, type Project } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { ProjectLogo } from "./Brand";
import WhatsAppIcon from "./WhatsAppIcon";

type Lead = { wa: string; project: Project; name: string; phone: string; unit: string };

export default function ThankYou({ lang }: { lang: Lang }) {
  const d = dict(lang);
  const t = d.thanks;
  const [ready, setReady] = useState(false);
  const [project, setProject] = useState<Project>("hava");
  const [lead, setLead] = useState<Lead | null>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("p") === "nuzul" ? "nuzul" : "hava";
    setProject(p);
    try {
      const raw = sessionStorage.getItem("lead");
      if (raw) setLead(JSON.parse(raw));
      // Google Ads form conversion — only when arriving from a real submit
      if (sessionStorage.getItem("lead_pending") === "1") {
        trackConversion("form");
        sessionStorage.removeItem("lead_pending");
      }
    } catch {}
    setReady(true);
  }, []);

  const nz = project === "nuzul";
  const wa = lead?.wa || waLink(lang, project);
  const projectName = nz ? (lang === "ar" ? "نزل تاور" : "NUZUL Tower") : lang === "ar" ? "هافا ريزيدنس" : "Hava Residence";
  const bg = nz ? "bg-char" : "bg-teal-deep";
  const accent = nz ? "text-gold" : "text-lagoon";
  const img = nz ? "/images/nuzul-tower-dusk.webp" : "/images/hava-hero.webp";

  return (
    <main className={`relative isolate min-h-[100svh] overflow-hidden ${bg} px-4 py-16 text-white transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
      <img src={img} alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
      <div className={`absolute inset-0 -z-10 bg-gradient-to-t ${nz ? "from-char via-char/80" : "from-teal-deep via-teal-deep/80"} to-transparent`} />

      <div className="mx-auto max-w-xl text-center">
        <div className="mb-8 flex justify-center"><ProjectLogo project={project} className="h-12 w-auto" /></div>
        <CheckCircle2 className={`mx-auto size-16 ${accent}`} strokeWidth={1.5} />
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">
          {t.title}{lead?.name ? <> <bdi>{lead.name}</bdi></> : null}!
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-8 text-white/80">{t.body}</p>

        <div className="mt-8 rounded-3xl bg-white/10 p-5 backdrop-blur">
          <p className="mb-3 text-sm text-white/70">{t.notOpened}</p>
          <a href={wa} target="_blank" rel="noopener" className="btn btn-wa w-full py-4 text-base">
            <WhatsAppIcon className="size-5" /> {t.send}
          </a>
        </div>

        {lead && (
          <div className="mt-6 rounded-3xl bg-white p-6 text-start text-ink">
            <p className="mb-3 font-bold">{t.summary}</p>
            <dl className="divide-y divide-black/5 text-sm">
              <div className="flex justify-between py-2"><dt className="text-ink/55">{t.fields.name}</dt><dd className="font-medium">{lead.name}</dd></div>
              <div className="flex justify-between py-2"><dt className="text-ink/55">{t.fields.phone}</dt><dd className="font-medium" dir="ltr">{lead.phone}</dd></div>
              <div className="flex justify-between py-2"><dt className="text-ink/55">{t.fields.project}</dt><dd className="font-medium">{projectName}</dd></div>
              {lead.unit && <div className="flex justify-between py-2"><dt className="text-ink/55">{t.fields.unit}</dt><dd className="font-medium">{lead.unit}</dd></div>}
            </dl>
          </div>
        )}

        <div className="mt-6 rounded-3xl border border-white/15 p-6 text-start">
          <p className="mb-4 font-bold">{t.stepsTitle}</p>
          <ol className="space-y-3">
            {t.steps.map((s, i) => (
              <li key={s} className="flex items-center gap-3 text-sm text-white/85">
                <span className={`grid size-8 shrink-0 place-items-center rounded-full font-[Poppins] font-semibold ${nz ? "bg-gold text-char" : "bg-lagoon text-teal-deep"}`}>{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <Link href={path(lang, nz ? "nuzul" : "")} className="btn btn-ghost mt-8">{t.back}</Link>
      </div>
    </main>
  );
}
