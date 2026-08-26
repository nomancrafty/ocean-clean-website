"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({
  target,
  suffix = "",
  decimals = 0,
  label,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const dur = 1600;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(target * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className="text-center text-steel-300">
      <strong className="counter-value block font-head font-extrabold text-[clamp(1.9rem,4vw,2.8rem)] leading-none text-white">
        {value.toFixed(decimals)}
        {suffix}
      </strong>
      <span className="block mt-2 text-[0.84rem] text-steel-400">{label}</span>
    </div>
  );
}
