"use client";
import { PhoneCall } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { useUI } from "./UIProvider";
import { telLink, waLink, type Lang, type Project } from "@/lib/site";
import { trackConversion } from "@/lib/track";

export function LeadButton({ children, className = "btn btn-plum" }: { children: React.ReactNode; className?: string }) {
  const { openLead } = useUI();
  return <button type="button" onClick={openLead} className={className}>{children}</button>;
}

export function WaButton({ lang, label, className = "btn btn-wa", project = "hava" }: { lang: Lang; label: string; className?: string; project?: Project }) {
  return (
    <a href={waLink(lang, project)} target="_blank" rel="noopener" onClick={() => trackConversion("whatsapp")} className={className}>
      <WhatsAppIcon className="size-4" /> {label}
    </a>
  );
}

export function CallButton({ label, className = "btn btn-ghost" }: { label: string; className?: string }) {
  return (
    <a href={telLink} onClick={() => trackConversion("call")} className={className}>
      <PhoneCall className="size-4" /> {label}
    </a>
  );
}

export function PrivacyLink({ label, className = "" }: { label: string; className?: string }) {
  const { openPrivacy } = useUI();
  return <button type="button" onClick={openPrivacy} className={className}>{label}</button>;
}
