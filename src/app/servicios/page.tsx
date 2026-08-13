import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { ServiceAccordion } from "@/components/sections/service-accordion";
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
    body: "Este es el que hacemos más. Te visitamos, medimos el terreno y diseñamos un jardín completo pensado para tu sol, tu suelo y cómo usas el espacio, no repetimos el mismo plano en cada casa. Roca volcánica, grava, grama y las plantas que aguantan el clima de Puerto Rico, todo instalado por el mismo equipo que lo diseñó.",
  },
  {
    title: "Grama Artificial",
    body: "Grama sintética de alta densidad que se ve verde los doce meses del año, sin importar cuánto llueva o deje de llover. Preparamos bien la base antes de instalar, que es lo que realmente decide si una grama artificial dura diez años o se ve mal en dos. Ideal si estás cansado de cortar césped cada semana.",
  },
  {
    title: "Upgrade de Jardín",
    body: "No todo jardín necesita empezar de cero. Si ya tienes grama, plantas o piedra que sirven, trabajamos con eso: cambiamos lo que no funciona, sumamos grava nueva, iluminación o la estructura que le falta. Es la opción cuando el jardín no está mal, solo se quedó viejo.",
  },
  {
    title: "Mantenimiento Especializado de Jardín",
    body: "Un jardín bien diseñado también necesita quien lo cuide. Nos encargamos de podar, fertilizar y revisar el riego y la iluminación con la frecuencia que tu jardín realmente necesita, no con un contrato genérico. La meta es que se vea como el día que lo entregamos.",
  },
  {
    title: "Sistema de Riego",
    body: "Riego automático diseñado por zonas, porque un agave y una grama no necesitan la misma agua ni la misma frecuencia. Una vez instalado, tu jardín se riega solo, temprano en la mañana o de noche, sin que tengas que acordarte. Y si te vas de viaje dos semanas, el jardín sigue su rutina sin ti.",
  },
  {
    title: "Sistema de Iluminación Solar/Eléctrico",
    body: "Un jardín bonito de día y apagado de noche solo se disfruta la mitad del tiempo. Instalamos luces solares o eléctricas colocadas para resaltar tus plantas y caminos, no para iluminar como estacionamiento. De paso, un patio bien iluminado se ve cuidado y disuade a quien no debería estar ahí.",
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
        <p className="mb-8 text-ink">
          Cada servicio se contrata por separado o combinado. No trabajamos
          con plantillas: cada estimado empieza con una visita, no con un
          catálogo. Toca un servicio para ver de qué se trata.
        </p>
        <ServiceAccordion items={services} />
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
