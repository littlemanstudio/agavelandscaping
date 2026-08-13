import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "@/components/icons/social";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center gap-2.5 border px-[30px] py-[15px] font-body text-[13px] font-bold uppercase tracking-[0.22em] transition-colors duration-300";

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
  animated = false,
  ...props
}: {
  href: string;
  variant?: Variant;
  children: ReactNode;
  arrowDirection?: "right" | "down";
  animated?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const content = (
    <>
      {animated && <AnimatedBorder />}
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

export function UnderlineLink({
  href,
  children,
  className,
  light = false,
  ...props
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const cls = cn(
    "group inline-flex items-center gap-2.5 font-body text-[15px] transition-colors duration-300",
    light ? "text-white" : "text-ink",
    className
  );
  const content = (
    <>
      <span className="relative">
        {children}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-100 bg-current transition-transform duration-[400ms] ease-out group-hover:origin-right group-hover:scale-x-0"
        />
      </span>
      <ArrowIcon className="size-[13px] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={cls} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...props}>
      {content}
    </Link>
  );
}

export function GhostButton({
  variant = "dark",
  children,
  className,
  animated = false,
  ...props
}: {
  variant?: Variant;
  children: ReactNode;
  animated?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {animated && <AnimatedBorder />}
      {children}
      <ArrowSlide />
    </button>
  );
}
