import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/page-hero";
import { MasonryGallery, type MasonryItem } from "@/components/sections/masonry-gallery";
import { VideoBlock } from "@/components/sections/video-block";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";
import { SITE_URL, SOCIAL } from "@/lib/constants";
import { businessJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Gallery of real AGAVE Landscaping PR projects in Ponce, Puerto Rico: patios, xeriscapes, pathways, and residential and commercial installations.",
  alternates: {
    canonical: "/en/proyectos",
    languages: { "es-PR": `${SITE_URL}/proyectos`, en: `${SITE_URL}/en/proyectos` },
  },
  openGraph: {
    title: "Projects | AGAVE Landscaping PR",
    description: "Real residential and commercial landscaping projects in Ponce, Puerto Rico.",
    url: `${SITE_URL}/en/proyectos`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

const gallery: MasonryItem[] = [
  { src: "/img/photos/patio-senorial-sign.jpg", alt: "Patio Señorial in Ponce, cactus and agave by the entrance", caption: "Patio Señorial" },
  { src: "/img/photos/tropical-path-ferns.jpg", alt: "Tropical path through ferns, agave, and river rock", caption: "Tropical Harmony" },
  { src: "/img/photos/hero-night-yard.jpg", alt: "Residential installation with nighttime patio lighting", caption: "Nighttime Lighting" },
  { src: "/img/photos/stepping-stone-path.jpg", alt: "Stepping-stone path through golden gravel and cactus", caption: "Stepping-Stone Path" },
  { src: "/img/photos/entrance-88-turf.jpg", alt: "Front yard with synthetic turf and a curved black rock border", caption: "Natural Flow" },
  { src: "/img/photos/sti-commercial-cactus.jpg", alt: "Commercial cactus garden installation", caption: "Commercial Xeriscape" },
  { src: "/img/photos/front-yard-daytime.jpg", alt: "Daytime front yard with white gravel", caption: "Daytime Patio" },
  { src: "/img/photos/succulent-planter-bowl.jpg", alt: "Planter bowl with succulents, cacti, and agave", caption: "Succulent Detail" },
  { src: "/img/photos/macro-agave-snake-plant.jpg", alt: "Agave and snake plant in a light rock bed", caption: "Agave Bed" },
  { src: "/img/photos/tropical-garden-palms-1.jpg", alt: "Tropical garden with palms, yellow elephant ear, and river rock", caption: "Tropical Corner" },
  { src: "/img/photos/agave-barrel-cactus-bowl.jpg", alt: "Agave and golden barrel cactus in a concrete planter", caption: "Concrete Composition" },
  { src: "/img/photos/tan-gravel-garden-path.jpg", alt: "Tan gravel path between yellow elephant ear and junipers", caption: "Gravel Pathway" },
];

export default function ProyectosPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/proyectos`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Projects", item: `${SITE_URL}/en/proyectos` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Projects"
        title="Real Work"
        subtitle="A selection of gardens we've designed and built across Puerto Rico."
      />

      <section className="py-[68px] max-md:py-[52px]">
        <div className="mx-auto max-w-[760px] px-8 max-md:px-[22px]">
          <Reveal direction="up">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Real work: every photo is a garden that exists today, somewhere
              in Puerto Rico.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <p className="text-grey">
              Residential patios, xeriscapes, commercial installations, and
              stone pathways, each one designed for its own site. If
              something you see here looks like what you're picturing, write
              to us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink py-[92px] text-white max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="fade">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage">
              Featured Project
            </p>
            <h2 className="mb-4 font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase leading-[1.1]">
              One Garden, Two Moments
            </h2>
            <p className="max-w-[640px] text-white/75">
              The same xeriscape, by day and by night. Volcanic rock, barrel
              cactus, and a lighting system designed so your garden looks
              just as good after sunset.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Reveal direction="left">
              <figure className="relative aspect-[3/4] overflow-hidden bg-white/10">
                <Image
                  src="/img/photos/xerojardin-modern-day.jpg"
                  alt="Modern xeriscape by day, with a golden barrel cactus and volcanic rock"
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  quality={88}
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-ink">
                  Day
                </figcaption>
              </figure>
            </Reveal>
            <Reveal direction="fade" delay={150}>
              <figure className="relative aspect-[3/4] overflow-hidden bg-white/10">
                <Image
                  src="/img/photos/xerojardin-modern-night.jpg"
                  alt="The same xeriscape by night, lit with recessed lighting"
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  quality={88}
                  className="object-cover"
                />
                <figcaption className="absolute left-4 top-4 bg-ink/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  Night
                </figcaption>
              </figure>
            </Reveal>
            <VideoBlock
              src="/videos/xerojardin-walkthrough.mp4"
              poster="/img/photos/xerojardin-walkthrough-poster.jpg"
              caption="Video walkthrough"
              aspect="aspect-[3/4]"
            />
          </div>
        </div>
      </section>

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <MasonryGallery items={gallery} />
        </div>
      </section>

      <section className="bg-tan py-[68px] text-ink max-md:py-[52px]">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <Reveal direction="fade">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45]">
              We post new gardens every week. Follow us on Instagram to see
              them first.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <GhostLink href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer">
              Follow Us
            </GhostLink>
          </Reveal>
        </div>
      </section>

      <CtaBand
        heading="See something you liked? Let's talk about your garden."
        body="Message us on WhatsApp with photos of your yard and an idea of what you're looking for, the estimate is free."
        locale="en"
      />
    </main>
  );
}
