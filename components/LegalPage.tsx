import Link from "next/link";
import { path, type Lang } from "@/lib/site";
import Header from "./Header";
import Footer from "./Footer";

export default function LegalPage({ lang, slug, title, paras }: { lang: Lang; slug: string; title: string; paras: string[] }) {
  const other: Lang = lang === "ar" ? "en" : "ar";
  return (
    <>
      <Header lang={lang} altHref={path(other, slug)} home={false} />
      <main className="mx-auto min-h-[70vh] max-w-3xl px-4 pb-20 pt-32 sm:px-6">
        <h1 className="text-3xl font-bold text-teal-deep sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-5 text-base leading-8 text-ink/80">
          {paras.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <Link href={path(lang)} className="btn btn-plum mt-10">{lang === "ar" ? "العودة إلى هافا ريزيدنس" : "Back to Hava Residence"}</Link>
      </main>
      <Footer lang={lang} />
    </>
  );
}
