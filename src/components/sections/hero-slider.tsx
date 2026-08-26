"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { UnderlineLink } from "@/components/ui/ghost-button";

const slides = [
  { src: "/img/photos/hero-night-yard.jpg", width: 1600, height: 1600 },
  { src: "/img/photos/front-yard-daytime.jpg", width: 1440, height: 1440 },
  { src: "/img/photos/patio-lounge-pergola.jpg", width: 1440, height: 1078 },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const nextIndex = (active + 1) % slides.length;
    const id = setTimeout(() => {
      setLoaded((prev) => (prev.has(nextIndex) ? prev : new Set(prev).add(nextIndex)));
    }, 3000);
    return () => clearTimeout(id);
  }, [active]);

  return (
    <section className="relative flex h-[88svh] min-h-[560px] items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) =>
          loaded.has(index) ? (
            <Image
              key={slide.src}
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              quality={88}
              className="object-cover transition-opacity duration-[1200ms] ease-in-out"
              style={{ opacity: index === active ? 1 : 0 }}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
            />
          ) : null
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-[760px] px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mb-6"
        >
          <Image
            src="/img/logo/agave-mark.png"
            alt=""
            aria-hidden="true"
            width={494}
            height={378}
            className="mx-auto h-10 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="font-display text-[clamp(32px,5.5vw,56px)] font-medium uppercase tracking-[0.32em]"
        >
          AGAVE Landscaping PR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-9"
        >
          <UnderlineLink href="/contacto" light>
            Solicita tu Consulta
          </UnderlineLink>
        </motion.div>
      </div>
    </section>
  );
}
