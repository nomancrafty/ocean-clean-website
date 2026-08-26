import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ item, delay }: { item: Testimonial; delay?: 1 | 2 | 3 }) {
  return (
    <Reveal
      delay={delay}
      className="flex flex-col gap-4 rounded-[14px] border border-line bg-white p-7.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
    >
      <div className="font-serif text-[3.4rem] leading-[0.6] h-6.5 text-amber-500/15" style={{ fontFamily: "Georgia, serif" }}>
        &rdquo;
      </div>
      <div className="flex gap-1 text-gold-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="h-4 w-4" />
        ))}
      </div>
      <p className="flex-1 text-ink-700 text-[1.02rem]">{item.quote}</p>
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-amber-500 to-amber-700 text-white font-head font-extrabold shrink-0">
          {item.initials}
        </div>
        <div>
          <strong className="block text-charcoal-900 font-head text-[0.98rem]">{item.name}</strong>
          <span className="text-[0.84rem] text-ink-500">{item.city}</span>
        </div>
      </div>
    </Reveal>
  );
}
