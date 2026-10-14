import Link from "next/link";
import { ChevronDown, MapPin, Check, ArrowUpRight } from "lucide-react";
import { dict, fmt } from "@/lib/content";
import { nuzulDict, nuzulUnits } from "@/lib/nuzul";
import { SITE, path, type Lang } from "@/lib/site";
import Icon from "./Icon";
import LeadForm from "./LeadForm";
import { NuzulMark } from "./Brand";
import { LeadButton, WaButton, CallButton } from "./Actions";

function Head({ kicker, title, sub, light = false, center = false }: {
  kicker: string; title: string; sub?: string; light?: boolean; center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="kicker !text-gold">{kicker}</span>
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-char"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base leading-8 ${light ? "text-white/70" : "text-ink/70"}`}>{sub}</p>}
    </div>
  );
}

export default function NuzulLanding({ lang }: { lang: Lang }) {
  const n = nuzulDict(lang);
  const d = dict(lang);
  const ar = lang === "ar";
  const url = SITE.url + path(lang, "nuzul");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Place",
      name: ar ? "نزل تاور – NUZUL Tower" : "NUZUL Tower",
      description: n.meta.description,
      url,
      image: `${SITE.url}/images/og-nuzul.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: ar ? "الداون تاون، العاصمة الإدارية الجديدة" : "Downtown, New Administrative Capital",
        addressRegion: "Cairo",
        addressCountry: "EG",
      },
      containsPlace: nuzulUnits.map((u) => ({
        "@type": "Accommodation",
        name: ar ? u.ar : u.en,
        floorSize: { "@type": "QuantitativeValue", value: u.area, unitCode: "MTK" },
        offers: { "@type": "Offer", price: u.from, priceCurrency: "EGP" },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: n.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <main className="bg-stone">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============ HERO ============ */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-char pt-[72px]">
        <img src="/images/nuzul-tower-dusk.webp" alt={n.meta.ogAlt} fetchPriority="high" width={1600} height={1085}
          className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-char via-char/65 to-char/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent to-char/60 rtl:bg-gradient-to-r" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(100svh-72px-120px)] lg:grid-cols-[1.25fr_.9fr] lg:py-16">
          <div className="text-white">
            <p className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs backdrop-blur">
              <MapPin className="size-3.5 text-gold" /> {n.hero.eyebrow}
            </p>
            <h1 className="rise rise-2 text-4xl font-bold leading-[1.2] sm:text-5xl lg:text-6xl">
              <span className="block">{n.hero.h1a}</span>
              <span className="mt-3 block text-2xl text-gold sm:text-3xl lg:text-4xl">{n.hero.h1b}</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">{n.hero.sub}</p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <LeadButton className="btn btn-gold px-7 py-3.5 text-base">{d.ui.register}</LeadButton>
              <WaButton lang={lang} project="nuzul" label={d.ui.whatsapp} className="btn btn-wa px-7 py-3.5 text-base" />
            </div>
          </div>

          <div className="rise rise-3 rounded-3xl border border-white/10 bg-white/95 p-6 shadow-2xl shadow-black/40 sm:p-7">
            <p className="text-xl font-bold text-char">{d.form.title}</p>
            <p className="mb-5 mt-1 text-sm text-ink/60">{d.form.sub}</p>
            <LeadForm lang={lang} source="nuzul-hero" project="nuzul" />
          </div>
        </div>

        <div className="border-t border-white/10 bg-char/85 backdrop-blur">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
            {n.hero.stats.map((s, i) => (
              <div key={i} className="border-white/10 px-2 py-5 text-center text-white odd:border-e md:border-e md:last:border-e-0">
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-[Poppins] text-2xl font-semibold text-gold sm:text-3xl" dir="ltr">{s.v}<span className="ms-1 text-sm font-normal text-white/70">{s.u}</span></dd>
                <dd className="mt-1 text-xs text-white/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ OVERVIEW ============ */}
      <section id="overview" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <img src="/images/nuzul-tower-front.webp" alt={n.gallery.images[0].alt} width={1000} height={1315} loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
            <div className="absolute -bottom-6 end-6 rounded-2xl bg-char px-6 py-4 shadow-xl">
              <NuzulMark className="text-[15px]" />
            </div>
          </div>
          <div>
            <Head kicker={n.overview.kicker} title={n.overview.title} />
            <p className="-mt-4 text-lg leading-9 text-ink/80">{n.overview.body}</p>
            <dl className="mt-8 divide-y divide-char/10 rounded-2xl bg-white ring-1 ring-char/5">
              {n.overview.facts.map((f) => (
                <div key={f.l} className="grid grid-cols-[8.5rem_1fr] gap-4 px-5 py-3.5 text-sm">
                  <dt className="text-ink/55">{f.l}</dt>
                  <dd className="font-medium text-char">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ============ PRICES ============ */}
      <section id="prices" className="bg-char py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={n.prices.kicker} title={n.prices.title} sub={n.prices.sub} light center />
          <div className="grid gap-6 md:grid-cols-3">
            {nuzulUnits.map((u, i) => (
              <article key={u.key} className={`flex flex-col rounded-3xl p-7 ring-1 ${i === 1 ? "bg-gold text-char ring-gold" : "bg-char-2 ring-white/10"}`}>
                <Icon name={u.key === "admin" ? "Building2" : u.key === "retail" ? "Store" : "BedDouble"} className={`size-9 ${i === 1 ? "text-char" : "text-gold"}`} />
                <h3 className="mt-5 text-xl font-bold">{ar ? u.ar : u.en}</h3>
                <p className={`mt-1 text-sm ${i === 1 ? "text-char/70" : "text-white/60"}`}>{n.prices.areaFrom} <b className="font-[Poppins]">{u.area} {ar ? "م²" : "m²"}</b></p>
                <p className={`mt-6 text-xs ${i === 1 ? "text-char/60" : "text-white/50"}`}>{n.prices.priceFrom}</p>
                <p className={`font-[Poppins] text-3xl font-bold ${i === 1 ? "text-char" : "text-gold"}`} dir="ltr">
                  {fmt(u.from)} <span className="text-base font-medium">{d.ui.egp}</span>
                </p>
                <ul className={`mt-6 space-y-2 border-t pt-5 text-sm ${i === 1 ? "border-char/15" : "border-white/10"}`}>
                  <li className="flex items-center gap-2"><Check className="size-4" />{n.prices.down}</li>
                  <li className="flex items-center gap-2"><Check className="size-4" />{n.prices.years}</li>
                </ul>
                <div className="mt-auto pt-7">
                  <LeadButton className={`btn w-full ${i === 1 ? "bg-char text-white hover:bg-char-2" : "btn-gold"}`}>{d.ui.askPrice}</LeadButton>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-white/45">* {n.prices.note}</p>
        </div>
      </section>

      {/* ============ FLOORS ============ */}
      <section id="floors" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Head kicker={n.floors.kicker} title={n.floors.title} sub={n.floors.sub} />
            <ol className="relative space-y-3">
              {[...n.floors.items].reverse().map((f) => (
                <li key={f.f} className="grid grid-cols-[7.5rem_1fr] items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-char/5 sm:grid-cols-[9rem_1fr]">
                  <span className="rounded-xl bg-char px-3 py-2 text-center text-xs font-semibold text-gold">{f.f}</span>
                  <span>
                    <span className="block font-semibold text-char">{f.t}</span>
                    <span className="block text-sm text-ink/60">{f.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <img src="/images/nuzul-retail-plaza.webp" alt={n.gallery.images[2].alt} width={1400} height={915} loading="lazy" className="h-full w-full rounded-3xl object-cover" />
            <img src="/images/nuzul-hotel-room.webp" alt={n.gallery.images[3].alt} width={1400} height={842} loading="lazy" className="h-full w-full rounded-3xl object-cover" />
          </div>
        </div>
      </section>

      {/* ============ INVEST ============ */}
      <section id="invest" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={n.invest.kicker} title={n.invest.title} />
          <div className="grid gap-5 md:grid-cols-3">
            {n.invest.cards.map((c) => (
              <div key={c.t} className="rounded-3xl bg-stone p-7 ring-1 ring-char/5">
                <span className="grid size-12 place-items-center rounded-xl bg-char text-gold"><Icon name={c.icon} className="size-6" /></span>
                <h3 className="mt-5 text-xl font-bold text-char">{c.t}</h3>
                <ul className="mt-4 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-7 text-ink/75">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <LeadButton className="btn btn-gold px-7">{d.ui.register}</LeadButton>
            <WaButton lang={lang} project="nuzul" label={d.ui.whatsapp} />
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={n.gallery.kicker} title={n.gallery.title} />
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
            {n.gallery.images.map((g, i) => (
              <figure key={g.src} className={`overflow-hidden rounded-2xl ${["row-span-2", "row-span-2", "col-span-2", "", ""][i]}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section id="location" className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Head kicker={n.location.kicker} title={n.location.title} sub={n.location.body} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {n.location.points.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-xl bg-stone px-4 py-3 text-sm font-medium text-char">
                  <Check className="size-4 shrink-0 text-gold" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-char/10">
            <iframe
              title={n.location.mapTitle}
              src="https://maps.google.com/maps?q=Downtown%20New%20Administrative%20Capital%2C%20Egypt&z=14&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 grayscale-[40%]"
            />
          </div>
        </div>
      </section>

      {/* ============ DEVELOPER ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <img src="/brand/qurtuba-logo-plum.png" alt="Qurtuba Developments – قرطبة للتطوير العقاري" width={283} height={74} loading="lazy" className="mb-6 h-10 w-auto" />
            <Head kicker={d.developer.kicker} title={d.developer.title} sub={d.developer.body} />
            <Link href={path(lang)} className="-mt-4 inline-flex items-center gap-2 rounded-full bg-char px-5 py-2.5 text-sm font-semibold text-white hover:bg-char-2">
              {ar ? "مشروع آخر من قرطبة:" : "Also by Qurtuba:"} {n.backToHava} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {d.developer.stats.map((s) => (
              <div key={s.l} className="rounded-3xl bg-white p-6 text-center ring-1 ring-char/5">
                <dd className="font-[Poppins] text-4xl font-bold text-char" dir="ltr">{s.v}</dd>
                <dt className="mt-2 text-sm text-ink/70">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Head kicker={n.faq.kicker} title={n.faq.title} center />
          <div className="space-y-3">
            {n.faq.items.map((f, i) => (
              <details key={f.q} className="group rounded-2xl bg-stone p-5 ring-1 ring-char/5 open:ring-gold/50" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-char">
                  <h3 className="text-base">{f.q}</h3>
                  <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 leading-8 text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative isolate overflow-hidden bg-char py-20 sm:py-28">
        <img src="/images/nuzul-lobby-2.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="text-white">
            <NuzulMark className="mb-8 text-[22px]" />
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{n.cta.title}</h2>
            <p className="mt-4 text-lg text-gold">{n.cta.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton lang={lang} project="nuzul" label={d.ui.whatsapp} className="btn btn-wa px-7 py-3.5" />
              <CallButton label={d.ui.call} className="btn btn-ghost px-7 py-3.5" />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <p className="mb-5 text-xl font-bold text-char">{d.form.title}</p>
            <LeadForm lang={lang} source="nuzul-footer-cta" project="nuzul" />
          </div>
        </div>
      </section>
    </main>
  );
}
