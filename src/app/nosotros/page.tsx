import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
import { VideoBlock } from "@/components/sections/video-block";
import { Reveal } from "@/components/motion/reveal";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce a AGAVE Landscaping: un estudio de diseño de jardines con más de 20 años de experiencia en Ponce, Puerto Rico. Diseñamos y construimos de inicio a fin.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | AGAVE Landscaping",
    description:
      "Diseño y construcción de jardines de principio a fin, con más de 20 años de experiencia en Ponce, Puerto Rico.",
    url: `${SITE_URL}/nosotros`,
    siteName: "AGAVE Landscaping",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function NosotrosPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/nosotros`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Nosotros", item: `${SITE_URL}/nosotros` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Nosotros" title="Quiénes Somos" subtitle="De boceto a última piedra." />

      <SplitSection image="/img/photos/founder-portrait.jpg" imageAlt="Fundador de AGAVE Landscaping en un patio recién instalado con agaves y suculentas">
        <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
          AGAVE Landscaping es un estudio de diseño de jardines en Ponce, con
          más de 20 años de experiencia, llevando cada proyecto de principio a
          fin.
        </p>
        <hr className="my-6 w-[75px] border-t-2 border-sage" />
        <p className="text-grey">
          Planificamos y construimos jardines completos para residencias y
          comercios en todo Puerto Rico, roca volcánica, grava, grama natural
          y sintética, agaves y suculentas que aguantan nuestro clima. Te
          presentamos el diseño completo antes de mover una piedra.
        </p>
        <div className="mt-7">
          <GhostLink href="/servicios">Nuestros Servicios</GhostLink>
        </div>
      </SplitSection>

      <SkimmerGrid
        eyebrow="Cómo Trabajamos"
        title="Del primer contacto al diseño final."
        items={[
          {
            title: "Diseño en Sitio.",
            body: "Vamos a tu casa o negocio, medimos, y presentamos el diseño antes de mover una sola piedra.",
          },
          {
            title: "Estimado por WhatsApp.",
            body: "Envíanos fotos de tu patio y una idea de lo que buscas, te respondemos rápido, sin compromiso.",
          },
        ]}
      />

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="up">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
              Detrás de Escena
            </p>
            <h2 className="max-w-[640px] font-display text-[clamp(24px,3vw,38px)] font-medium uppercase leading-[1.25] text-ink">
              Así preparamos cada instalación.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <VideoBlock
              src="/videos/crew-loading-plants-1.mp4"
              poster="/img/photos/crew-loading-plants-1-poster.jpg"
              aspect="aspect-[9/16]"
            />
            <VideoBlock
              src="/videos/crew-loading-plants-2.mp4"
              poster="/img/photos/crew-loading-plants-2-poster.jpg"
              aspect="aspect-[9/16]"
            />
          </div>
        </div>
      </section>

      <Testimonial />

      <CtaBand
        heading="Cuéntanos cómo quieres tu jardín. Nos encantaría escucharte."
        body="Escríbenos por WhatsApp con fotos de tu patio, servimos todo Puerto Rico. Vamos, medimos y te presentamos el diseño antes de mover una piedra."
      />
    </main>
  );
}
