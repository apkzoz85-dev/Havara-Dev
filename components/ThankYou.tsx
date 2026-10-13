import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { dict } from "@/lib/content";
import { path, type Lang } from "@/lib/site";
import { WaButton } from "./Actions";

export default function ThankYou({ lang }: { lang: Lang }) {
  const d = dict(lang);
  return (
    <main className="relative isolate grid min-h-[100svh] place-items-center overflow-hidden bg-teal-deep px-4 py-16 text-center text-white">
      <img src="/images/hava-lagoon-aerial.webp" alt="" aria-hidden className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
      <div className="max-w-lg">
        <img src="/brand/hava-logo-white.png" alt="Hava Residence" width={325} height={71} className="mx-auto mb-8 h-12 w-auto" />
        <CheckCircle2 className="mx-auto size-16 text-lagoon" strokeWidth={1.5} />
        <h1 className="mt-6 text-3xl font-bold">{d.thanks.title}</h1>
        <p className="mt-4 leading-8 text-white/80">{d.thanks.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <WaButton lang={lang} label={d.ui.whatsapp} />
          <Link href={path(lang)} className="btn btn-ghost">{d.thanks.back}</Link>
        </div>
      </div>
    </main>
  );
}
