import Link from "next/link";
import { Container } from "./Container";
import { Icon } from "./icons";
import { Button } from "./Button";
import { business, socialLinks } from "@/lib/site";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-900 text-steel-400 pt-14 sm:pt-20">
      <div className="bg-amber-500">
        <Container className="flex items-center justify-between gap-6 py-8 flex-wrap">
          <div>
            <h3 className="text-white text-[clamp(1.4rem,3vw,2rem)]">
              Protect Your Concrete &amp; Pavers — Backed for 5 Years
            </h3>
            <p className="text-white/90">Serving {business.regionFull}.</p>
          </div>
          <Button href="/contact" variant="light" size="lg">
            Book Your Free Estimate
          </Button>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1fr] gap-10 pb-12 border-b border-white/10 pt-14">
          <div>
            <div className="inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[11px] bg-linear-to-br from-amber-500 to-amber-700 shrink-0">
                <span className="font-head font-extrabold text-white text-base">SS</span>
              </span>
              <span className="font-head font-extrabold text-white text-[1.1rem]">{business.name}</span>
            </div>
            <p className="my-4 text-[0.94rem] max-w-[320px]">
              Concrete, paver, broomed and exposed aggregate sealing protecting driveways and patios across
              Williamson County for {business.yearsExperience} years.
            </p>
            <div className="inline-flex items-center gap-2.5 rounded-[10px] bg-white/6 border border-white/10 px-3.5 py-2.5 mb-5">
              <Icon name="shieldCheck" className="h-6.5 w-6.5 text-gold-400 shrink-0" />
              <div>
                <strong className="block text-white font-head text-[0.92rem]">
                  {business.warrantyYears} Warranty
                </strong>
                <span className="text-[0.78rem]">On every sealing job we complete</span>
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-[42px] w-[42px] place-items-center rounded-[11px] bg-white/7 hover:bg-amber-500 transition-colors"
                >
                  <Icon
                    name={s.label.toLowerCase() as "facebook" | "instagram" | "google"}
                    className="h-[19px] w-[19px] text-[#dce4ec]"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-[1.02rem] mb-4.5 mb-4">Quick Links</h4>
            <ul className="grid gap-2.5">
              <li><Link href="/" className="text-[0.94rem] hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-[0.94rem] hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-[0.94rem] hover:text-amber-400 transition-colors">Services</Link></li>
              <li><Link href="/service-areas" className="text-[0.94rem] hover:text-amber-400 transition-colors">Service Areas</Link></li>
              <li><Link href="/contact" className="text-[0.94rem] hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[1.02rem] mb-4">Our Services</h4>
            <ul className="grid gap-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[0.94rem] hover:text-amber-400 transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[1.02rem] mb-4">Service Areas</h4>
            <ul className="grid gap-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="text-[0.94rem] hover:text-amber-400 transition-colors">
                    {a.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[1.02rem] mb-4">Get In Touch</h4>
            <ul className="grid gap-3.5">
              <li className="flex gap-3 items-start text-[0.94rem]">
                <Icon name="phone" className="h-[18px] w-[18px] text-amber-400 shrink-0 mt-0.5" />
                <a href={`tel:${business.phoneTel}`} className="hover:text-amber-400">{business.phoneDisplay}</a>
              </li>
              <li className="flex gap-3 items-start text-[0.94rem]">
                <Icon name="mail" className="h-[18px] w-[18px] text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${business.email}`} className="hover:text-amber-400">{business.email}</a>
              </li>
              <li className="flex gap-3 items-start text-[0.94rem]">
                <Icon name="mapPin" className="h-[18px] w-[18px] text-amber-400 shrink-0 mt-0.5" />
                <span>{business.regionFull}</span>
              </li>
              <li className="flex gap-3 items-start text-[0.94rem]">
                <Icon name="clock" className="h-[18px] w-[18px] text-amber-400 shrink-0 mt-0.5" />
                <span>{business.hours[0].label}: {business.hours[0].value}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 flex-wrap py-6 text-[0.86rem]">
          <p>
            &copy; {year} {business.name}. All rights reserved. {business.warrantyYears} warranty on every job.
          </p>
          <div className="flex gap-5">
            <Link href="/service-areas" className="hover:text-amber-400">Service Areas</Link>
            <Link href="/contact" className="hover:text-amber-400">Free Estimate</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
