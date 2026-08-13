import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function SplitSection({
  id,
  image,
  imageAlt,
  children,
}: {
  id?: string;
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-[92px] max-md:py-16">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-8 max-md:px-[22px] lg:grid-cols-[1fr_0.72fr]">
        <Reveal direction="left">{children}</Reveal>

        <Reveal direction="right" delay={300}>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
