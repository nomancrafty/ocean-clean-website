"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { business, navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b transition-shadow ${
          stuck ? "shadow-[0_8px_30px_rgba(17,22,28,0.10)] border-line" : "border-transparent"
        }`}
      >
        <Container>
          <nav className="flex items-center justify-between min-h-[78px] gap-6">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={`${business.name} home`}>
              <span className="grid h-12 w-12 place-items-center rounded-[11px] bg-linear-to-br from-amber-500 to-amber-700 shadow-[0_6px_16px_rgba(217,142,42,0.35)] shrink-0">
                <span className="font-head font-extrabold text-white text-lg">SS</span>
              </span>
              <span className="leading-tight">
                <span className="block font-head font-extrabold text-[1.16rem] text-charcoal-900">
                  {business.name}
                </span>
                <span className="block text-[0.62rem] font-bold tracking-[0.2em] uppercase text-amber-600 mt-0.5">
                  Concrete &amp; Paver Sealing
                </span>
              </span>
            </Link>

            <div
              className={`nav-links flex items-center gap-0.5 max-[880px]:fixed max-[880px]:top-0 max-[880px]:right-0 max-[880px]:h-dvh max-[880px]:w-[min(86vw,360px)] max-[880px]:bg-white max-[880px]:flex-col max-[880px]:items-stretch max-[880px]:gap-1.5 max-[880px]:px-6 max-[880px]:pt-24 max-[880px]:pb-8 max-[880px]:shadow-lg max-[880px]:overflow-y-auto max-[880px]:transition-transform max-[880px]:duration-300 max-[880px]:z-[100] ${
                open ? "max-[880px]:translate-x-0" : "max-[880px]:translate-x-[110%]"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-head font-semibold text-[0.97rem] px-3.5 py-2.5 rounded-lg transition-colors max-[880px]:px-4 max-[880px]:py-3.5 max-[880px]:text-[1.05rem] max-[880px]:rounded-[10px] ${
                    isActive(link.href)
                      ? "text-amber-600 max-[880px]:bg-cream-100"
                      : "text-ink-700 hover:text-amber-600 hover:bg-cream-100"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="hidden max-[880px]:block mt-3">
                <Button href="/contact" block>
                  Free Estimate
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${business.phoneTel}`}
                className="hidden min-[881px]:inline-flex flex-col leading-tight"
              >
                <small className="text-[0.66rem] text-ink-500 uppercase tracking-wide">Call Today</small>
                <strong className="font-head text-[1.06rem] text-charcoal-900">{business.phoneDisplay}</strong>
              </a>
              <div className="hidden min-[881px]:block">
                <Button href="/contact">Free Estimate</Button>
              </div>
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((v) => !v)}
                className="hidden max-[880px]:grid relative h-[46px] w-[46px] place-items-center rounded-[10px] bg-cream-100 z-[100]"
              >
                <span
                  className="absolute left-1/2 top-1/2 h-0.5 w-[22px] rounded bg-charcoal-900 transition-transform duration-300"
                  style={{ transform: open ? "translate(-50%, -50%) rotate(45deg)" : "translate(-50%, -8px)" }}
                />
                <span
                  className="absolute left-1/2 top-1/2 h-0.5 w-[22px] rounded bg-charcoal-900 transition-opacity duration-200"
                  style={{ transform: "translate(-50%, -50%)", opacity: open ? 0 : 1 }}
                />
                <span
                  className="absolute left-1/2 top-1/2 h-0.5 w-[22px] rounded bg-charcoal-900 transition-transform duration-300"
                  style={{ transform: open ? "translate(-50%, -50%) rotate(-45deg)" : "translate(-50%, 6px)" }}
                />
              </button>
            </div>
          </nav>
        </Container>
      </header>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[99] bg-charcoal-900/50 min-[881px]:hidden"
          aria-hidden
        />
      )}
    </>
  );
}
