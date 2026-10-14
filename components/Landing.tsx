import Link from "next/link";
import { ChevronDown, MapPin, Check, Wallet, CalendarClock, Percent, ArrowUpRight } from "lucide-react";
import { nuzulDict } from "@/lib/nuzul";
import { dict, units, fmt } from "@/lib/content";
import { SITE, path, type Lang } from "@/lib/site";
import Icon from "./Icon";
import LeadForm from "./LeadForm";
import { LeadButton, WaButton, CallButton } from "./Actions";

function Head({ kicker, title, sub, light = false, center = false }: {
  kicker: string; title: string; sub?: string; light?: boolean; center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="kicker">{kicker}</span>
      <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-teal-deep"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-base leading-8 ${light ? "text-white/75" : "text-ink/70"}`}>{sub}</p>}
    </div>
  );
}

export default function Landing({ lang }: { lang: Lang }) {
  const d = dict(lang);
  const nz = nuzulDict(lang);
  const ar = lang === "ar";
  const url = SITE.url + path(lang);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ApartmentComplex",
      name: ar ? "هافا ريزيدنس – Hava Residence" : "Hava Residence",
      description: d.meta.description,
      url,
      image: `${SITE.url}/images/og-hava-residence.jpg`,
      address: {
        "@type": "PostalAddress",
        addressLocality: ar ? "R8، العاصمة الإدارية الجديدة" : "R8, New Administrative Capital",
        addressRegion: "Cairo",
        addressCountry: "EG",
      },
      amenityFeature: d.amenities.items.map((a) => ({ "@type": "LocationFeatureSpecification", name: a.t, value: true })),
      containsPlace: units.map((u) => ({
        "@type": "Accommodation",
        name: ar ? u.ar : u.en,
        ...(u.total ? { offers: { "@type": "Offer", price: u.total, priceCurrency: "EGP", availability: "https://schema.org/PreOrder" } } : {}),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: SITE.agencyName,
      telephone: SITE.phoneIntl,
      areaServed: "EG",
      url: SITE.url,
    },
  ];

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============ HERO ============ */}
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-teal-deep pt-[72px]">
        <img src="/images/hava-hero.webp" alt={d.meta.ogAlt} fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover" width={1778} height={840} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-teal-deep via-teal-deep/60 to-teal-deep/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent via-transparent to-teal-deep/50 rtl:bg-gradient-to-r" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:min-h-[calc(100svh-72px-120px)] lg:grid-cols-[1.25fr_.9fr] lg:py-16">
          <div className="text-white">
            <p className="rise mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs backdrop-blur">
              <MapPin className="size-3.5 text-lagoon" /> {d.hero.eyebrow}
            </p>
            <h1 className="rise rise-2 text-4xl font-bold leading-[1.2] sm:text-5xl lg:text-6xl">
              <span className="block">{d.hero.h1a}</span>
              <span className="mt-2 block text-lagoon">{d.hero.h1b}</span>
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-base leading-8 text-white/85 sm:text-lg">{d.hero.sub}</p>
            <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
              <LeadButton className="btn btn-lagoon px-7 py-3.5 text-base">{d.ui.register}</LeadButton>
              <WaButton lang={lang} label={d.ui.whatsapp} className="btn btn-wa px-7 py-3.5 text-base" />
            </div>
          </div>

          <div id="register" className="rise rise-3 rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl shadow-black/30 sm:p-7">
            <p className="text-xl font-bold text-teal-deep">{d.form.title}</p>
            <p className="mb-5 mt-1 text-sm text-ink/60">{d.form.sub}</p>
            <LeadForm lang={lang} source="hero" />
          </div>
        </div>

        <div className="border-t border-white/10 bg-teal-deep/80 backdrop-blur">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4">
            {d.hero.stats.map((s, i) => (
              <div key={i} className="border-white/10 px-2 py-5 text-center text-white odd:border-e md:border-e md:last:border-e-0">
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-[Poppins] text-2xl font-semibold text-lagoon sm:text-3xl">{s.v}<span className="ms-1 text-sm font-normal text-white/70">{s.u}</span></dd>
                <dd className="mt-1 text-xs text-white/70">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section id="about" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] bg-[#4a9b9b]">
              <img src="/images/hava-breathe-flower.webp" alt={d.about.imgAlt} width={620} height={490} loading="lazy" className="aspect-[5/4] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 start-6 rounded-2xl bg-plum px-6 py-4 text-lagoon-soft shadow-xl">
              <p className="font-[Poppins] text-lg font-medium italic">{ar ? "Breathe life differently." : "Hava · هواء"}</p>
              <p className="text-sm text-white/80">{d.about.tagline}</p>
            </div>
          </div>
          <div>
            <Head kicker={d.about.kicker} title={d.about.title} />
            <p className="-mt-4 text-lg leading-9 text-ink/80">{d.about.body}</p>
            <div className="mt-8 rounded-2xl border border-teal/10 bg-white p-6">
              <h3 className="text-lg font-bold text-teal">{d.about.exp.title}</h3>
              <p className="mt-2 leading-8 text-ink/70">{d.about.exp.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HIGHLIGHTS ============ */}
      <section className="relative overflow-hidden bg-teal-deep py-20 text-white sm:py-28">
        <div className="wave-line pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={d.highlights.kicker} title={d.highlights.title} light />
          <div className="grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {d.highlights.items.map((h) => (
              <div key={h.t} className="bg-teal-deep p-7 transition hover:bg-teal">
                <Icon name={h.icon} className="size-9 text-lagoon" />
                <h3 className="mt-5 text-lg font-semibold">{h.t}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICES ============ */}
      <section id="prices" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={d.prices.kicker} title={d.prices.title} sub={d.prices.sub} center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {units.map((u, i) => (
              !u.total ? (
              <article key={u.key} className="relative flex flex-col rounded-3xl bg-plum p-7 text-white shadow-sm ring-1 ring-plum">
                <h3 className="text-xl font-bold">{ar ? u.ar : u.en}</h3>
                <p className="mt-4 text-xs text-white/60">{d.ui.total}</p>
                <p className="text-2xl font-bold leading-[2.25rem] text-lagoon-soft">{d.ui.onRequest}</p>
                <p className="mt-6 border-t border-white/15 pt-6 text-sm leading-7 text-white/80">{d.ui.onRequestSub}</p>
                <div className="mt-auto pt-7">
                  <LeadButton className="btn btn-lagoon w-full">{d.ui.askPrice}</LeadButton>
                </div>
              </article>
              ) : (
              <article key={u.key} className={`relative flex flex-col rounded-3xl p-7 shadow-sm ring-1 ${i === 1 ? "bg-teal-deep text-white ring-teal-deep" : "bg-white ring-teal/10"}`}>
                <h3 className={`text-xl font-bold ${i === 1 ? "text-white" : "text-teal-deep"}`}>{ar ? u.ar : u.en}</h3>
                <p className={`mt-4 text-xs ${i === 1 ? "text-white/60" : "text-ink/50"}`}>{d.ui.total}</p>
                <p className={`font-[Poppins] text-3xl font-bold ${i === 1 ? "text-lagoon" : "text-plum"}`} dir="ltr">
                  {fmt(u.total!)} <span className="text-base font-medium">{d.ui.egp}</span>
                </p>
                <ul className={`mt-6 space-y-3 border-t pt-6 text-sm ${i === 1 ? "border-white/15" : "border-teal/10"}`}>
                  <li className="flex items-center justify-between gap-3"><span className="flex items-center gap-2"><Percent className="size-4 text-lagoon" />{d.ui.down}</span><b dir="ltr">{fmt(u.down!)} {d.ui.egp}</b></li>
                  {u.monthly ? (
                    <li className="flex items-center justify-between gap-3"><span className="flex items-center gap-2"><Wallet className="size-4 text-lagoon" />{d.ui.monthly}</span><b dir="ltr">{fmt(u.monthly)} {d.ui.egp}</b></li>
                  ) : null}
                  {u.years ? (
                    <li className="flex items-center gap-2"><CalendarClock className="size-4 text-lagoon" />{d.ui.years(u.years)}</li>
                  ) : (
                    <li className="flex items-center gap-2"><CalendarClock className="size-4 text-lagoon" />{d.ui.planOnRequest}</li>
                  )}
                </ul>
                <div className="mt-auto pt-7">
                  <LeadButton className={`btn w-full ${i === 1 ? "btn-lagoon" : "btn-plum"}`}>{d.ui.askPrice}</LeadButton>
                </div>
              </article>
              )
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-ink/50">* {d.prices.note}</p>

          {/* Payment */}
          <div className="mt-14 grid items-center gap-8 rounded-3xl bg-plum p-8 text-white sm:p-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="kicker !text-lagoon-soft">{d.payment.kicker}</span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{d.payment.title}</h2>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {d.payment.items.map((p) => (
                <div key={p.l} className="rounded-2xl bg-white/10 p-4 text-center">
                  <p className="font-[Poppins] text-3xl font-bold text-lagoon-soft sm:text-4xl">{p.v}</p>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">{p.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MASTER PLAN ============ */}
      <section id="masterplan" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            <Head kicker={d.masterplan.kicker} title={d.masterplan.title} sub={d.masterplan.body} />
            <div className="mb-10 space-y-4">
              {d.masterplan.bars.map((b, i) => (
                <div key={b.l}>
                  <div className="mb-1 flex justify-between text-sm"><span>{b.l}</span><b className="font-[Poppins]">{b.v}%</b></div>
                  <div className="h-3 overflow-hidden rounded-full bg-mist">
                    <div className={`h-full rounded-full ${i === 0 ? "bg-lagoon" : "bg-plum"}`} style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <img src="/images/hava-lagoon-aerial-2.webp" alt={d.masterplan.alt1} width={665} height={730} loading="lazy" className="h-full max-h-[460px] w-full rounded-3xl object-cover" />
            <div className="flex flex-col gap-4">
              <img src="/images/hava-buildings-lagoon.webp" alt={d.gallery.images[0].alt} width={1000} height={850} loading="lazy" className="h-56 w-full rounded-3xl object-cover lg:h-auto lg:flex-1" />
              <div className="rounded-3xl bg-mist p-6">
                <h3 className="text-lg font-bold text-teal-deep">{d.masterplan.landscape.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/75">{d.masterplan.landscape.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ AMENITIES ============ */}
      <section id="amenities" className="bg-mist py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Head kicker={d.amenities.kicker} title={d.amenities.title} sub={d.amenities.sub} />
            <img src="/images/hava-infinity-pool.webp" alt={d.gallery.images[1].alt} width={678} height={813} loading="lazy" className="hidden aspect-[4/4.2] w-full rounded-3xl object-cover lg:block" />
          </div>
          <ul className="grid content-center gap-4 sm:grid-cols-2">
            {d.amenities.items.map((a) => (
              <li key={a.t} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-teal-deep text-lagoon"><Icon name={a.icon} className="size-6" /></span>
                <span className="font-medium text-teal-deep">{a.t}</span>
              </li>
            ))}
            <li className="sm:col-span-2">
              <div className="flex flex-wrap gap-3 pt-2">
                <LeadButton className="btn btn-plum px-7">{d.ui.register}</LeadButton>
                <WaButton lang={lang} label={d.ui.whatsapp} />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Head kicker={d.gallery.kicker} title={d.gallery.title} />
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
            {d.gallery.images.map((g, i) => (
              <figure key={g.src} className={`overflow-hidden rounded-2xl ${["md:col-span-2 md:row-span-2", "md:row-span-2", "", "", "col-span-2", "col-span-2"][i]}`}>
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VISION ============ */}
      <section className="relative overflow-hidden bg-plum-deep text-white">
        <img src="/images/hava-sunset-lagoon.webp" alt={d.gallery.images[5].alt} loading="lazy" className="h-48 w-full object-cover sm:h-72" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <Head kicker={d.vision.kicker} title={d.vision.title} sub={d.vision.body} light />
          <div className="grid gap-5 md:grid-cols-3">
            {d.vision.cards.map((c, i) => (
              <div key={c.t} className="rounded-3xl border border-white/10 bg-white/5 p-7">
                <span className="font-[Poppins] text-sm text-lagoon">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-lagoon-soft">{c.t}</h3>
                <p className="mt-3 leading-8 text-white/75">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section id="location" className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <Head kicker={d.location.kicker} title={d.location.title} sub={d.location.body} />
            <ul className="grid gap-3 sm:grid-cols-2">
              {d.location.points.map((p) => (
                <li key={p} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-teal-deep ring-1 ring-teal/10">
                  <Check className="size-4 text-lagoon" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl ring-1 ring-teal/10">
            <iframe
              title={d.location.mapTitle}
              src="https://maps.google.com/maps?q=R8%2C%20New%20Administrative%20Capital%2C%20Egypt&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0 grayscale-[30%]"
            />
          </div>
        </div>
      </section>

      {/* ============ DEVELOPER ============ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <img src="/brand/qurtuba-logo-plum.png" alt="Qurtuba Developments – قرطبة للتطوير العقاري" width={283} height={74} loading="lazy" className="mb-6 h-10 w-auto" />
            <Head kicker={d.developer.kicker} title={d.developer.title} sub={d.developer.body} />
            <div className="-mt-4 flex flex-wrap gap-2">
              {d.developer.cities.map((c) => <span key={c} className="rounded-full bg-mist px-4 py-1.5 text-sm text-teal-deep">{c}</span>)}
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {d.developer.stats.map((s) => (
              <div key={s.l} className="rounded-3xl bg-sand p-6 text-center ring-1 ring-teal/5">
                <dd className="font-[Poppins] text-4xl font-bold text-plum" dir="ltr">{s.v}</dd>
                <dt className="mt-2 text-sm text-ink/70">{s.l}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============ NUZUL TEASER ============ */}
      <section className="pb-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Link href={path(lang, "nuzul")} className="group grid overflow-hidden rounded-3xl bg-char text-white md:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <span className="kicker !text-gold">{nz.teaser.kicker}</span>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{nz.teaser.title}</h2>
              <p className="mt-3 leading-8 text-white/70">{nz.teaser.body}</p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-char transition group-hover:brightness-105">
                {nz.teaser.cta} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </span>
            </div>
            <img src="/images/nuzul-tower-dusk.webp" alt={nz.meta.ogAlt} width={1600} height={1085} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 md:h-full" />
          </Link>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Head kicker={d.faq.kicker} title={d.faq.title} center />
          <div className="space-y-3">
            {d.faq.items.map((f, i) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 ring-1 ring-teal/10 open:ring-lagoon/40" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-teal-deep">
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
      <section className="relative isolate overflow-hidden bg-teal-deep py-20 sm:py-28">
        <img src="/images/hava-lagoon-aerial-2.webp" alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div className="text-white">
            <img src="/brand/hava-logo-white.png" alt="Hava Residence" width={325} height={71} loading="lazy" className="mb-6 h-12 w-auto" />
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{d.cta.title}</h2>
            <p className="mt-4 text-lg text-lagoon">{d.cta.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WaButton lang={lang} label={d.ui.whatsapp} className="btn btn-wa px-7 py-3.5" />
              <CallButton label={d.ui.call} className="btn btn-ghost px-7 py-3.5" />
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <p className="mb-5 text-xl font-bold text-teal-deep">{d.form.title}</p>
            <LeadForm lang={lang} source="footer-cta" />
          </div>
        </div>
      </section>
    </main>
  );
}
