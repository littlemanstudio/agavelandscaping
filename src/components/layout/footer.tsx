"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { getLocaleFromPathname } from "@/lib/i18n";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/social";

const socialLinks = [
  { label: "Instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
];

const copy = {
  es: {
    homeLabel: "AGAVE Landscaping PR, inicio",
    tagline: "Landscaping PR · Diseño de Jardines",
    visit: "Visítanos",
    follow: "Síguenos",
    rights: "Todos los derechos reservados.",
    terms: "Términos y Condiciones",
    privacy: "Política de Privacidad",
    credit: "Sitio por Littleman Labs",
    home: "/",
    terminosHref: "/terminos",
    privacidadHref: "/privacidad",
  },
  en: {
    homeLabel: "AGAVE Landscaping PR, home",
    tagline: "Landscaping PR · Garden Design",
    visit: "Visit Us",
    follow: "Follow Us",
    rights: "All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    credit: "Site by Littleman Labs",
    home: "/en",
    terminosHref: "/en/terminos",
    privacidadHref: "/en/privacidad",
  },
} as const;

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = copy[locale];

  return (
    <footer className="bg-tan text-ink">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-8 py-14 max-md:px-[22px] md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            href={t.home}
            aria-label={t.homeLabel}
            className="inline-flex items-center gap-3.5"
          >
            <Image
              src="/img/logo/agave-mark.png"
              alt=""
              aria-hidden="true"
              width={52}
              height={40}
            />
            <span className="flex flex-col font-display text-[26px] font-medium uppercase leading-[1.1] tracking-[0.05em]">
              AGAVE
              <em className="font-body text-[10px] font-bold not-italic tracking-[0.3em] opacity-75">
                {t.tagline}
              </em>
            </span>
          </Link>
        </div>

        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.28em]">{t.visit}</p>
          <p className="leading-[2]">
            Ponce, Puerto Rico
            <br />
            <a href={`mailto:${EMAIL}`} className="hover:text-sage-deep">
              {EMAIL}
            </a>
            <br />
            <a href={`tel:${PHONE_TEL}`} className="hover:text-sage-deep">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.28em]">{t.follow}</p>
          <div className="mt-1 flex gap-[18px]">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex text-ink hover:text-sage-deep"
              >
                <Icon className="size-[21px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1320px] flex-wrap justify-between gap-x-6 gap-y-2.5 border-t border-ink/[0.18] px-8 py-6 text-[13px] tracking-[0.04em] opacity-85 max-md:px-[22px]">
        <span>
          &copy; {new Date().getFullYear()} AGAVE Landscaping PR. {t.rights}
        </span>
        <span>
          <Link href={t.terminosHref} className="hover:text-sage-deep">
            {t.terms}
          </Link>{" "}
          &middot;{" "}
          <Link href={t.privacidadHref} className="hover:text-sage-deep">
            {t.privacy}
          </Link>
        </span>
        <span>{t.credit}</span>
      </div>
    </footer>
  );
}
