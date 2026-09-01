import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: {
    lede: "Nos especializamos en diseño y desarrollo paisajista de jardines sostenibles y tropicales.",
    body: "Diseñamos y construimos jardines completos para residencias y comercios en todo Puerto Rico, con roca volcánica, grava, grama natural y sintética, agaves y suculentas que aguantan nuestro clima.",
    cta: "Conócenos",
    ctaHref: "/nosotros",
    alt: "Fundador de AGAVE Landscaping PR en un patio recién instalado con agaves y suculentas",
  },
  en: {
    lede: "We specialize in landscape design and development for sustainable, tropical gardens.",
    body: "We design and build complete gardens for homes and businesses across Puerto Rico, using volcanic rock, gravel, natural and synthetic turf, and agaves and succulents built for our climate.",
    cta: "About Us",
    ctaHref: "/en/nosotros",
    alt: "AGAVE Landscaping PR founder in a freshly installed patio with agaves and succulents",
  },
} as const;

export function AboutTeaser({ locale = "es" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section id="intro" className="py-[92px] max-md:py-16">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-8 max-md:px-[22px] lg:grid-cols-[1fr_0.72fr]">
        <Reveal direction="left">
          <p className="text-[clamp(24px,2.6vw,32px)] leading-[1.4] text-ink">{t.lede}</p>
          <hr className="my-6 w-[75px] border-t-2 border-sage" />
          <p className="text-grey">{t.body}</p>
          <div className="mt-7">
            <GhostLink href={t.ctaHref}>{t.cta}</GhostLink>
          </div>
        </Reveal>

        <Reveal direction="right" delay={300}>
          <div className="relative aspect-square overflow-hidden bg-tan/40">
            <Image
              src="/img/photos/founder-portrait.jpg"
              alt={t.alt}
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              quality={88}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
