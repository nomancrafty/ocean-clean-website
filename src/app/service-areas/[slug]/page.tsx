import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { areas, getAreaBySlug } from "@/lib/areas";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { homeFaqs } from "@/lib/content";
import { business } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};
  return {
    title: `Concrete & Paver Sealing in ${area.city}, TN`,
    description: `${business.name} provides professional concrete, paver and exposed aggregate sealing for homeowners in ${area.city}, ${area.region}. Free written estimates.`,
  };
}

export default async function AreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const orderedTestimonials = [...testimonials].sort((a, b) => {
    const aLocal = a.city.startsWith(area.city) ? 0 : 1;
    const bLocal = b.city.startsWith(area.city) ? 0 : 1;
    return aLocal - bLocal;
  });
  const localFaqs = homeFaqs.slice(0, 4);

  return (
    <>
      <PageHero
        crumb={area.city}
        title={`Concrete & Paver Sealing in ${area.city}, TN`}
        body={`${business.name} protects driveways, patios and pavers throughout ${area.city} and the surrounding ${area.region} area with commercial-grade sealers and a written ${business.warrantyYears.toLowerCase()} warranty.`}
        image={area.heroImage}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <span className="eyebrow">Local to {area.city}</span>
              <h2 className="text-[clamp(1.7rem,3.5vw,2.3rem)] my-3.5">
                Sealing Built for {area.city}&apos;s Homes
              </h2>
              {area.intro.map((p) => (
                <p key={p} className="text-ink-500 mb-4">{p}</p>
              ))}
            </Reveal>
            <Reveal delay={1} className="rounded-[22px] border border-line bg-cream-100 p-7 sm:p-8">
              <h3 className="text-[1.2rem] mb-4">What We Commonly Seal in {area.city}</h3>
              <ul className="grid gap-3.5">
                {area.highlights.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-ink-700">
                    <Icon name="check" className="h-5.5 w-5.5 text-amber-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Our Services"
            title={`Sealing Services Available in ${area.city}`}
            body="Every sealer is matched to your surface, traffic and finish — never a one-size-fits-all coating."
          />
          <div className="grid gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} delay={i === 0 ? undefined : ((i % 3) as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead eyebrow="Customer Reviews" title={`What ${area.city}-Area Homeowners Say`} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orderedTestimonials.map((item, i) => (
              <TestimonialCard key={item.name} item={item} delay={i === 0 ? undefined : (i as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead eyebrow="Frequently Asked Questions" title={`${area.city} Sealing Questions, Answered`} />
          <FaqAccordion items={localFaqs} />
        </Container>
      </section>

      <CTASection
        eyebrow={`Serving ${area.city}`}
        title={`Get Your Free ${area.city} Sealing Estimate`}
        body={`Local, honest, and ready to help — your free inspection in ${area.city} is just one call away.`}
      />
    </>
  );
}
