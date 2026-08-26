export type IconKey =
  | "phone"
  | "mail"
  | "mapPin"
  | "clock"
  | "check"
  | "arrowRight"
  | "shield"
  | "shieldCheck"
  | "star"
  | "droplet"
  | "sun"
  | "sparkles"
  | "layers"
  | "grid"
  | "waves"
  | "gem"
  | "search"
  | "clipboard"
  | "checkCircle"
  | "bug"
  | "snowflake"
  | "flame"
  | "home"
  | "award"
  | "facebook"
  | "instagram"
  | "google"
  | "youtube";

type IconProps = { className?: string };

const line = "none";

const icons: Record<IconKey, (props: IconProps) => React.JSX.Element> = {
  phone: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M3 5a2 2 0 0 1 2-2h3l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v3a2 2 0 0 1-2 2A18 18 0 0 1 3 5z" />
    </svg>
  ),
  mail: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  mapPin: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 21s-7-5.2-7-11a7 7 0 0 1 14 0c0 5.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  clock: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  check: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  arrowRight: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  ),
  shield: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" />
    </svg>
  ),
  shieldCheck: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  star: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9" />
    </svg>
  ),
  droplet: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" />
    </svg>
  ),
  sun: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),
  sparkles: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4z" />
    </svg>
  ),
  layers: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  grid: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  ),
  waves: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M2 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M2 20c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
    </svg>
  ),
  gem: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M6 3h12l3 5-9 13L3 8z" />
      <path d="M3 8h18M9 3l1 5-4 0M15 3l-1 5 4 0M10 8l2 13 2-13" />
    </svg>
  ),
  search: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  clipboard: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M4 4h16v16H4z" />
      <path d="M8 9h8M8 13h6" />
    </svg>
  ),
  checkCircle: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-6" />
    </svg>
  ),
  bug: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V5M9 5l-2-1M15 5l2-1M6 12H3M21 12h-3M6 17l-2 2M18 17l2 2M9 8 7 6M15 8l2-2" />
    </svg>
  ),
  snowflake: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 2v20M4.5 7l15 10M19.5 7l-15 10" />
      <path d="M8 4l4 3 4-3M8 20l4-3 4 3M3 9l1 4-4 1M3 15l1-4-4-1M21 9l-1 4 4 1M21 15l-1-4 4-1" />
    </svg>
  ),
  flame: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M12 2s-5 5.5-5 10a5 5 0 0 0 10 0c0-1.5-1-2.5-1-2.5s0 2-2 2-1.5-2-1-3.5S12 2 12 2z" />
    </svg>
  ),
  home: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M3 11 12 4l9 7" />
      <path d="M5 9v11h14V9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  award: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.5 14 -1.5 7 5-3 5 3-1.5-7" />
    </svg>
  ),
  facebook: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14 9h3V6h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h2.5l.5-3H13v-2a1 1 0 0 1 1-1z" />
    </svg>
  ),
  instagram: ({ className }) => (
    <svg viewBox="0 0 24 24" fill={line} stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  google: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.1a4.4 4.4 0 0 1-1.9 2.9v2.4h3.1c1.8-1.7 2.7-4.1 2.7-7.1z" />
      <path d="M12 21c2.4 0 4.5-.8 6-2.2l-3.1-2.4c-.8.6-1.9.9-2.9.9-2.3 0-4.2-1.5-4.9-3.6H3.9v2.5A9 9 0 0 0 12 21z" />
    </svg>
  ),
  youtube: ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8zM10 15V9l5 3z" />
    </svg>
  ),
};

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  const Component = icons[name];
  return <Component className={className} />;
}
