import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
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

      <Testimonial />

      <CtaBand
        heading="Cuéntanos cómo quieres tu jardín. Nos encantaría escucharte."
        body="Escríbenos por WhatsApp con fotos de tu patio, servimos todo Puerto Rico. Vamos, medimos y te presentamos el diseño antes de mover una piedra."
      />
    </main>
  );
}
