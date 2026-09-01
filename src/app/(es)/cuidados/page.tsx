import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
import { SplitSection } from "@/components/sections/split-section";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cuidado y Mantenimiento de Jardines",
  description:
    "Cómo pensamos el mantenimiento de tu jardín en AGAVE Landscaping PR: diseño de bajo mantenimiento, riego inteligente y estimados gratis en Ponce, PR. Escríbenos.",
  alternates: {
    canonical: "/cuidados",
    languages: { "es-PR": `${SITE_URL}/cuidados`, en: `${SITE_URL}/en/cuidados` },
  },
  openGraph: {
    title: "Cuidados | AGAVE Landscaping PR",
    description: "Diseño de bajo mantenimiento y riego inteligente para jardines en el clima de Ponce, Puerto Rico.",
    url: `${SITE_URL}/cuidados`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function CuidadosPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/cuidados`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Cuidados", item: `${SITE_URL}/cuidados` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Cuidados"
        title="Cuidado y Mantenimiento"
        subtitle="Así pensamos el mantenimiento antes de diseñar tu jardín."
      />

      <SkimmerGrid
        eyebrow="Lo Esencial"
        title="Cuatro cosas que más importan."
        items={[
          { title: "Diseñamos y Construimos.", body: "Seis servicios, del diseño a la instalación." },
          { title: "Estimado por WhatsApp.", body: "Fotos de tu patio, respuesta rápida, sin compromiso." },
          { title: "Bajo Mantenimiento por Diseño.", body: "Grama, agaves y suculentas resistentes al calor y la sequía." },
          { title: "Riego a tu Medida.", body: "Ajustado al jardín real, para que no gastes agua de más." },
        ]}
      />

      <SplitSection image="/img/photos/macro-agave-snake-plant.jpg" imageAlt="Agave y sansevieria en un cantero de roca clara">
        <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
          El mejor mantenimiento empieza en el diseño, no después.
        </p>
        <hr className="my-6 w-[75px] border-t-2 border-sage" />
        <p className="text-grey">
          Cada jardín está pensado para el clima de Puerto Rico desde el
          primer boceto: materiales y plantas que necesitan menos agua, menos
          poda y menos reemplazo. Ofrecemos visitas de mantenimiento mensuales
          o trimestrales, sin contratos forzosos.
        </p>
        <div className="mt-7">
          <GhostLink href="/servicios">Ver Servicios de Mantenimiento</GhostLink>
        </div>
      </SplitSection>

      <CtaBand
        heading="¿Tienes preguntas sobre el mantenimiento de tu jardín?"
        body="Escríbenos por WhatsApp y te contamos qué necesita tu patio, sin compromiso."
      />
    </main>
  );
}
