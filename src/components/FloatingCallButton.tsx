import { Icon } from "./icons";
import { business } from "@/lib/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${business.phoneTel}`}
      aria-label="Call now"
      className="fixed right-4.5 bottom-4.5 z-[90] hidden max-[880px]:grid h-[58px] w-[58px] place-items-center rounded-full bg-amber-500 shadow-[0_12px_26px_rgba(217,142,42,0.4)] animate-call-pulse"
    >
      <Icon name="phone" className="h-[26px] w-[26px] text-white" />
    </a>
  );
}
