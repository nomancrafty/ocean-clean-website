import Link from "next/link";
import { Container } from "./Container";
import { SectionHead } from "./SectionHead";
import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import { areas } from "@/lib/areas";
import { business } from "@/lib/site";

export function ProudlyServing() {
  return (
    <section className="py-14 sm:py-20 bg-cream-100">
      <Container>
        <SectionHead
          eyebrow="Proudly Serving Williamson County"
          title={`Local to ${business.regionShort.replace(", TN", "")} — Not a National Chain`}
          body="We're a locally owned sealing crew, not a franchise call center. That means the person who inspects your driveway is the same person who shows up to seal it."
        />
        <Reveal className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-3 font-head font-semibold text-ink-700 transition-colors hover:border-amber-500 hover:text-amber-600"
            >
              <Icon name="mapPin" className="h-4 w-4 text-amber-500" />
              {area.city}
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
