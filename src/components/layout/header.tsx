"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PHONE_TEL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Header() {
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const barEl = document.querySelector<HTMLElement>("[data-announcement-bar]");
    const barH = barEl?.offsetHeight ?? 0;
    const onScroll = () => setStuck(window.scrollY > barH + 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-[var(--bar-h)] z-50 flex items-center justify-center px-[50px] py-7 transition-[background-color,padding] duration-300 max-lg:justify-end max-lg:px-[30px]",
        stuck ? "bg-tan py-4" : "bg-transparent"
      )}
    >
      <nav aria-label="Principal" className="flex gap-[34px] max-lg:hidden">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "border-b-2 border-transparent py-[5px] text-[13px] font-bold uppercase tracking-[0.22em] transition-colors",
              stuck ? "text-ink" : "text-white",
              pathname === link.href && (stuck ? "border-ink" : "border-white")
            )}
          >
            {link.title}
          </Link>
        ))}
      </nav>

      <a
        href={`tel:${PHONE_TEL}`}
        className={cn(
          "absolute right-[50px] border px-[18px] py-[9px] text-xs font-bold uppercase tracking-[0.2em] transition-colors max-lg:hidden",
          stuck
            ? "border-ink text-ink hover:bg-ink hover:text-tan"
            : "border-white text-white hover:bg-white hover:text-grey"
        )}
      >
        Llámanos
      </a>

      <MobileMenu />
    </header>
  );
}
