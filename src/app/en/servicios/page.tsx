import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { ServiceAccordion } from "@/components/sections/service-accordion";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six garden design and landscaping services in Ponce, PR: garden design, artificial turf, upgrades, specialized maintenance, irrigation, and lighting. Free estimate.",
  alternates: {
    canonical: "/en/servicios",
    languages: { "es-PR": `${SITE_URL}/servicios`, en: `${SITE_URL}/en/servicios` },
  },
  openGraph: {
    title: "Services | AGAVE Landscaping PR",
    description: "Garden design, artificial turf, upgrades, maintenance, irrigation, and lighting in Ponce, PR.",
    url: `${SITE_URL}/en/servicios`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const services = [
  {
    title: "Garden Design",
    body: "This is what we do most. We visit, measure the site, and design a complete garden built around your sun, your soil, and how you use the space, we don't repeat the same layout on every property. Volcanic rock, gravel, turf, and the plants that hold up to Puerto Rico's climate, all installed by the same team that designed it.",
  },
  {
    title: "Artificial Turf",
    body: "High-density synthetic turf that looks green all twelve months of the year, no matter how much it rains or doesn't. We prep the base properly before installing, which is what actually decides whether artificial turf lasts ten years or looks bad in two. Ideal if you're tired of mowing every week.",
  },
  {
    title: "Garden Upgrade",
    body: "Not every garden needs to start from zero. If you already have turf, plants, or stone that still work, we build on that: swap out what isn't working, add fresh gravel, lighting, or the structure it's missing. It's the option when the garden isn't bad, it just got old.",
  },
  {
    title: "Specialized Garden Maintenance",
    body: "A well-designed garden also needs someone to look after it. We handle pruning, fertilizing, and checking irrigation and lighting on the schedule your garden actually needs, not a generic contract. The goal is for it to look like the day we handed it over.",
  },
  {
    title: "Irrigation System",
    body: "Automatic irrigation designed by zone, because an agave and a lawn don't need the same water or the same frequency. Once installed, your garden waters itself, early morning or at night, without you having to remember. And if you travel for two weeks, the garden keeps its routine without you.",
  },
  {
    title: "Solar/Electric Lighting System",
    body: "A garden that's beautiful by day and dark at night is only enjoyed half the time. We install solar or electric lights placed to highlight your plants and paths, not to light things up like a parking lot. As a bonus, a well-lit patio looks cared for and discourages anyone who shouldn't be there.",
  },
];

export default function ServiciosPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/servicios`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Services", item: `${SITE_URL}/en/servicios` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="Services" title="Our Services" subtitle="Six services, from design to installation." />

      <EditorialSplit image="/img/photos/macro-agave-snake-plant.jpg" imageAlt="Agave and snake plant in a light rock bed">
        <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
          From Sketch to Installation
        </p>
        <h2 className="mb-11 font-display text-[clamp(40px,5.2vw,72px)] font-semibold uppercase leading-[1.04] text-ink">
          It&apos;s Not A Template.
          <br />
          It&apos;s Art.
        </h2>
        <p className="mb-8 text-ink">
          Every service is contracted separately or combined. We don&apos;t
          work off templates: every estimate starts with a visit, not a
          catalog. Tap a service to see what it&apos;s about.
        </p>
        <ServiceAccordion items={services} />
        <div className="mt-9">
          <GhostLink href="/en/contacto">Get Your Free Estimate</GhostLink>
        </div>
      </EditorialSplit>

      <CtaBand
        heading="Tell us how you want your garden. We'd love to hear from you."
        body="Message us on WhatsApp with photos of your yard, we serve all of Puerto Rico. We'll come measure and show you the design before moving a single stone."
        locale="en"
      />
    </main>
  );
}
