import Link from "next/link";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHero({
  crumb,
  title,
  body,
  image,
}: {
  crumb: string;
  title: string;
  body: string;
  image: string;
}) {
  return (
    <section className="relative bg-charcoal-900 text-steel-300 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-charcoal-900 via-charcoal-900/70 to-charcoal-900/35" />
      <div className="absolute top-0 right-0 w-[36%] h-full bg-amber-500 opacity-10 diag-right" />
      <Container className="relative z-10">
        <Reveal className="py-16 sm:py-24 lg:py-28 max-w-[780px]">
          <nav className="flex gap-2.5 text-[0.85rem] text-steel-300 mb-4">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span className="text-amber-400">/</span>
            <span className="text-amber-400">{crumb}</span>
          </nav>
          <h1 className="text-white text-[clamp(2.2rem,5vw,3.5rem)] mb-4">{title}</h1>
          <p className="text-[1.12rem] text-[#c4cdd6] max-w-[620px]">{body}</p>
        </Reveal>
      </Container>
    </section>
  );
}
