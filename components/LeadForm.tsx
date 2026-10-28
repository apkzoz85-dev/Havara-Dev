"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneCall, Send, Loader2 } from "lucide-react";
import { trackConversion } from "@/lib/track";
import { dict, units } from "@/lib/content";
import { SITE, path, telLink, type Lang, type Project } from "@/lib/site";
import { nuzulUnits } from "@/lib/nuzul";
import { useUI } from "./UIProvider";

export default function LeadForm({
  lang,
  source,
  dark = false,
  project = "hava",
}: {
  lang: Lang;
  source: string;
  dark?: boolean;
  project?: Project;
}) {
  const options = (project === "nuzul" ? nuzulUnits : units).map((u) => ({ key: u.key, value: u.en, label: lang === "ar" ? u.ar : u.en }));
  const projectName = project === "nuzul" ? "NUZUL Tower" : "Hava Residence";
  const { openPrivacy } = useUI();
  const t = dict(lang).form;
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy) return;
    const fd = new FormData(e.currentTarget);
    if (fd.get("botcheck")) return;
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").replace(/[^\d+]/g, "");
    if (name.length < 2) return setErr(t.errName);
    if (!/^(\+?20)?0?1[0125]\d{8}$/.test(phone) && !/^\+?\d{9,15}$/.test(phone)) return setErr(t.errPhone);
    setErr("");
    setBusy(true);

    const unitVal = String(fd.get("unit") || "");
    const unitLabel = options.find((o) => o.value === unitVal)?.label || "";

    // Send lead to email via Web3Forms
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: SITE.web3formsKey,
          subject: `New Lead – ${projectName} – ${name}`,
          from_name: `${projectName} Landing Page`,
          name,
          phone,
          project: projectName,
          unit: unitLabel || (lang === "ar" ? "غير محدد" : "Not specified"),
          language: lang === "ar" ? "Arabic" : "English",
          source,
          page: window.location.href,
          botcheck: "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) throw new Error(data.message || "send failed");
    } catch {
      setBusy(false);
      return setErr(t.errSend);
    }

    try {
      sessionStorage.setItem("lead", JSON.stringify({ project, name, phone, unit: unitLabel, source }));
      sessionStorage.setItem("lead_pending", "1");
    } catch {}

    router.push(`${path(lang, "thank-you")}?p=${project}`);
  }

  const label = dark ? "text-white/80" : "text-ink/70";
  const brandBtn = project === "nuzul" ? "btn-gold" : "btn-plum";
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
          {options.map((u) => (
            <option key={u.key} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </label>
      {err && <p className="text-sm font-medium text-red-500" role="alert">{err}</p>}
      <div className="grid grid-cols-2 gap-2">
        <button type="submit" disabled={busy} className={`btn ${brandBtn} w-full px-3 py-3.5 text-base disabled:opacity-60`}>
          {busy ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 rtl:-scale-x-100" />}
          {busy ? t.sending : t.submit}
        </button>
        <a
          href={telLink}
          onClick={() => trackConversion("call")}
          className={`btn w-full border px-3 py-3.5 text-base ${dark ? "border-white/40 text-white hover:bg-white/10" : "border-ink/20 text-ink hover:bg-ink/5"}`}
        >
          <PhoneCall className="size-5" />
          {t.viaCall}
        </a>
      </div>
      <p className={`text-center text-[11px] ${dark ? "text-white/60" : "text-ink/50"}`}>
        {t.consent}{" "}
        <button type="button" onClick={openPrivacy} className="underline underline-offset-2">
          {t.privacy}
        </button>
      </p>
    </form>
  );
}
