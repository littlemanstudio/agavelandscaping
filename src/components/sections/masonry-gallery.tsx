import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export type MasonryItem = {
  src: string;
  alt: string;
  caption: string;
};

export function MasonryGallery({ items }: { items: MasonryItem[] }) {
  return (
    <Reveal direction="up">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <figure key={item.src} className="group relative aspect-[4/5] overflow-hidden bg-tan/40">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 347px"
              loading="lazy"
              quality={88}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/65 via-black/10 to-transparent p-5 opacity-0 transition-opacity duration-350 group-hover:opacity-100 group-focus-within:opacity-100">
              <span className="translate-y-2 font-display text-[17px] uppercase tracking-[0.08em] text-white transition-transform duration-350 group-hover:translate-y-0">
                {item.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}
