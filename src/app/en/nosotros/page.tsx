import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { SkimmerGrid } from "@/components/sections/skimmer-grid";
import { VideoBlock } from "@/components/sections/video-block";
import { Reveal } from "@/components/motion/reveal";
import { Testimonial } from "@/components/sections/testimonial";
import { CtaBand } from "@/components/sections/cta-band";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet AGAVE Landscaping PR: a garden design studio with 20+ years of experience in Ponce, Puerto Rico. We design and build from start to finish.",
  alternates: {
    canonical: "/en/nosotros",
    languages: { "es-PR": `${SITE_URL}/nosotros`, en: `${SITE_URL}/en/nosotros` },
  },
  openGraph: {
    title: "About Us | AGAVE Landscaping PR",
    description:
      "Garden design and construction from start to finish, with 20+ years of experience in Ponce, Puerto Rico.",
    url: `${SITE_URL}/en/nosotros`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function NosotrosPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/nosotros`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "About", item: `${SITE_URL}/en/nosotros` },
            ])
          ),
        }}
      />

      <PageHero eyebrow="About" title="Who We Are" subtitle="From sketch to the last stone." />

      <SplitSection image="/img/photos/founder-portrait.jpg" imageAlt="AGAVE Landscaping PR founder in a freshly installed patio with agaves and succulents">
        <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
          At AGAVE Landscaping PR, we transform spaces through a complete
          landscape design and construction process.
        </p>
        <hr className="my-6 w-[75px] border-t-2 border-sage" />
        <p className="text-grey">
          Every project starts with a clear picture of the space, its
          surroundings, and the client&apos;s needs. From there, we develop
          the garden concept, carefully select the plants, materials, and
          elements that will shape the design, and carry every detail
          through to the build.
        </p>
        <p className="mt-4 text-grey">
          We handle the entire process: conceptual design, plant selection
          and layout, site preparation, installation, and final execution.
        </p>
        <p className="mt-4 text-grey">
          Our approach combines aesthetics, function, and plant knowledge to
          create landscapes that fit naturally into the architecture,
          Puerto Rico&apos;s climate, and the character of each space.
        </p>
        <div className="mt-7">
          <GhostLink href="/en/servicios">Our Services</GhostLink>
        </div>
      </SplitSection>

      <SkimmerGrid
        eyebrow="How We Work"
        title="From first contact to final design."
        items={[
          {
            title: "On-Site Design.",
            body: "We come to your home or business, measure, and present the design before moving a single stone.",
          },
          {
            title: "Estimate via WhatsApp.",
            body: "Send us photos of your yard and an idea of what you're looking for, we respond fast, no commitment.",
          },
        ]}
      />

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="up">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
              Behind the Scenes
            </p>
            <h2 className="max-w-[640px] font-display text-[clamp(24px,3vw,38px)] font-medium uppercase leading-[1.25] text-ink">
              This is how we prep every installation.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <VideoBlock
              src="/videos/crew-loading-plants-1.mp4"
              poster="/img/photos/crew-loading-plants-1-poster.jpg"
              aspect="aspect-[9/16]"
            />
            <VideoBlock
              src="/videos/crew-loading-plants-2.mp4"
              poster="/img/photos/crew-loading-plants-2-poster.jpg"
              aspect="aspect-[9/16]"
            />
          </div>
        </div>
      </section>

      <Testimonial locale="en" />

      <CtaBand
        heading="Tell us how you want your garden. We'd love to hear from you."
        body="Message us on WhatsApp with photos of your yard, we serve all of Puerto Rico. We'll come measure and show you the design before moving a single stone."
        locale="en"
      />
    </main>
  );
}
