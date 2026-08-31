import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { GhostLink } from "@/components/ui/ghost-button";

export function AboutTeaser() {
  return (
    <section id="intro" className="py-[92px] max-md:py-16">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-8 max-md:px-[22px] lg:grid-cols-[1fr_0.72fr]">
        <Reveal direction="left">
          <p className="text-[clamp(24px,2.6vw,32px)] leading-[1.4] text-ink">
            Nos especializamos en diseño y desarrollo paisajista de jardines
            sostenibles y tropicales.
          </p>
          <hr className="my-6 w-[75px] border-t-2 border-sage" />
          <p className="text-grey">
            Diseñamos y construimos jardines completos para residencias y
            comercios en todo Puerto Rico, con roca volcánica, grava, grama
            natural y sintética, agaves y suculentas que aguantan nuestro
            clima.
          </p>
          <div className="mt-7">
            <GhostLink href="/nosotros">Conócenos</GhostLink>
          </div>
        </Reveal>

        <Reveal direction="right" delay={300}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/img/photos/founder-portrait.jpg"
              alt="Fundador de AGAVE Landscaping PR en un patio recién instalado con agaves y suculentas"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              quality={88}
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
