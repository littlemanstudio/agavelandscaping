import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalProse } from "@/components/sections/legal-prose";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio",
  description:
    "Conoce los términos y condiciones de AGAVE Landscaping: servicios de diseño y paisajismo, estimados gratis y cobertura en toda Puerto Rico.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Términos y Condiciones de Servicio | AGAVE Landscaping",
    url: `${SITE_URL}/terminos`,
    siteName: "AGAVE Landscaping",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function TerminosPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/terminos`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Términos y Condiciones", item: `${SITE_URL}/terminos` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Legal" title="Términos y Condiciones" subtitle="Última actualización: agosto de 2026." />

      <LegalProse>
        <p>Al usar este sitio o solicitar un estimado con AGAVE Landscaping aceptas estos términos.</p>

        <h2>Servicios</h2>
        <p>
          Ofrecemos diseño y construcción de jardines, grama artificial,
          upgrades de jardín, mantenimiento especializado, sistemas de riego
          e iluminación, para clientes residenciales y comerciales en todo
          Puerto Rico. Todo estimado es gratuito y no representa un contrato
          hasta que ambas partes lo confirmen por escrito.
        </p>

        <h2>Estimados y precios</h2>
        <p>
          Los estimados se basan en la visita al lugar y la información que
          nos das. El alcance final, materiales y presupuesto se confirman
          antes de iniciar cualquier trabajo, no movemos una piedra sin tu
          aprobación.
        </p>

        <h2>Formulario de contacto</h2>
        <p>
          Al enviar el formulario de esta página, la información se envía a
          nuestro correo o WhatsApp para coordinar tu estimado. No usamos
          estos datos para ningún otro propósito.
        </p>

        <h2>Contenido del sitio</h2>
        <p>Fotos, textos y diseño de este sitio pertenecen a AGAVE Landscaping. No se pueden reproducir sin permiso.</p>

        <h2>Cambios</h2>
        <p>Podemos actualizar estos términos en cualquier momento. La fecha de la última actualización aparece arriba.</p>

        <h2>Contacto</h2>
        <p>
          Preguntas sobre estos términos:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> o <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalProse>
    </main>
  );
}
