import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/icons";
import { ContactForm } from "@/components/ContactForm";
import { business } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | Free Sealing Estimate in ${business.regionShort}`,
  description: `Contact ${business.name} for a free concrete or paver sealing estimate in ${business.regionFull}. Call ${business.phoneDisplay} or send us a message.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Request Your Free Sealing Estimate"
        body="Tell us what's going on with your driveway, patio or pavers and we'll get back to you fast with honest answers — no pressure, no obligation."
        image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 items-start">
            <Reveal className="grid gap-4">
              <div className="mb-1">
                <span className="eyebrow">Get In Touch</span>
                <h2 className="text-[clamp(1.7rem,3.5vw,2.3rem)] mt-3 mb-2.5">We&apos;re Here to Help</h2>
                <p className="text-ink-500">
                  Call us directly or fill out the form — whichever is easier. A real {business.name} team member
                  will respond, not a call center.
                </p>
              </div>

              <a
                href={`tel:${business.phoneTel}`}
                className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5 transition-all hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="phone" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Call Us</h4>
                  <p className="text-ink-500">{business.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${business.email}`}
                className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5 transition-all hover:-translate-y-1 hover:shadow-sm"
              >
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="mail" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Email Us</h4>
                  <p className="text-ink-500">{business.email}</p>
                </div>
              </a>

              <div className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="mapPin" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Service Area</h4>
                  <p className="text-ink-500">{business.regionFull}</p>
                </div>
              </div>

              <div className="flex gap-4.5 items-start rounded-[14px] border border-line bg-white p-5.5">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-[12px] bg-linear-to-br from-amber-500 to-amber-700">
                  <Icon name="clock" className="h-6 w-6 text-white" />
                </span>
                <div>
                  <h4 className="text-[1.06rem] mb-0.5">Hours</h4>
                  {business.hours.map((h) => (
                    <p key={h.label} className="text-ink-500">{h.label}: {h.value}</p>
                  ))}
                </div>
              </div>

              <div className="flex gap-3.5 items-center rounded-[10px] bg-amber-500/12 px-4.5 py-4">
                <Icon name="shieldCheck" className="h-6.5 w-6.5 text-amber-600 shrink-0" />
                <div>
                  <strong className="block text-charcoal-900 font-head">{business.warrantyYears} Warranty</strong>
                  <span className="text-[0.86rem] text-ink-700">Honest pricing on every job</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-24">
        <Container>
          <Reveal className="rounded-[22px] border border-line overflow-hidden min-h-[340px] grid place-items-center text-center bg-[linear-gradient(rgba(31,40,50,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(31,40,50,0.06)_1px,transparent_1px),linear-gradient(135deg,#e9eef3,#dde6ee)] bg-[length:40px_40px,40px_40px,100%_100%]">
            <div className="flex flex-col items-center gap-2.5 p-5 text-charcoal-800">
              <Icon name="mapPin" className="h-11 w-11 text-amber-500 drop-shadow-[0_8px_12px_rgba(20,17,12,0.2)]" />
              <strong className="font-head text-[1.1rem]">Serving {business.regionShort}</strong>
              <span className="text-[0.86rem] text-ink-500">
                Replace this placeholder with your embedded Google Map
                <br />
                (Google Maps → Share → Embed a map → paste the &lt;iframe&gt; here)
              </span>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
