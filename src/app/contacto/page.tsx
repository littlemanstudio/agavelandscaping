import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, SOCIAL, WHATSAPP_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Escríbenos por WhatsApp o llámanos al (939) 639-2292 para un estimado gratis de paisajismo en Ponce, Puerto Rico. Vamos, medimos y presentamos el diseño.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | AGAVE Landscaping",
    description: "Estimados gratis por WhatsApp. Diseño y construcción de jardines en Ponce, Puerto Rico.",
    url: `${SITE_URL}/contacto`,
    siteName: "AGAVE Landscaping",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function ContactoPage() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/contacto`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Inicio", item: `${SITE_URL}/` },
              { name: "Contacto", item: `${SITE_URL}/contacto` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Contacto"
        title="Hablemos de tu Jardín"
        subtitle="El estimado es gratis. Escríbenos y coordinamos una visita."
      />

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-8 max-md:px-[22px] lg:grid-cols-2">
          <Reveal direction="left">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Cuéntanos cómo quieres tu jardín. Nos encantaría escucharte.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <p className="text-grey">
              Escríbenos por WhatsApp con fotos de tu patio, servimos todo
              Puerto Rico. Vamos, medimos y te presentamos el diseño antes de
              mover una piedra.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GhostLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Escríbenos por WhatsApp
              </GhostLink>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center border border-ink px-[30px] py-[15px] text-[13px] font-bold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>

          <Reveal direction="right" delay={300}>
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">Información</p>
            <h2 className="mb-6 font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase text-ink">
              Ponce, Puerto Rico
            </h2>
            <p className="text-grey">
              Servimos todo Puerto Rico.
              <br />
              <a href={`mailto:${EMAIL}`} className="hover:text-sage-deep">
                {EMAIL}
              </a>
              <br />
              <a href={`tel:${PHONE_TEL}`} className="hover:text-sage-deep">
                {PHONE_DISPLAY}
              </a>
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">Síguenos</p>
            <div className="flex gap-[18px]">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ink hover:text-sage-deep">
                <InstagramIcon className="size-[21px]" />
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ink hover:text-sage-deep">
                <FacebookIcon className="size-[21px]" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SkimmerGrid
        eyebrow="Qué Esperar"
        title="Del mensaje a la visita, así de simple."
        items={[
          { title: "Te Respondemos Rápido.", body: "Por WhatsApp o teléfono, normalmente en un par de horas." },
          { title: "Visita y Diseño en Sitio.", body: "Medimos el área real y te presentamos el diseño antes de mover una piedra." },
          { title: "Sin Presión de Venta.", body: "Te tomas tu tiempo, sin compromiso de continuar.", fullWidth: true },
        ]}
      />

      <section className="bg-tan py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
              Solicita tu Estimado
            </p>
            <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase text-ink">
              Cuéntanos de tu Proyecto
            </h2>
            <p className="mt-3.5 text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Mientras más detalles nos des, más rápido te presentamos un diseño real.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
