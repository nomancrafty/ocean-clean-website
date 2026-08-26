import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { business } from "@/lib/site";

export function CTASection({
  eyebrow,
  title,
  body,
  primaryLabel = "Get My Free Estimate",
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-10 sm:py-16 lg:py-20">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[24px] bg-linear-to-br from-charcoal-800 to-charcoal-900 text-white text-center px-6 py-10 sm:px-10 sm:py-16">
          <div className="absolute -top-[170px] -right-[130px] h-[460px] w-[460px] rounded-full bg-amber-500/30 blur-2xl" />
          <div className="absolute left-0 bottom-0 w-[30%] h-full bg-amber-500 opacity-10 diag-left" />
          <div className="relative z-10 mx-auto max-w-[760px]">
            <span className="eyebrow justify-center text-gold-400">{eyebrow}</span>
            <h2 className="text-white mt-3.5 mb-4 text-[clamp(1.9rem,4vw,2.9rem)]">{title}</h2>
            <p className="text-[#c4cdd6] text-[1.1rem] mb-7.5">{body}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">{primaryLabel}</Button>
              <Button href={`tel:${business.phoneTel}`} variant="ghost" size="lg">
                Call {business.phoneDisplay}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
