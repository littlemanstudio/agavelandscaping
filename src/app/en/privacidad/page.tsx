import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { LegalProse } from "@/components/sections/legal-prose";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy & Data Protection Policy",
  description:
    "How AGAVE Landscaping PR collects, uses, and protects your information when you request a garden design estimate anywhere in Puerto Rico.",
  alternates: {
    canonical: "/en/privacidad",
    languages: { "es-PR": `${SITE_URL}/privacidad`, en: `${SITE_URL}/en/privacidad` },
  },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Privacy & Data Protection Policy | AGAVE Landscaping PR",
    url: `${SITE_URL}/en/privacidad`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function PrivacidadPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/privacidad`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Privacy Policy", item: `${SITE_URL}/en/privacidad` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: August 2026." />

      <LegalProse>
        <p>
          At AGAVE Landscaping PR, we respect your privacy. This page
          explains what information we collect and how we use it.
        </p>

        <h2>What We Collect</h2>
        <p>
          When you write to us via WhatsApp, email, or the contact form, we
          receive your name, phone number, email, and any details you share
          about your project, including photos, if you send any.
        </p>

        <h2>How We Use It</h2>
        <p>
          We use this information only to respond to your request, prepare
          your estimate, and coordinate the work. We don&apos;t sell it or
          share it with third parties for marketing purposes.
        </p>

        <h2>Contact Form</h2>
        <p>
          When you submit the form on this page, your information is
          processed on our server solely to coordinate your estimate by
          email. It isn&apos;t stored beyond what&apos;s needed to respond
          to you.
        </p>

        <h2>Project Photos</h2>
        <p>
          With your permission, we may use photos of your finished garden on
          the site or on social media. If you&apos;d rather we didn&apos;t,
          let us know and we&apos;ll leave them out.
        </p>

        <h2>Cookies</h2>
        <p>This site doesn&apos;t use tracking cookies or third-party analytics.</p>

        <h2>Your Rights</h2>
        <p>
          You can ask us at any time to correct or delete your contact
          information, write to us and we&apos;ll take care of it.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>.
        </p>
      </LegalProse>
    </main>
  );
}
