import { Container } from "./Container";
import { Icon } from "./icons";
import type { IconKey } from "./icons";
import { business } from "@/lib/site";

const items: { icon: IconKey; num: string; label: string }[] = [
  { icon: "shieldCheck", num: `${business.warrantyYears}`, label: "Warranty on every job" },
  { icon: "clock", num: `${business.yearsExperience} Years`, label: "Sealing experience" },
  { icon: "home", num: business.jobsCompleted, label: "Driveways & patios sealed" },
  { icon: "star", num: `${business.rating} ★`, label: "Average customer rating" },
];

export function TrustStrip() {
  return (
    <section className="relative z-3 bg-amber-500 text-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4.5 py-7.5">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-3.5 ${i > 0 ? "lg:border-l lg:border-white/20 lg:pl-4.5" : ""}`}
            >
              <div className="grid h-11.5 w-11.5 place-items-center rounded-[11px] bg-white/15 shrink-0">
                <Icon name={item.icon} className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-head font-extrabold text-[1.35rem] leading-none text-white">{item.num}</div>
                <div className="text-[0.82rem] text-white/85 mt-1">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
