"use client";

import { useEffect, useRef } from "react";

export function InViewVideo({
  src,
  poster,
  className = "absolute inset-0 size-full object-cover",
}: {
  src: string;
  poster: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let playTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(playTimer);
        if (entry.isIntersecting) {
          // Wait out the scroll gesture before decoding starts, so playback
          // never kicks off on the same frame the video enters view (the
          // scroll-stutter culprit on mobile Safari).
          playTimer = setTimeout(() => void video.play().catch(() => {}), 150);
        } else {
          video.pause();
        }
      },
      { threshold: 0.5, rootMargin: "80px 0px" }
    );
    observer.observe(video);
    return () => {
      clearTimeout(playTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      muted
      loop
      playsInline
      disablePictureInPicture
      disableRemotePlayback
      preload="metadata"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
