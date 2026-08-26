import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import type { IconKey } from "./icons";

export function ProcessSteps({
  steps,
  onDark = false,
}: {
  steps: { icon: IconKey; title: string; body: string }[];
  onDark?: boolean;
}) {
  return (
    <div className="grid gap-8 sm:grid-cols-3">
      {steps.map((step, i) => (
        <Reveal
          key={step.title}
          delay={(i === 0 ? undefined : (Math.min(i, 3) as 1 | 2 | 3))}
          className={`relative rounded-[14px] border pt-11 pb-8 px-7.5 transition-all duration-300 hover:-translate-y-1.5 ${
            onDark
              ? "bg-charcoal-800 border-white/8 hover:shadow-lg"
              : "bg-white border-line hover:shadow-md"
          }`}
        >
          <div className="absolute -top-6 left-7.5 grid h-13 w-13 place-items-center rounded-[13px] bg-amber-500 text-white font-head font-extrabold text-[1.4rem] shadow-[0_10px_22px_rgba(217,142,42,0.35)]">
            {i + 1}
          </div>
          <div className={`grid h-13.5 w-13.5 place-items-center rounded-[13px] mt-2 mb-4.5 ${onDark ? "bg-white/6" : "bg-cream-100"}`}>
            <Icon name={step.icon} className="h-7 w-7 text-amber-600" />
          </div>
          <h3 className="text-[1.22rem] mb-2.5" style={onDark ? { color: "#fff" } : undefined}>
            {step.title}
          </h3>
          <p className={`text-[0.95rem] ${onDark ? "text-steel-300" : "text-ink-500"}`}>{step.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
