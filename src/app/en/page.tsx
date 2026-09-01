import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/hero-slider";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { MasonryGallery, type MasonryItem } from "@/components/sections/masonry-gallery";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { Testimonial } from "@/components/sections/testimonial";
import { InstagramGrid } from "@/components/sections/instagram-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL } from "@/lib/constants";
import { businessJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "AGAVE Landscaping PR | Garden Design in Ponce, PR",
  },
  description:
    "AGAVE Landscaping PR: 20+ years designing and building sustainable, tropical gardens in Ponce, PR. Free estimates via WhatsApp, no commitment.",
  alternates: {
    canonical: "/en",
    languages: { "es-PR": SITE_URL, en: `${SITE_URL}/en` },
  },
  openGraph: {
    title: "AGAVE Landscaping PR | Garden Design in Ponce, Puerto Rico",
    description: "Garden design in Ponce, PR, with 20+ years of experience.",
    url: `${SITE_URL}/en`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const homeGallery: MasonryItem[] = [
  { src: "/img/photos/patio-senorial-sign.jpg", alt: "Patio Señorial in Ponce, cactus and agave by the entrance", caption: "Patio Señorial" },
  { src: "/img/photos/tropical-path-ferns.jpg", alt: "Tropical path through ferns, agave, and river rock", caption: "Tropical Harmony" },
  { src: "/img/photos/hero-night-yard.jpg", alt: "Residential installation with nighttime patio lighting", caption: "Nighttime Lighting" },
  { src: "/img/photos/stepping-stone-path.jpg", alt: "Stepping-stone path through golden gravel and cactus", caption: "Stepping-Stone Path" },
  { src: "/img/photos/entrance-88-turf.jpg", alt: "Front yard with synthetic turf and a curved black rock border", caption: "Natural Flow" },
  { src: "/img/photos/sti-commercial-cactus.jpg", alt: "Commercial cactus garden installation", caption: "Commercial Xeriscape" },
];

export default function HomePageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en`)) }}
      />

      <HeroSlider locale="en" />
      <AboutTeaser locale="en" />

      <section className="bg-sage py-[92px] text-white max-md:py-16">
        <div className="mx-auto max-w-[900px] px-8 text-center max-md:px-[22px]">
          <Reveal direction="down">
            <p>
              We work closely with every client to deliver gardens that last
              and are easy to maintain.
            </p>
            <hr className="mx-auto my-6 w-[75px] border-t-2 border-white" />
            <p className="mb-9">A selection of our real projects.</p>
            <GhostLink href="/en/proyectos" variant="light">
              See All Projects
            </GhostLink>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-[1320px] px-8 max-md:px-[22px]">
          <MasonryGallery items={homeGallery} />
        </div>
      </section>

      <EditorialSplit
        image="/img/photos/macro-agave-snake-plant.jpg"
        imageAlt="Agave and snake plant in a light rock bed"
      >
        <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
          Our Services
        </p>
        <h2 className="mb-11 font-display text-[clamp(40px,5.2vw,72px)] font-semibold uppercase leading-[1.04] text-ink">
          It&apos;s Not A Template.
          <br />
          It&apos;s Art.
        </h2>
        <p className="text-ink">
          We don&apos;t just cut grass. We design complete gardens, renovate
          the ones you already have, and install artificial turf, irrigation,
          and lighting. We measure, we design, and we show you the result
          before touching a single stone.
        </p>
        <div className="mt-8">
          <GhostLink href="/en/servicios">See All Services</GhostLink>
        </div>
      </EditorialSplit>

      <Testimonial locale="en" />
      <InstagramGrid locale="en" />

      <div id="contacto">
        <CtaBand
          heading="Tell us how you want your garden. We'd love to hear from you."
          body="Message us on WhatsApp with photos of your yard, we serve all of Puerto Rico. We'll come measure and show you the design before moving a single stone."
          locale="en"
        />
      </div>
    </main>
  );
}
