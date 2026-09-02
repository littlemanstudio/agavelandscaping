"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

const copy = {
  es: {
    full: (
      <>
        Estimados Gratis por WhatsApp&ensp;|&ensp;Ponce, Puerto Rico
        &middot; 20+ Años de Experiencia&ensp;|&ensp;
      </>
    ),
    short: <>Estimados Gratis&ensp;&middot;&ensp;</>,
  },
  en: {
    full: (
      <>
        Free Estimates via WhatsApp&ensp;|&ensp;Ponce, Puerto Rico
        &middot; 20+ Years of Experience&ensp;|&ensp;
      </>
    ),
    short: <>Free Estimates&ensp;&middot;&ensp;</>,
  },
} as const;

export function AnnouncementBar() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = copy[locale];
  return (
    <div
      data-announcement-bar
      className="fixed inset-x-0 top-0 z-[60] flex h-[var(--bar-h)] items-center justify-center bg-sage px-4 text-center text-white"
    >
      <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[11px] font-bold uppercase tracking-[0.18em] max-sm:hidden">
        {t.full}
        <a href={`tel:${PHONE_TEL}`} className="underline-offset-2 hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
      <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[11px] font-bold uppercase tracking-[0.18em] sm:hidden">
        {t.short}
        <a href={`tel:${PHONE_TEL}`} className="underline-offset-2 hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
