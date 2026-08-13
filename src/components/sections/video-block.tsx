import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function VideoBlock({
  src,
  poster,
  caption,
  aspect = "aspect-video",
  revealClassName,
}: {
  src: string;
  poster: string;
  caption?: string;
  aspect?: string;
  revealClassName?: string;
}) {
  return (
    <Reveal direction="up" className={revealClassName}>
      <figure className={cn("relative overflow-hidden bg-ink", aspect)}>
        <video
          className="absolute inset-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
        {caption && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm text-white">
            {caption}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
