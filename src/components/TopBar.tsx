import { Container } from "./Container";
import { Icon } from "./icons";
import { business } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-charcoal-900 text-steel-300 text-[0.85rem]">
      <Container className="flex items-center justify-between gap-4 min-h-[44px] py-2 flex-wrap">
        <div className="flex gap-5 flex-wrap">
          <span className="inline-flex items-center gap-2">
            <Icon name="phone" className="h-[15px] w-[15px] text-amber-500 shrink-0" />
            <a href={`tel:${business.phoneTel}`} className="text-[#dce4ec] font-medium hover:text-amber-400">
              {business.phoneDisplay}
            </a>
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <Icon name="mail" className="h-[15px] w-[15px] text-amber-500 shrink-0" />
            <a href={`mailto:${business.email}`} className="text-[#dce4ec] font-medium hover:text-amber-400">
              {business.email}
            </a>
          </span>
          <span className="hidden md:inline-flex items-center gap-2">
            <Icon name="mapPin" className="h-[15px] w-[15px] text-amber-500 shrink-0" />
            Serving {business.regionShort}
          </span>
        </div>
        <div className="inline-flex gap-3.5 items-center">
          <span className="text-gold-400 font-semibold">★ Free Written Estimates</span>
        </div>
      </Container>
    </div>
  );
}
