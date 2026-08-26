import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { Icon } from "@/components/icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { services, getServiceBySlug } from "@/lib/services";
import { business } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${business.regionShort}`,
    description: `${service.cardCopy} Serving ${business.regionFull}. Free written estimates and a ${business.warrantyYears.toLowerCase()} warranty.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        crumb={service.name}
        title={service.name}
        body={service.cardCopy}
        image={service.heroImage}
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14 items-center">
            <Reveal className="relative min-h-[380px] rounded-[22px] overflow-hidden shadow-md">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.heroImage}')` }}
              />
              <span className="absolute left-5 bottom-5 rounded-lg bg-amber-500 text-white font-head font-bold text-[0.82rem] px-4 py-2">
                {service.name}
              </span>
            </Reveal>
            <Reveal delay={1}>
              <span className="font-display font-bold text-[0.95rem] text-amber-600 tracking-[0.16em] uppercase">
                {service.tagline}
              </span>
              <h2 className="text-[clamp(1.55rem,3vw,2.15rem)] my-2.5">{service.name}</h2>
              {service.intro.map((p) => (
                <p key={p} className="text-ink-500 mb-4">{p}</p>
              ))}
              <ul className="grid gap-3 my-5.5">
                {service.checklist.map((item) => (
                  <li key={item} className="flex gap-3 items-start text-ink-700">
                    <Icon name="check" className="h-5.5 w-5.5 text-success shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href="/contact" size="lg">{service.ctaLabel}</Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="Is It Time?"
            title={`Signs Your Surface Needs ${service.shortName}`}
            body="If you're seeing any of these, it's worth a free, no-pressure inspection."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2 max-w-[820px] mx-auto">
            {service.signs.map((sign) => (
              <div key={sign} className="flex gap-3 items-start rounded-[14px] border border-line bg-white p-5">
                <Icon name="checkCircle" className="h-5.5 w-5.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-ink-700">{sign}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHead eyebrow="Common Questions" title={`${service.shortName} FAQs`} />
          <FaqAccordion items={service.faqs} />
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead eyebrow="Explore More" title="Other Sealing Services" />
          <div className="grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-[14px] border border-line bg-white px-5 py-4.5 font-head font-semibold text-charcoal-900 transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                {s.name}
                <Icon name="arrowRight" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Ready When You Are"
        title={`Get Your Free ${service.shortName} Estimate`}
        body={`We'll inspect your surface, explain exactly what it needs, and give you an honest written price — backed by our ${business.warrantyYears.toLowerCase()} warranty.`}
        primaryLabel={service.ctaLabel}
      />
    </>
  );
}
