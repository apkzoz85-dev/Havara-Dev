import type { Project } from "@/lib/site";

export function NuzulMark({ className = "", sub = true }: { className?: string; sub?: boolean }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none text-white ${className}`} dir="ltr" aria-label="NUZUL Tower">
      <span className="font-[Cinzel,serif] text-[1.55em] font-medium tracking-[0.32em] ps-[0.32em]">NUZUL</span>
      {sub && <span className="mt-1 font-[Poppins] text-[0.42em] tracking-[0.6em] ps-[0.6em] text-gold">TOWER</span>}
    </span>
  );
}

export function ProjectLogo({ project, className = "h-8 w-auto sm:h-9" }: { project: Project; className?: string }) {
  if (project === "nuzul") return <NuzulMark className="text-[15px] sm:text-[17px]" />;
  return <img src="/brand/hava-logo-white.png" alt="Hava Residence – هافا ريزيدنس" width={325} height={71} className={className} />;
}
