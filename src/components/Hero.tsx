import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { Icon } from "./icons";
import { business } from "@/lib/site";

const assurances = [
  `${business.yearsExperience} Years Experience`,
  "Free Written Estimates",
  `${business.warrantyYears} Sealing Warranty`,
];

export function Hero() {
  return (
    <section className="relative bg-charcoal-900 text-[#d2dae2] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal-900 via-charcoal-900/70 to-charcoal-900/40" />
      <div className="absolute top-0 right-0 w-[38%] h-full bg-amber-500 opacity-10 diag-right" />
      <Container className="relative z-10">
        <Reveal className="py-16 sm:py-24 lg:py-[9.5rem] max-w-[770px]">
          <span className="inline-flex items-center gap-3 bg-white/8 border border-white/15 rounded-full pl-3 pr-4 py-2 mb-6 text-[0.86rem]">
            <span className="text-gold-400 tracking-[2px]">★★★★★</span>
            Rated {business.rating}/5 by Williamson County homeowners
          </span>
          <h1 className="text-white text-[clamp(2.4rem,5.6vw,4.1rem)] leading-[1.04] mb-5.5">
            Concrete &amp; Paver Sealing Experts in <em className="not-italic text-amber-400">Brentwood &amp; Franklin</em>
          </h1>
          <p className="text-[clamp(1.05rem,2vw,1.26rem)] text-[#c4cdd6] max-w-[630px] mb-8">
            Faded, stained and weathered concrete doesn&apos;t have to stay that way. We clean, repair and seal
            driveways, patios and pavers with professional-grade sealers — backed by a written{" "}
            <strong className="text-white">{business.warrantyYears.toLowerCase()} warranty</strong> on every job.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Button href="/contact" size="lg" showArrow>
              Get My Free Estimate
            </Button>
            <Button href={`tel:${business.phoneTel}`} variant="ghost" size="lg">
              <Icon name="phone" className="h-[18px] w-[18px]" />
              Call {business.phoneDisplay}
            </Button>
          </div>
          <ul className="flex flex-wrap gap-5.5 mt-9.5 pt-7.5 border-t border-white/12">
            {assurances.map((item) => (
              <li key={item} className="inline-flex items-center gap-2.5 text-[0.92rem] text-[#d2dae2]">
                <Icon name="check" className="h-5 w-5 text-amber-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
      <div className="hidden lg:block absolute right-[clamp(20px,5vw,56px)] bottom-[clamp(40px,8vw,86px)] z-3 w-[290px] rounded-[14px] bg-white p-5.5 shadow-lg text-ink-700">
        <span className="inline-flex items-center gap-2 bg-amber-500/12 text-amber-700 font-head font-bold text-[0.78rem] px-3 py-1.5 rounded-full mb-3">
          <Icon name="shieldCheck" className="h-4 w-4" />
          {business.warrantyYears} Warranty
        </span>
        <h4 className="text-[1.05rem] mb-1 text-charcoal-900">Sealed Right, Backed in Writing</h4>
        <p className="text-[0.85rem] text-ink-500 mb-3.5">Every job includes a written warranty and a free surface inspection.</p>
        <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
          <div className="h-full w-[96%] rounded-full bg-linear-to-r from-amber-500 to-amber-700" />
        </div>
        <small className="block mt-2 text-[0.74rem] text-ink-500">96% of clients come from referrals &amp; repeat work</small>
      </div>
    </section>
  );
}
