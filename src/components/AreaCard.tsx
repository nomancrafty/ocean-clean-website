import Link from "next/link";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import type { Area } from "@/lib/areas";

export function AreaCard({ area, delay }: { area: Area; delay?: 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay} className="group relative isolate min-h-[400px] flex items-end overflow-hidden rounded-[22px] shadow-md">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url('${area.heroImage}')` }}
      />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal-900 via-charcoal-900/60 to-charcoal-900/20" />
      <div className="relative z-10 w-full p-8 pointer-events-none">
        <span className="inline-flex items-center gap-2 text-amber-400 text-[0.82rem] font-bold uppercase tracking-wide font-head mb-3.5">
          <Icon name="mapPin" className="h-4 w-4" /> {area.region}
        </span>
        <h3 className="text-white text-[1.85rem] mb-1.5">{area.city}</h3>
        <p className="text-[#cdd5dd] text-[0.96rem] mb-4.5 max-w-md">{area.blurb}</p>
        <div className="flex gap-2 flex-wrap mb-5.5">
          {area.highlights.slice(0, 3).map((h) => (
            <span key={h} className="text-[0.78rem] bg-white/10 border border-white/15 px-3 py-1.5 rounded-full text-white/90">
              {h}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2.5 font-head font-bold text-[0.98rem] bg-white text-charcoal-900 rounded-[10px] px-[28px] py-[15px] shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5">
          {area.city} Sealing Services
        </span>
      </div>
      <Link
        href={`/service-areas/${area.slug}`}
        className="absolute inset-0"
        aria-label={`${area.city} service area`}
      />
    </Reveal>
  );
}
