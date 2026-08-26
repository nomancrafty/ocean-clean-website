import { Container } from "@/components/Container";
import { SectionHead } from "@/components/SectionHead";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProudlyServing } from "@/components/ProudlyServing";
import { IconCard } from "@/components/IconCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ServiceCard } from "@/components/ServiceCard";
import { AreaCard } from "@/components/AreaCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { StatCounter } from "@/components/StatCounter";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { testimonials } from "@/lib/testimonials";
import { problems, whyChooseUs, benefits, processSteps, homeFaqs } from "@/lib/content";
import { business } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProudlyServing />

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="Signs You Need Sealing"
            title="Common Concrete & Paver Problems We Solve"
            body="Unsealed surfaces don't fail all at once — they show warning signs first. Here's what we see most often on Williamson County driveways and patios."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                tone={i % 2 === 0 ? "dark" : "amber"}
                delay={(i % 3) === 0 ? undefined : ((i % 3) as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Why Choose Us"
            title="Homeowners Trust Supreme Sealers to Do It Right"
            body="No scare tactics, no big-box sealers, no surprises — just an honest local crew that stands behind its work."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                tone="amber"
                delay={(i % 3) === 0 ? undefined : ((i % 3) as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="The Benefits of Sealing"
            title="Protect the Investment You Already Made"
            body="A quality seal coat pays for itself by delaying the cracking, staining and replacement costs that come with neglected concrete."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {benefits.map((item, i) => (
              <IconCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                body={item.body}
                delay={i === 0 ? undefined : (i as 1 | 2)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-charcoal-800 py-12">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter target={15} suffix="+" label="Years In Business" />
            <StatCounter target={1200} suffix="+" label="Driveways & Patios Sealed" />
            <StatCounter target={5} suffix="-yr" label="Warranty Coverage" />
            <StatCounter target={4.9} decimals={1} label="Average Star Rating" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead
            eyebrow="Our Services"
            title="Four Specialized Sealing Services"
            body="One trusted local team for every sealed surface around your home."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Where We Work"
            title="Sealing Driveways & Patios Across Williamson County"
            body={`Local knowledge matters. We understand the clay soil, humidity and freeze-thaw conditions that challenge concrete across ${business.regionFull}.`}
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, i) => (
              <AreaCard key={area.slug} area={area} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <SectionHead
            eyebrow="How We Work"
            title="A Straightforward 3-Step Sealing Process"
            body="From your first call to the final walkthrough, you'll always know exactly what's happening and why."
            onDark
          />
          <ProcessSteps steps={processSteps} onDark />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead eyebrow="Customer Reviews" title="Trusted by Homeowners Across Williamson County" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, i) => (
              <TestimonialCard key={item.name} item={item} delay={i === 0 ? undefined : (i as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHead eyebrow="Frequently Asked Questions" title="Sealing Questions, Answered" />
          <FaqAccordion items={homeFaqs} />
        </Container>
      </section>

      <CTASection
        eyebrow="Let's Protect Your Concrete"
        title="Get Your Free Sealing Estimate Today"
        body="Talk to a real local expert — not a call center. We'll inspect your driveway or patio and give you an honest plan backed by our written warranty."
      />
    </>
  );
}
