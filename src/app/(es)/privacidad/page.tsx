import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalProse } from "@/components/sections/legal-prose";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Política de Privacidad y Protección de Datos",
  description:
    "Cómo AGAVE Landscaping PR recopila, usa y protege tu información al solicitar un estimado de diseño de jardines en toda Puerto Rico.",
  alternates: {
    canonical: "/privacidad",
    languages: { "es-PR": `${SITE_URL}/privacidad`, en: `${SITE_URL}/en/privacidad` },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Política de Privacidad y Protección de Datos | AGAVE Landscaping PR",
    url: `${SITE_URL}/privacidad`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function PrivacidadPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/privacidad`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Política de Privacidad", item: `${SITE_URL}/privacidad` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Legal" title="Política de Privacidad" subtitle="Última actualización: agosto de 2026." />

      <LegalProse>
        <p>
          En AGAVE Landscaping PR respetamos tu privacidad. Esta página explica
          qué información recopilamos y cómo la usamos.
        </p>

        <h2>Qué recopilamos</h2>
        <p>
          Cuando nos escribes por WhatsApp, correo o el formulario de
          contacto, recibimos tu nombre, teléfono, email y los detalles que
          nos compartas sobre tu proyecto, incluyendo fotos, si las envías.
        </p>

        <h2>Cómo la usamos</h2>
        <p>
          Usamos esta información únicamente para responder tu solicitud,
          preparar tu estimado y coordinar el trabajo. No la vendemos ni la
          compartimos con terceros para fines de mercadeo.
        </p>

        <h2>Formulario de contacto</h2>
        <p>
          Al enviar el formulario de esta página, tu información se procesa
          en nuestro servidor únicamente para coordinar tu estimado por
          correo. No queda almacenada más allá de lo necesario para
          responderte.
        </p>

        <h2>Fotos de proyectos</h2>
        <p>
          Con tu permiso, podemos usar fotos de tu jardín terminado en el
          sitio o en redes sociales. Si prefieres que no las usemos, dínoslo
          y las excluimos.
        </p>

        <h2>Cookies</h2>
        <p>Este sitio no usa cookies de rastreo ni analítica de terceros.</p>

        <h2>Tus derechos</h2>
        <p>
          Puedes pedirnos en cualquier momento que corrijamos o eliminemos tu
          información de contacto, escríbenos y lo hacemos.
        </p>

        <h2>Contacto</h2>
        <p>
          Preguntas sobre esta política:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> o <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalProse>
    </main>
  );
}
