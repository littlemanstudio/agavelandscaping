import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/social";

const socialLinks = [
  { label: "Instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SOCIAL.facebook, Icon: FacebookIcon },
  { label: "WhatsApp", href: WHATSAPP_URL, Icon: WhatsAppIcon },
];

export function Footer() {
  return (
    <footer className="bg-tan text-ink">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-8 py-14 max-md:px-[22px] md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label="AGAVE Landscaping, inicio"
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
                Landscaping &middot; Diseño de Jardines
              </em>
            </span>
          </Link>
        </div>

        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.28em]">Visítanos</p>
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
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.28em]">Síguenos</p>
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
          &copy; {new Date().getFullYear()} AGAVE Landscaping. Todos los derechos reservados.
        </span>
        <span>
          <Link href="/terminos" className="hover:text-sage-deep">
            Términos y Condiciones
          </Link>{" "}
          &middot;{" "}
          <Link href="/privacidad" className="hover:text-sage-deep">
            Política de Privacidad
          </Link>
        </span>
        <span>Sitio por Littleman Labs</span>
      </div>
    </footer>
  );
}
