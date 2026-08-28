import { Reveal } from "@/components/motion/reveal";

export function Testimonial() {
  return (
    <section className="py-[92px] max-md:py-16">
      <Reveal direction="fade">
        <div className="mx-auto max-w-[760px] px-8 text-center max-md:px-[22px]">
          <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage-deep">
            Reseñas de Clientes
          </p>
          <hr className="mx-auto my-6 w-[75px] border-t-2 border-sage" />
          <blockquote className="text-[clamp(19px,2vw,23px)] leading-[1.5] text-ink">
            &quot;Desde el primer día que los contacté, me hablaron con
            claridad y honestidad. Vinieron a la casa, midieron, me enseñaron
            su diseño y me explicaron qué iban a hacer, cómo lo hacían y por
            qué, con conocimiento y experiencia.&quot;
          </blockquote>
          <p className="mt-6 text-sm">
            <strong>Rafael Caballero</strong> &middot; Reseña de Facebook, noviembre 2021
          </p>
          <p className="mt-1 text-sm text-grey/80">
            También recomendado por Raquel Rivera y Carlos David Ortiz Malavé.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
