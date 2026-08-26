import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/services";
import { processSteps } from "@/lib/content";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `Concrete & Paver Sealing Services in ${business.regionShort}`,
  description: `Explore ${business.name}'s sealing services: concrete sealing, patio paver sealing, brushed/broomed concrete sealing and exposed aggregate sealing across ${business.regionFull}.`,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        title="Concrete, Paver & Aggregate Sealing Services"
        body="Four specialized sealing services, one accountable local team. Whatever surface needs protecting around your home, we have a proven, warrantied solution."
        image="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead
            eyebrow="What We Seal"
            title="Choose Your Surface"
            body="Every sealer we use is matched to the surface, traffic and finish in front of us — not a one-size-fits-all coating."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <SectionHead
            eyebrow="How We Work"
            title="Your Sealing Project, Start to Finish"
            body="Every Supreme Sealers project follows the same transparent process — no guesswork, no surprises."
            onDark
          />
          <ProcessSteps steps={processSteps} onDark />
        </Container>
      </section>

      <CTASection
        eyebrow="Not Sure Which Service You Need?"
        title="We'll Tell You, Honestly."
        body="Book a free inspection and we'll diagnose exactly what your driveway, patio or pavers need — then recommend only that, backed by our written warranty."
      />
    </>
  );
}
