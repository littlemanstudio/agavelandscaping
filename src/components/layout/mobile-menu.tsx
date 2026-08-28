"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function MobileMenu({ stuck = false }: { stuck?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center lg:hidden"
      >
        <Menu className={cn("size-5 transition-colors", stuck ? "text-ink" : "text-white")} strokeWidth={2} />
      </button>
      <SheetContent side="right" className="bg-tan px-6 py-8 sm:max-w-xs">
        <SheetHeader className="p-0">
          <SheetTitle className="sr-only">Menú móvil</SheetTitle>
        </SheetHeader>
        <nav aria-label="Menú móvil" className="mt-10 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "font-display text-lg uppercase tracking-[0.1em] text-ink",
                pathname === link.href && "text-sage-deep"
              )}
            >
              {link.title}
            </Link>
          ))}
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-4 border border-ink px-4 py-3 text-center text-[13px] font-bold uppercase tracking-[0.2em] text-ink"
          >
            Llámanos: {PHONE_DISPLAY}
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
