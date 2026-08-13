import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function EditorialSplit({
  image,
  imageAlt,
  children,
}: {
  image: string;
  imageAlt: string;
  children: ReactNode;
}) {
  return (
    <section className="grid items-stretch lg:grid-cols-2">
      <div className="relative min-h-[44vh]">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
      <div className="bg-paper px-7 py-[88px] max-md:px-[22px] max-md:py-16 lg:px-[clamp(28px,5vw,96px)]">
        <Reveal direction="fade">{children}</Reveal>
      </div>
    </section>
  );
}

export function ServiceBullet() {
  return <span className="mr-3 inline-block size-[7px] -translate-y-0.5 rotate-45 bg-sage-deep" aria-hidden="true" />;
}
