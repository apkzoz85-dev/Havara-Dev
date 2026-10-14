import {
  Waves, Trees, Eye, Footprints, Landmark, Car, Compass, MapPin,
  Droplets, Sparkles, Bike, Film, Sailboat, Baby, ShieldCheck, Mountain,
  Building2, Store, BedDouble,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Waves, Trees, Eye, Footprints, Landmark, Car, Compass, MapPin,
  Droplets, Sparkles, Bike, Film, Sailboat, Baby, ShieldCheck, Mountain,
  Building2, Store, BedDouble,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const I = map[name] ?? Sparkles;
  return <I className={className} strokeWidth={1.5} aria-hidden />;
}
