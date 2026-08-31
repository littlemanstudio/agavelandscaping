import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { MasonryGallery, type MasonryItem } from "@/components/sections/masonry-gallery";
import { VideoBlock } from "@/components/sections/video-block";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL, SOCIAL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Galería de proyectos reales de AGAVE Landscaping PR en Ponce, Puerto Rico: patios, xerojardines, caminos e instalaciones residenciales y comerciales.",
  alternates: { canonical: "/proyectos" },
  openGraph: {
    title: "Proyectos | AGAVE Landscaping PR",
    description: "Proyectos reales de paisajismo residencial y comercial en Ponce, Puerto Rico.",
    url: `${SITE_URL}/proyectos`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const gallery: MasonryItem[] = [
  { src: "/img/photos/patio-senorial-sign.jpg", alt: "Patio Señorial en Ponce, cactus y agave junto a la entrada", caption: "Patio Señorial" },
  { src: "/img/photos/tropical-path-ferns.jpg", alt: "Camino tropical entre helechos, agave y piedra de río", caption: "Armonía Tropical" },
  { src: "/img/photos/hero-night-yard.jpg", alt: "Instalación residencial con iluminación nocturna de patio", caption: "Iluminación Nocturna" },
  { src: "/img/photos/stepping-stone-path.jpg", alt: "Camino de losas entre grava dorada y cactus", caption: "Camino de Losas" },
  { src: "/img/photos/entrance-88-turf.jpg", alt: "Patio delantero con grama sintética y borde curvo de roca negra", caption: "Flujo Natural" },
  { src: "/img/photos/sti-commercial-cactus.jpg", alt: "Instalación comercial con jardín de cactus", caption: "Xerojardín Comercial" },
  { src: "/img/photos/front-yard-daytime.jpg", alt: "Patio delantero de día con grava blanca", caption: "Patio de Día" },
  { src: "/img/photos/succulent-planter-bowl.jpg", alt: "Recipiente con suculentas, cactus y agave", caption: "Detalle de Suculentas" },
  { src: "/img/photos/macro-agave-snake-plant.jpg", alt: "Agave y sansevieria en un cantero de roca clara", caption: "Cantero de Agave" },
  { src: "/img/photos/tropical-garden-palms-1.jpg", alt: "Jardín tropical con palmas, oreja de elefante amarilla y piedra de río", caption: "Rincón Tropical" },
  { src: "/img/photos/agave-barrel-cactus-bowl.jpg", alt: "Agave y cactus barril dorado en recipiente de concreto", caption: "Composición en Concreto" },
  { src: "/img/photos/tan-gravel-garden-path.jpg", alt: "Camino de grava tan entre oreja de elefante amarilla y enebros", caption: "Sendero en Grava" },
];

export default function ProyectosPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/proyectos`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Proyectos", item: `${SITE_URL}/proyectos` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Proyectos"
        title="Trabajo Real"
        subtitle="Una selección de jardines que diseñamos y construimos en Puerto Rico."
      />

      <section className="py-[68px] max-md:py-[52px]">
        <div className="mx-auto max-w-[760px] px-8 max-md:px-[22px]">
          <Reveal direction="up">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Trabajo real: cada foto es un jardín que existe hoy en todo
              Puerto Rico.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <p className="text-grey">
              Patios residenciales, xerojardines, instalaciones comerciales y
              caminos de piedra, cada uno diseñado para su propio terreno. Si
              algo de lo que ves aquí se parece a lo que imaginas, escríbenos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[92px] text-white max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="fade">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage">
              Proyecto Destacado
            </p>
            <h2 className="mb-4 font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase leading-[1.1]">
              Un Jardín, Dos Momentos
            </h2>
            <p className="max-w-[640px] text-white/75">
              El mismo xerojardín, de día y de noche. Roca volcánica, cactus
              barril y un sistema de iluminación diseñado para que tu jardín
              se vea igual de bien después del atardecer.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal direction="left">
              <figure className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/img/photos/xerojardin-modern-day.jpg"
                  alt="Xerojardín moderno de día, con cactus barril dorado y roca volcánica"
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  quality={88}
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
                  Día
                </figcaption>
              </figure>
            </Reveal>
            <Reveal direction="fade" delay={150}>
              <figure className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/img/photos/xerojardin-modern-night.jpg"
                  alt="El mismo xerojardín de noche, iluminado con luces empotradas"
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  quality={88}
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 bg-ink/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  Noche
                </figcaption>
              </figure>
            </Reveal>
            <VideoBlock
              src="/videos/xerojardin-walkthrough.mp4"
              poster="/img/photos/xerojardin-walkthrough-poster.jpg"
              caption="Recorrido en video"
              aspect="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <MasonryGallery items={gallery} />
        </div>
      </section>

      <section className="bg-tan py-[68px] text-ink max-md:py-[52px]">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="fade">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45]">
              Publicamos jardines nuevos cada semana. Síguenos en Instagram
              para verlos primero.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <GhostLink href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Síguenos
            </GhostLink>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="¿Te gustó algo de lo que viste? Hablemos de tu jardín."
        body="Escríbenos por WhatsApp con fotos de tu patio y una idea de lo que buscas, el estimado es gratis."
      />
    </main>
  );
}
