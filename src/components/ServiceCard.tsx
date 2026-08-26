import Link from "next/link";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, delay }: { service: Service; delay?: 1 | 2 | 3 }) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative isolate flex min-h-[320px] items-end overflow-hidden rounded-[14px] shadow-sm"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-charcoal-900 via-charcoal-900/55 to-charcoal-900/15" />
        <div className="w-full p-6">
          <div className="grid h-11 w-11 place-items-center rounded-[10px] bg-amber-500 mb-3.5">
            <Icon name={service.icon} className="h-[22px] w-[22px] text-white" />
          </div>
          <h3 className="text-white text-[1.22rem] mb-1.5">{service.name}</h3>
          <p className="text-[#cdd5dd] text-[0.9rem] mb-3.5 max-h-0 opacity-0 overflow-hidden transition-all duration-300 group-hover:max-h-32 group-hover:opacity-100">
            {service.cardCopy}
          </p>
          <span className="inline-flex items-center gap-2 font-head font-bold text-[0.9rem] text-amber-400">
            Learn more
            <Icon name="arrowRight" className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
