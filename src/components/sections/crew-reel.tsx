"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { InViewVideo } from "@/components/ui/in-view-video";
import { cn } from "@/lib/utils";

export type ReelClip = { src: string; poster: string };

export function CrewReel({
  eyebrow,
  title,
  clips,
  prevLabel,
  nextLabel,
  swipeHint,
}: {
  eyebrow: string;
  title: string;
  clips: ReelClip[];
  prevLabel: string;
  nextLabel: string;
  swipeHint: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.querySelector<HTMLElement>("[data-reel-card]");
    const step = (card?.offsetWidth ?? 280) + 20;
    row.scrollBy({ left: direction * step * 2, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-ink py-[92px] max-md:py-16">
      <div className="mx-auto flex max-w-[1320px] items-end justify-between gap-8 px-8 max-md:px-[22px]">
        <Reveal direction="up">
          <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-sage">
            {eyebrow}
          </p>
          <h2 className="max-w-[640px] font-display text-[clamp(24px,3vw,38px)] font-medium uppercase leading-[1.25] text-white">
            {title}
          </h2>
        </Reveal>

        <div className="hidden shrink-0 gap-3 md:flex">
          {[
            { dir: -1 as const, label: prevLabel, Icon: ChevronLeft },
            { dir: 1 as const, label: nextLabel, Icon: ChevronRight },
          ].map(({ dir, label, Icon }) => (
            <button
              key={dir}
              type="button"
              aria-label={label}
              onClick={() => scrollByCard(dir)}
              className="flex size-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-tan hover:bg-tan hover:text-ink"
            >
              <Icon className="size-4" strokeWidth={2.25} />
            </button>
          ))}
        </div>
      </div>

      <div
        ref={rowRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-10 pl-[max(22px,calc((100vw-1320px)/2+32px))] pr-8 [scrollbar-width:none] md:pl-[max(32px,calc((100vw-1320px)/2+32px))] [&::-webkit-scrollbar]:hidden"
      >
        {clips.map((clip, index) => (
          <div
            key={clip.src}
            data-reel-card
            className={cn(
              "w-[clamp(200px,68vw,300px)] shrink-0 snap-start md:w-[clamp(230px,21vw,290px)]",
              index % 2 === 1 && "md:mt-12"
            )}
          >
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/10">
              <InViewVideo {...clip} />
            </div>
          </div>
        ))}
      </div>

      <p className="px-[22px] text-[12px] font-bold uppercase tracking-[0.24em] text-white/45 md:hidden">
        {swipeHint}
      </p>
    </section>
  );
}
