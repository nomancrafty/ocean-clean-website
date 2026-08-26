"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Reveal className="max-w-[840px] mx-auto">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.q}
            className={`mb-3.5 overflow-hidden rounded-[14px] border bg-white transition-shadow duration-300 ${
              isOpen ? "border-amber-500 shadow-sm" : "border-line"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5.5 text-left font-head font-bold text-[1.06rem] text-charcoal-900"
            >
              {item.q}
              <span
                className={`relative grid h-7.5 w-7.5 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                  isOpen ? "bg-amber-500" : "bg-cream-100"
                }`}
              >
                <span
                  className={`absolute h-0.5 w-3 rounded ${isOpen ? "bg-white" : "bg-charcoal-700"}`}
                />
                <span
                  className={`absolute w-0.5 h-3 rounded transition-transform duration-300 ${
                    isOpen ? "bg-white scale-y-0" : "bg-charcoal-700"
                  }`}
                />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-ink-500">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </Reveal>
  );
}
