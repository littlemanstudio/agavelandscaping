"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.18em]",
        className
      )}
    >
      <Link
        href={localePath(pathname, "es")}
        aria-current={locale === "es" ? "true" : undefined}
        className={cn("transition-opacity", locale === "es" ? "opacity-100" : "opacity-55 hover:opacity-100")}
      >
        Es
      </Link>
      <span aria-hidden="true" className="opacity-40">
        /
      </span>
      <Link
        href={localePath(pathname, "en")}
        aria-current={locale === "en" ? "true" : undefined}
        className={cn("transition-opacity", locale === "en" ? "opacity-100" : "opacity-55 hover:opacity-100")}
      >
        En
      </Link>
    </div>
  );
}
