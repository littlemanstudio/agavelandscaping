import { Reveal } from "@/components/motion/reveal";
import type { Locale } from "@/lib/i18n";

const copy = {
  es: {
    eyebrow: "Reseñas de Clientes",
    quote:
      '"Desde el primer día que los contacté, me hablaron con claridad y honestidad. Vinieron a la casa, midieron, me enseñaron su diseño y me explicaron qué iban a hacer, cómo lo hacían y por qué, con conocimiento y experiencia."',
    source: "Reseña de Facebook, noviembre 2021",
    also: "También recomendado por Raquel Rivera y Carlos David Ortiz Malavé.",
  },
  en: {
    eyebrow: "Client Reviews",
    quote:
      '"From the first day I contacted them, they spoke with clarity and honesty. They came to the house, measured, showed me their design, and explained what they were going to do, how they’d do it, and why, with real knowledge and experience."',
    source: "Facebook review, November 2021 · translated from Spanish",
    also: "Also recommended by Raquel Rivera and Carlos David Ortiz Malavé.",
  },
} as const;

export function Testimonial({ locale = "es" }: { locale?: Locale }) {
  const t = copy[locale];

  return (
    <section className="py-[92px] max-md:py-16">
      <Reveal direction="fade">
        <div className="mx-auto max-w-[760px] px-8 text-center max-md:px-[22px]">
          <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">{t.eyebrow}</p>
          <hr className="mx-auto my-6 w-[75px] border-t-2 border-sage" />
          <blockquote className="text-[clamp(19px,2vw,23px)] leading-[1.5] text-ink">{t.quote}</blockquote>
          <p className="mt-6 text-sm">
            <strong>Rafael Caballero</strong> &middot; {t.source}
          </p>
          <p className="mt-1 text-sm text-grey/80">{t.also}</p>
        </div>
      </Reveal>
    </section>
  );
}
