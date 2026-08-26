import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { AreaCard } from "@/components/AreaCard";
import { CTASection } from "@/components/CTASection";
import { areas } from "@/lib/areas";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `Service Areas | Concrete & Paver Sealing in ${business.regionShort}`,
  description: `${business.name} proudly serves ${business.regionFull} with professional concrete, paver and exposed aggregate sealing.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        crumb="Service Areas"
        title={`Proudly Serving ${business.regionShort}`}
        body={`From historic Franklin to the fast-growing Nolensville corridor, ${business.name} is the local team Williamson County homeowners trust to keep their concrete and pavers sealed and protected.`}
        image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="Where We Work"
            title="Five Communities, One Standard of Excellence"
            body="Local knowledge matters. We understand the specific soil, water and weather conditions that challenge concrete and pavers in each of our service areas."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <AreaCard key={area.slug} area={area} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <Reveal className="rounded-[22px] border border-line bg-white p-8 sm:p-12 text-center max-w-[760px] mx-auto">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] mb-3">Don&apos;t See Your Neighborhood?</h2>
            <p className="text-ink-500">
              We regularly work just outside our core service areas throughout Williamson County and the greater
              Nashville area. Give us a call at{" "}
              <a href={`tel:${business.phoneTel}`} className="text-amber-600 font-semibold">
                {business.phoneDisplay}
              </a>{" "}
              — if you&apos;re nearby, we&apos;ve got you covered.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Serving Your Neighborhood"
        title="Local, Trusted & Ready to Help"
        body="Wherever you are in Williamson County, your free sealing estimate is just one call away."
      />
    </>
  );
}
