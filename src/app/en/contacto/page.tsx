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
  title: "Contact Us",
  description:
    "Message us on WhatsApp or call (939) 639-2292 for a free landscaping estimate in Ponce, Puerto Rico. We'll come measure and present the design.",
  alternates: {
    canonical: "/en/contacto",
    languages: { "es-PR": `${SITE_URL}/contacto`, en: `${SITE_URL}/en/contacto` },
  },
  openGraph: {
    title: "Contact | AGAVE Landscaping PR",
    description: "Free estimates via WhatsApp. Garden design and construction in Ponce, Puerto Rico.",
    url: `${SITE_URL}/en/contacto`,
    siteName: "AGAVE Landscaping PR",
    type: "website",
    images: [`${SITE_URL}/img/photos/og-cover.jpg`],
  },
};

export default function ContactoPageEn() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd(`${SITE_URL}/en/contacto`)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", item: `${SITE_URL}/en` },
              { name: "Contact", item: `${SITE_URL}/en/contacto` },
            ])
          ),
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Garden"
        subtitle="The estimate is free. Write to us and we'll set up a visit."
      />

      <section className="py-[92px] max-md:py-16">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-8 max-md:px-[22px] lg:grid-cols-2">
          <Reveal direction="left">
            <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              Tell us how you want your garden. We&apos;d love to hear from you.
            </p>
            <hr className="my-6 w-[75px] border-t-2 border-sage" />
            <p className="text-grey">
              Message us on WhatsApp with photos of your yard, we serve all
              of Puerto Rico. We&apos;ll come measure and show you the design
              before moving a single stone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GhostLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Message Us on WhatsApp
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
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">Info</p>
            <h2 className="mb-6 font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase text-ink">
              Ponce, Puerto Rico
            </h2>
            <p className="text-grey">
              We serve all of Puerto Rico.
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
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">Follow Us</p>
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

      <section className="bg-tan py-[92px] max-md:py-16">
        <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
          <div className="mx-auto mb-12 max-w-[640px] text-center">
            <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
              Request Your Estimate
            </p>
            <h2 className="font-display text-[clamp(28px,3.4vw,42px)] font-semibold uppercase text-ink">
              Tell Us About Your Project
            </h2>
            <p className="mt-3.5 text-[clamp(21px,2.2vw,27px)] leading-[1.45] text-ink">
              The more details you give us, the faster we can show you a real design.
            </p>
          </div>
          <ContactForm locale="en" />
        </div>
      </section>

      <SkimmerGrid
        eyebrow="What to Expect"
        title="From message to visit, that simple."
        items={[
          { title: "We Respond Fast.", body: "Via WhatsApp or phone, usually within a couple of hours." },
          { title: "On-Site Visit and Design.", body: "We measure the real area and show you the design before moving a stone." },
          { title: "No Sales Pressure.", body: "Take your time, no obligation to move forward.", fullWidth: true },
        ]}
      />
    </main>
  );
}
