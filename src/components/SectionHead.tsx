import { Reveal } from "./Reveal";

export function SectionHead({
  eyebrow,
  title,
  body,
  center = true,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <Reveal className={`max-w-[730px] mb-9 sm:mb-12 ${center ? "mx-auto text-center" : ""} ${onDark ? "on-dark" : ""}`}>
      <span className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-3.5 mb-3.5 text-[clamp(2rem,4.3vw,3.1rem)] ${
          onDark ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p className={`text-[1.06rem] ${onDark ? "text-steel-300" : "text-ink-500"}`}>{body}</p>
      )}
    </Reveal>
  );
}
