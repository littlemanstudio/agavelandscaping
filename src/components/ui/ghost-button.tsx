import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "@/components/icons/social";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center gap-2.5 border px-[30px] py-[15px] font-body text-[13px] font-bold uppercase tracking-[0.22em] transition-colors duration-300";

const variants = {
  dark: "border-ink text-ink hover:bg-ink hover:text-white",
  light: "border-white text-white hover:bg-white hover:text-grey",
} as const;

type Variant = keyof typeof variants;

function ArrowSlide({ direction = "right" }: { direction?: "right" | "down" }) {
  return (
    <ArrowIcon
      className={cn(
        "transition-transform duration-300",
        direction === "right"
          ? "group-hover:translate-x-1"
          : "rotate-90 group-hover:translate-y-1"
      )}
    />
  );
}

export function GhostLink({
  href,
  variant = "dark",
  children,
  className,
  arrowDirection = "right",
  ...props
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  arrowDirection?: "right" | "down";
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      {children}
      <ArrowSlide direction={arrowDirection} />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={cn(base, variants[variant], className)} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {content}
    </Link>
  );
}

export function GhostButton({
  variant = "dark",
  children,
  className,
  ...props
}: {
  variant?: Variant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      <ArrowSlide />
    </button>
  );
}
