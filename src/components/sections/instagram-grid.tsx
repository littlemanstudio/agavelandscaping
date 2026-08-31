import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SOCIAL } from "@/lib/constants";

const photos = [
  { src: "/img/photos/front-yard-daytime.jpg", alt: "Patio delantero de día con grava blanca" },
  { src: "/img/photos/succulent-planter-bowl.jpg", alt: "Recipiente con suculentas, cactus y agave" },
  { src: "/img/photos/macro-agave-snake-plant.jpg", alt: "Agave y sansevieria en cantero de roca" },
  { src: "/img/photos/patio-lounge-pergola.jpg", alt: "Área de estar bajo pérgola con suculentas" },
  { src: "/img/photos/stepping-stone-path.jpg", alt: "Camino de losas entre grava dorada" },
  { src: "/img/photos/tropical-path-ferns.jpg", alt: "Camino tropical entre helechos" },
  { src: "/img/photos/patio-senorial-sign.jpg", alt: "Patio Señorial rodeado de plantas tropicales" },
  { src: "/img/photos/sti-commercial-cactus.jpg", alt: "Instalación comercial con jardín de cactus" },
];

export function InstagramGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
        <Reveal direction="fade">
          <div className="mb-8">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Estamos en Instagram. Síguenos para ver los jardines más
              recientes.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <GhostLink href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Síguenos
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
                aria-label="Ver en Instagram"
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
