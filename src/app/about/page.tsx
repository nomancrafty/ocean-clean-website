import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "@/components/SectionHead";
import { Reveal } from "@/components/Reveal";
import { SplitMedia } from "@/components/SplitMedia";
import { ValueList } from "@/components/ValueList";
import { IconCard } from "@/components/IconCard";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `About Us | Honest Concrete & Paver Sealing in ${business.regionShort}`,
  description: `Meet ${business.name}: a local, licensed and insured sealing crew serving ${business.regionFull} with honest pricing, commercial-grade sealers and a written ${business.warrantyYears.toLowerCase()} warranty.`,
};

const differentiators = [
  {
    icon: "shield" as const,
    title: "Local Crew On Every Job",
    body: "We never hand your property to a rotating cast of subcontractors — the same trained crew that shows up is accountable for the result.",
  },
  {
    icon: "shieldCheck" as const,
    title: `${business.warrantyYears} Warranty`,
    body: "Every sealing job is backed by a written warranty, because we trust the commercial-grade products and process we use.",
  },
  {
    icon: "award" as const,
    title: `${business.yearsExperience} Years of Local Experience`,
    body: "Years of sealing driveways, patios and pavers through Middle Tennessee summers and winters means we've already seen a surface like yours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="Honest Sealing Experts Serving Williamson County"
        body={`${business.name} protects driveways, patios and pavers across ${business.regionFull} with straight answers, commercial-grade sealers, and a warranty that actually means something.`}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <SplitMedia
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
              stackedImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80"
              badge={{ value: business.jobsCompleted, label: "Driveways & patios sealed and protected" }}
            />
            <Reveal delay={1}>
              <span className="eyebrow">Our Story</span>
              <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] my-3.5">Built on a Promise to Do It Right</h2>
              <p className="text-[1.16rem] text-ink-500 mb-4">
                {business.name} started with one frustration: too many homeowners were sold a quick pressure-wash
                and a coat of hardware-store sealer that failed within a season.
              </p>
              <p className="mb-4 text-ink-500">
                We set out to be different — using commercial-grade sealers matched to the actual surface and
                traffic, and being upfront when a driveway or patio doesn&apos;t need sealing yet. That honesty is why
                most of our work now comes from referrals and repeat customers across Brentwood, Franklin and the
                surrounding towns.
              </p>
              <p className="mb-6 text-ink-500">
                From a single cracked walkway to a full paver pool deck, we treat every property like it&apos;s our own.
              </p>
              <Button href="/contact" size="lg">Talk to Our Team</Button>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-charcoal-900">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <span className="eyebrow">Our Philosophy</span>
              <h2 className="text-white text-[clamp(1.9rem,4vw,2.8rem)] my-3.5">Honest. Upfront. Built to Last.</h2>
              <p className="text-steel-300 mb-2">
                We believe a sealing job should make your property look and perform better for years — not just for
                the week after we leave. So we lead with education, not upsells, and let the results speak.
              </p>
              <ValueList
                items={[
                  {
                    icon: "clipboard",
                    title: "Radically Honest",
                    body: "If your concrete doesn't need sealing yet, we'll tell you. No invented problems, no pressure.",
                  },
                  {
                    icon: "check",
                    title: "Upfront Pricing",
                    body: "A clear, written estimate before we start — what you're quoted is what you pay.",
                  },
                  {
                    icon: "clock",
                    title: "Fast & Efficient",
                    body: "Responsive scheduling and a tidy crew that respects your property and your time.",
                  },
                ]}
              />
            </Reveal>
            <SplitMedia
              image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24 bg-cream-100">
        <Container>
          <SectionHead
            eyebrow="What Makes Us Different"
            title="No Shortcuts. No Excuses. Just Our Crew."
            body="The biggest difference between us and a one-off handyman crew: the team that inspects your property is accountable for the outcome."
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {differentiators.map((item, i) => (
              <IconCard key={item.title} {...item} delay={i === 0 ? undefined : (i as 1 | 2)} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Experience the Difference"
        title="Ready to Work With a Team That Actually Shows Up?"
        body="Schedule your free, no-pressure inspection and get an honest assessment from a real local expert."
      />
    </>
  );
}
