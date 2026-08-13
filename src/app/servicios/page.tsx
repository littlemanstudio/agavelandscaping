import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EditorialSplit, ServiceBullet } from "@/components/sections/editorial-split";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Seis servicios de diseño y paisajismo en Ponce, PR: jardín, grama artificial, upgrade, mantenimiento especializado, riego e iluminación. Estimado gratis.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | AGAVE Landscaping",
    description: "Diseño de jardines, grama artificial, upgrades, mantenimiento, riego e iluminación en Ponce, PR.",
    url: `${SITE_URL}/servicios`,
    siteName: "AGAVE Landscaping",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const services = [
  {
    title: "Jardín",
    body: "Diseñamos tu jardín completo y lo construimos, de boceto a instalación. Es nuestro servicio insignia: medimos, diseñamos, presentamos y construimos.",
  },
  {
    title: "Grama Artificial",
    body: "Instalación de grama sintética de alta densidad, verde todo el año, sin corte ni riego.",
  },
  {
    title: "Upgrade de Jardín",
    body: "Renovamos jardines existentes: nueva grava, plantas, iluminación y estructura, sin empezar de cero.",
  },
  {
    title: "Mantenimiento Especializado de Jardín",
    body: "Cuidado regular de plantas, grama y sistemas para que tu jardín se mantenga como el primer día.",
  },
  {
    title: "Sistema de Riego",
    body: "Instalación de riego automático para que tu jardín reciba agua sin que tengas que pensarlo, incluso de viaje.",
  },
  {
    title: "Sistema de Iluminación Solar/Eléctrico",
    body: "Iluminación de patio solar o eléctrica que resalta tu jardín de noche y le suma seguridad a tu propiedad.",
  },
];

export default function ServiciosPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/servicios`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Servicios", item: `${SITE_URL}/servicios` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Servicios" title="Nuestros Servicios" subtitle="Seis servicios, del diseño a la instalación." />

      <EditorialSplit image="/img/photos/macro-agave-snake-plant.jpg" imageAlt="Agave y sansevieria en un cantero de roca clara">
        <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
          De Boceto a Instalación
        </p>
        <h2 className="mb-11 font-display text-[clamp(40px,5.2vw,72px)] font-semibold uppercase leading-[1.04] text-ink">
          Más Allá De
          <br />
          Cortar La Grama
        </h2>
        <p className="text-ink">
          Cada servicio se contrata por separado o combinado. No trabajamos
          con plantillas: cada estimado empieza con una visita, no con un
          catálogo.
        </p>
        {services.map((service) => (
          <div key={service.title}>
            <h3 className="mt-8 font-display text-[21px] font-medium uppercase tracking-[0.06em] text-ink first:mt-0">
              <ServiceBullet />
              {service.title}
            </h3>
            <p className="mt-2 text-ink">{service.body}</p>
          </div>
        ))}
        <div className="mt-9">
          <GhostLink href="/contacto">Pide tu Estimado Gratis</GhostLink>
        </div>
      </EditorialSplit>

      <CtaBand
        heading="Cuéntanos cómo quieres tu jardín. Nos encantaría escucharte."
        body="Escríbenos por WhatsApp con fotos de tu patio, servimos todo Puerto Rico. Vamos, medimos y te presentamos el diseño antes de mover una piedra."
      />
    </main>
  );
}
