"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";

const label = { es: "Saltar al contenido", en: "Skip to content" } as const;

export function SkipLink() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[200] focus:bg-tan focus:px-4 focus:py-2 focus:text-ink"
    >
      {label[locale]}
    </a>
  );
}
