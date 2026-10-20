"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneCall } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
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

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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
    const projectLabel = lang === "ar" ? (project === "nuzul" ? "نزل تاور" : "هافا ريزيدنس") : projectName;
    const msg =
      lang === "ar"
        ? `مرحباً، أنا ${name}\nرقم الموبايل: ${phone}\nمهتم بمشروع ${projectLabel}${unitLabel ? `\nنوع الوحدة: ${unitLabel}` : ""}\nبرجاء إرسال الأسعار وخطط السداد.`
        : `Hello, I'm ${name}\nMobile: ${phone}\nInterested in ${projectLabel}${unitLabel ? `\nUnit type: ${unitLabel}` : ""}\nPlease send me prices and payment plans.`;
    const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

    try {
      sessionStorage.setItem("lead", JSON.stringify({ wa, project, name, phone, unit: unitLabel, source }));
      sessionStorage.setItem("lead_pending", "1");
    } catch {}

    // open WhatsApp directly (sync, inside the submit gesture so it isn't blocked)
    window.open(wa, "_blank", "noopener");
    router.push(`${path(lang, "thank-you")}?p=${project}`);
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
          {options.map((u) => (
            <option key={u.key} value={u.value}>
              {u.label}
            </option>
          ))}
        </select>
      </label>
      {err && <p className="text-sm font-medium text-red-500" role="alert">{err}</p>}
      <div className="grid grid-cols-2 gap-2">
        <button type="submit" disabled={busy} className="btn btn-wa w-full px-3 py-3.5 text-base disabled:opacity-60">
          <WhatsAppIcon className="size-5" />
          {t.viaWhatsapp}
        </button>
        <a href={telLink} onClick={() => trackConversion("call")} className={`btn ${project === "nuzul" ? "btn-gold" : "btn-plum"} w-full px-3 py-3.5 text-base`}>
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
