"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_TEL, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { type Locale, getNavLinks } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { LanguageToggle } from "@/components/layout/language-toggle";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/social";

const socialLinks = [
  { label: "Instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
];

const callLabel = { es: "Llámanos", en: "Call Us" } as const;

export function Header({ locale = "es" }: { locale?: Locale }) {
  const [stuck, setStuck] = useState(false);
  const pathname = usePathname();
  const navLinks = getNavLinks(locale);

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
      <div
        className={cn(
          "absolute left-[30px] flex items-center gap-4 transition-colors lg:left-[50px]",
          stuck ? "text-ink" : "text-white"
        )}
      >
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="opacity-90 transition-opacity hover:opacity-100"
          >
            <Icon className="size-[18px]" />
          </a>
        ))}
      </div>

      <nav aria-label="Principal" className="flex gap-[34px] max-lg:hidden">
        {navLinks.map((link) => (
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

      <div
        className={cn(
          "absolute right-[50px] flex items-center gap-6 transition-colors max-lg:hidden",
          stuck ? "text-ink" : "text-white"
        )}
      >
        <LanguageToggle locale={locale} />
        <a
          href={`tel:${PHONE_TEL}`}
          className={cn(
            "relative border px-[18px] py-[9px] text-xs font-bold uppercase tracking-[0.2em] transition-colors",
            stuck
              ? "border-ink text-ink hover:bg-ink hover:text-tan"
              : "border-white text-white hover:bg-white hover:text-grey"
          )}
        >
          <AnimatedBorder />
          {callLabel[locale]}
        </a>
      </div>

      <div
        className={cn(
          "flex items-center gap-4 transition-colors lg:hidden",
          stuck ? "text-ink" : "text-white"
        )}
      >
        <LanguageToggle locale={locale} />
        <MobileMenu stuck={stuck} locale={locale} />
      </div>
    </header>
  );
}
