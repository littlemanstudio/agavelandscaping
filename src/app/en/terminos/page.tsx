import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalProse } from "@/components/sections/legal-prose";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms & Conditions of Service",
  description:
    "AGAVE Landscaping PR's terms and conditions: garden design and landscaping services, free estimates, and coverage across Puerto Rico.",
  alternates: {
    canonical: "/en/terminos",
    languages: { "es-PR": `${SITE_URL}/terminos`, en: `${SITE_URL}/en/terminos` },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Terms & Conditions of Service | AGAVE Landscaping PR",
    url: `${SITE_URL}/en/terminos`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function TerminosPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/terminos`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Terms & Conditions", item: `${SITE_URL}/en/terminos` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: August 2026." />

      <LegalProse>
        <p>By using this site or requesting an estimate from AGAVE Landscaping PR, you accept these terms.</p>

        <h2>Services</h2>
        <p>
          We offer garden design and construction, artificial turf, garden
          upgrades, specialized maintenance, and irrigation and lighting
          systems, for residential and commercial clients across Puerto
          Rico. Every estimate is free and does not represent a contract
          until both parties confirm it in writing.
        </p>

        <h2>Estimates and Pricing</h2>
        <p>
          Estimates are based on an on-site visit and the information you
          give us. Final scope, materials, and budget are confirmed before
          any work begins, we don&apos;t move a stone without your approval.
        </p>

        <h2>Contact Form</h2>
        <p>
          When you submit the form on this page, the information is sent to
          our email or WhatsApp to coordinate your estimate. We don&apos;t
          use this data for any other purpose.
        </p>

        <h2>Site Content</h2>
        <p>Photos, text, and design on this site belong to AGAVE Landscaping PR. They may not be reproduced without permission.</p>

        <h2>Changes</h2>
        <p>We may update these terms at any time. The last-updated date appears above.</p>

        <h2>Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalProse>
    </main>
  );
}
