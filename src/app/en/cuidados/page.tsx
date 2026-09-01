import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
import { SplitSection } from "@/components/sections/split-section";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Garden Care & Maintenance",
  description:
    "How we think about garden maintenance at AGAVE Landscaping PR: low-maintenance design, smart irrigation, and free estimates in Ponce, PR. Write to us.",
  alternates: {
    canonical: "/en/cuidados",
    languages: { "es-PR": `${SITE_URL}/cuidados`, en: `${SITE_URL}/en/cuidados` },
  },
  openGraph: {
    title: "Care | AGAVE Landscaping PR",
    description: "Low-maintenance design and smart irrigation for gardens in Ponce, Puerto Rico's climate.",
    url: `${SITE_URL}/en/cuidados`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function CuidadosPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/cuidados`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Care", item: `${SITE_URL}/en/cuidados` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Care"
        title="Care & Maintenance"
        subtitle="This is how we think about maintenance before we even design your garden."
      />

      <SkimmerGrid
        eyebrow="The Essentials"
        title="Four things that matter most."
        items={[
          { title: "We Design and Build.", body: "Six services, from design to installation." },
          { title: "Estimate via WhatsApp.", body: "Photos of your yard, fast response, no commitment." },
          { title: "Low Maintenance by Design.", body: "Turf, agaves, and succulents built to handle heat and drought." },
          { title: "Irrigation Sized to Your Garden.", body: "Tuned to the real garden, so you're not wasting water." },
        ]}
      />

      <SplitSection image="/img/photos/macro-agave-snake-plant.jpg" imageAlt="Agave and snake plant in a light rock bed">
        <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
          The best maintenance starts in the design, not after.
        </p>
        <hr className="my-6 w-[75px] border-t-2 border-sage" />
        <p className="text-grey">
          Every garden is planned for Puerto Rico's climate from the first
          sketch: materials and plants that need less water, less pruning,
          and less replacing. We offer monthly or quarterly maintenance
          visits, no forced contracts.
        </p>
        <div className="mt-7">
          <GhostLink href="/en/servicios">See Maintenance Services</GhostLink>
        </div>
      </SplitSection>

      <CtaBand
        heading="Have questions about maintaining your garden?"
        body="Message us on WhatsApp and we'll tell you what your yard needs, no commitment."
        locale="en"
      />
    </main>
  );
}
