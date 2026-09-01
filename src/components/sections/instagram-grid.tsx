import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SOCIAL } from "@/lib/constants";
import type { Locale } from "@/lib/i18n";

const photoSrcs = [
  "/img/photos/front-yard-daytime.jpg",
  "/img/photos/succulent-planter-bowl.jpg",
  "/img/photos/macro-agave-snake-plant.jpg",
  "/img/photos/patio-lounge-pergola.jpg",
  "/img/photos/stepping-stone-path.jpg",
  "/img/photos/tropical-path-ferns.jpg",
  "/img/photos/patio-senorial-sign.jpg",
  "/img/photos/sti-commercial-cactus.jpg",
] as const;

const altsEs = [
  "Patio delantero de día con grava blanca",
  "Recipiente con suculentas, cactus y agave",
  "Agave y sansevieria en cantero de roca",
  "Área de estar bajo pérgola con suculentas",
  "Camino de losas entre grava dorada",
  "Camino tropical entre helechos",
  "Patio Señorial rodeado de plantas tropicales",
  "Instalación comercial con jardín de cactus",
];

const altsEn = [
  "Daytime front yard with white gravel",
  "Planter bowl with succulents, cacti, and agave",
  "Agave and snake plant in a rock bed",
  "Lounge area under a pergola with succulents",
  "Stepping-stone path through golden gravel",
  "Tropical path lined with ferns",
  "Patio Señorial surrounded by tropical plants",
  "Commercial cactus garden installation",
];

const copy = {
  es: {
    intro: "Estamos en Instagram. Síguenos para ver los jardines más recientes.",
    cta: "Síguenos",
    ariaLabel: "Ver en Instagram",
  },
  en: {
    intro: "We're on Instagram. Follow us to see the newest gardens.",
    cta: "Follow Us",
    ariaLabel: "View on Instagram",
  },
} as const;

export function InstagramGrid({ locale = "es" }: { locale?: Locale }) {
  const t = copy[locale];
  const alts = locale === "en" ? altsEn : altsEs;
  const photos = photoSrcs.map((src, i) => ({ src, alt: alts[i] }));

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
        <Reveal direction="fade">
          <div className="mb-8">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">{t.intro}</p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <GhostLink href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              {t.cta}
            </GhostLink>
          </div>
        </Reveal>

        <Reveal direction="fade" delay={300}>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {photos.map((photo) => (
              <a
                key={photo.src}
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.ariaLabel}
                className="relative block aspect-square overflow-hidden bg-tan/40"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 46vw, 300px"
                  quality={88}
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
