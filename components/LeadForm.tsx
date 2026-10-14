"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import { dict, units } from "@/lib/content";
import { SITE, path, type Lang } from "@/lib/site";
import { trackConversion } from "@/lib/track";
import { useUI } from "./UIProvider";

export default function LeadForm({
  lang,
  source,
  dark = false,
}: {
  lang: Lang;
  source: string;
  dark?: boolean;
}) {
  const { openPrivacy } = useUI();
  const t = dict(lang).form;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/[^\d+]/g, "");
    if (name.length < 2) return setErr(t.errName);
    if (!/^(\+?20)?0?1[0125]\d{8}$/.test(phone) && !/^\+?\d{9,15}$/.test(phone)) return setErr(t.errPhone);
    setErr("");
    setBusy(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `Hava Residence Lead (${lang.toUpperCase()}) – ${source}`,
          from_name: "Hava Residence Landing",
          name,
          phone,
          unit: fd.get("unit"),
          language: lang,
          source,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      trackConversion("form");
      router.push(path(lang, "thank-you"));
    } catch {
      setErr(t.errSend);
      setBusy(false);
    }
  }

  const label = dark ? "text-white/80" : "text-ink/70";
  return (
    <form onSubmit={submit} className="space-y-3" noValidate>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label className="block">
        <span className={`mb-1 block text-xs ${label}`}>{t.name}</span>
        <input name="name" required autoComplete="name" className="field" placeholder={t.name} />
      </label>
      <label className="block">
        <span className={`mb-1 block text-xs ${label}`}>{t.phone}</span>
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          dir="ltr"
          className="field text-start"
          placeholder="01xxxxxxxxx"
        />
      </label>
      <label className="block">
        <span className={`mb-1 block text-xs ${label}`}>{t.unit}</span>
        <select name="unit" className="field" defaultValue="">
          <option value="">{t.unitAny}</option>
          {units.map((u) => (
            <option key={u.key} value={u.en}>
              {lang === "ar" ? u.ar : u.en}
            </option>
          ))}
        </select>
      </label>
      {err && <p className="text-sm font-medium text-red-500" role="alert">{err}</p>}
      <button type="submit" disabled={busy} className="btn btn-plum w-full py-3.5 text-base disabled:opacity-60">
        <Send className="size-4 rtl:-scale-x-100" aria-hidden />
        {busy ? t.sending : t.submit}
      </button>
      <p className={`text-center text-[11px] ${dark ? "text-white/60" : "text-ink/50"}`}>
        {t.consent}{" "}
        <button type="button" onClick={openPrivacy} className="underline underline-offset-2">
          {t.privacy}
        </button>
      </p>
    </form>
  );
}
