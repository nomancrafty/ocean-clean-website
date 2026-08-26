import Link from "next/link";
import { Icon } from "./icons";

type Variant = "primary" | "dark" | "ghost" | "light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-amber-500 text-white shadow-[0_12px_26px_rgba(217,142,42,0.35)] hover:bg-amber-600 hover:-translate-y-0.5",
  dark: "bg-charcoal-800 text-white hover:bg-charcoal-700 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-white border-[1.5px] border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5",
  light: "bg-white text-charcoal-900 shadow-sm hover:-translate-y-0.5 hover:shadow-md",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  block?: boolean;
  className?: string;
  showArrow?: boolean;
} & (
  | { href: string; type?: undefined; onClick?: undefined }
  | { href?: undefined; type?: "submit" | "button"; onClick?: () => void }
);

export function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  className = "",
  showArrow = false,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 font-head font-bold whitespace-nowrap rounded-[10px] transition-all duration-200 ${
    size === "lg" ? "px-[34px] py-[18px] text-[1.05rem]" : "px-[28px] py-[15px] text-[0.98rem]"
  } ${variantClasses[variant]} ${block ? "w-full" : ""} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && <Icon name="arrowRight" className="h-[18px] w-[18px]" />}
    </>
  );

  if ("href" in rest && rest.href) {
    const isInternal = rest.href.startsWith("/") || rest.href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={rest.href} className={classes}>
          {content}
        </Link>
      );
    }
    return (
      <a href={rest.href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={rest.type ?? "button"} onClick={rest.onClick} className={classes}>
      {content}
    </button>
  );
}
