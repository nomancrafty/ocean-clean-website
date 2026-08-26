import { Reveal } from "./Reveal";
import { Icon } from "./icons";
import type { IconKey } from "./icons";

export function IconCard({
  icon,
  title,
  body,
  delay,
  tone = "dark",
}: {
  icon: IconKey;
  title: string;
  body: string;
  delay?: 1 | 2 | 3;
  tone?: "dark" | "amber";
}) {
  return (
    <Reveal delay={delay} className="group relative overflow-hidden rounded-[14px] border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-transparent">
      <span className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
      <div
        className={`grid h-[60px] w-[60px] place-items-center rounded-[14px] mb-5.5 ${
          tone === "dark"
            ? "bg-linear-to-br from-charcoal-700 to-charcoal-900"
            : "bg-linear-to-br from-amber-500 to-amber-700"
        }`}
      >
        <Icon name={icon} className="h-[30px] w-[30px] text-white" />
      </div>
      <h3 className="text-[1.3rem] mb-3">{title}</h3>
      <p className="text-ink-500 text-[0.98rem]">{body}</p>
    </Reveal>
  );
}
