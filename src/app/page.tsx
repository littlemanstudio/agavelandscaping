import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { MasonryGallery, type MasonryItem } from "@/components/sections/masonry-gallery";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { Testimonial } from "@/components/sections/testimonial";
import { InstagramGrid } from "@/components/sections/instagram-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "AGAVE Landscaping PR | Diseño y Paisajismo en Ponce, PR",
  },
  description:
    "AGAVE Landscaping PR: más de 20 años diseñando y construyendo jardines sostenibles y tropicales en Ponce, PR. Estimados gratis por WhatsApp, sin compromiso.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "AGAVE Landscaping PR | Diseño y Paisajismo en Ponce, Puerto Rico",
    description: "Diseño de jardines en Ponce, PR, con más de 20 años de experiencia.",
    url: SITE_URL,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const homeGallery: MasonryItem[] = [
  { src: "/img/photos/patio-senorial-sign.jpg", alt: "Patio Señorial en Ponce, cactus y agave junto a la entrada", caption: "Patio Señorial" },
  { src: "/img/photos/tropical-path-ferns.jpg", alt: "Camino tropical entre helechos, agave y piedra de río", caption: "Armonía Tropical" },
  { src: "/img/photos/hero-night-yard.jpg", alt: "Instalación residencial con iluminación nocturna de patio", caption: "Iluminación Nocturna" },
  { src: "/img/photos/stepping-stone-path.jpg", alt: "Camino de losas entre grava dorada y cactus", caption: "Camino de Losas" },
  { src: "/img/photos/entrance-88-turf.jpg", alt: "Patio delantero con grama sintética y borde curvo de roca negra", caption: "Flujo Natural" },
  { src: "/img/photos/sti-commercial-cactus.jpg", alt: "Instalación comercial con jardín de cactus", caption: "Xerojardín Comercial" },
];

export default function HomePage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(SITE_URL)) }}
      />

      <HeroSlider />
      <AboutTeaser />

      <section className="bg-sage py-[92px] text-white max-md:py-16">
        <div className="mx-auto max-w-[900px] px-8 text-center max-md:px-[22px]">
          <Reveal direction="down">
            <p>
              Trabajamos de cerca con cada cliente para entregar jardines
              duraderos y de bajo mantenimiento.
            </p>
            <hr className="mx-auto my-6 w-[75px] border-t-2 border-white" />
            <p className="mb-9">Una selección de nuestros proyectos reales.</p>
            <GhostLink href="/proyectos" variant="light">
              Ver Todos los Proyectos
            </GhostLink>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-[1320px] px-8 max-md:px-[22px]">
          <MasonryGallery items={homeGallery} />
        </div>
      </section>

      <EditorialSplit
        image="/img/photos/macro-agave-snake-plant.jpg"
        imageAlt="Agave y sansevieria en un cantero de roca clara"
      >
        <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
          Nuestros Servicios
        </p>
        <h2 className="mb-11 font-display text-[clamp(40px,5.2vw,72px)] font-semibold uppercase leading-[1.04] text-ink">
          No Es Un Esquema.
          <br />
          Es Arte.
        </h2>
        <p className="text-ink">
          No solo cortamos grama. Diseñamos jardines completos, renovamos los
          que ya tienes e instalamos grama artificial, riego e iluminación.
          Medimos, diseñamos y te mostramos el resultado antes de tocar una
          piedra.
        </p>
        <div className="mt-8">
          <GhostLink href="/servicios">Ver Todos los Servicios</GhostLink>
        </div>
      </EditorialSplit>

      <Testimonial />
      <InstagramGrid />

      <div id="contacto">
        <CtaBand
          heading="Cuéntanos cómo quieres tu jardín. Nos encantaría escucharte."
          body="Escríbenos por WhatsApp con fotos de tu patio, servimos todo Puerto Rico. Vamos, medimos y te presentamos el diseño antes de mover una piedra."
        />
      </div>
    </main>
  );
}
