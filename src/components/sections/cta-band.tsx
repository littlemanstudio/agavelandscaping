"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import type { ReactNode } from "react";
import { GhostLink } from "@/components/ui/ghost-button";
import { AnimatedBorder } from "@/components/ui/animated-border";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function CtaBand({
  heading,
  body,
  showPhoneButton = true,
}: {
  heading: string;
  body: ReactNode;
  showPhoneButton?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 max-md:py-16">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[18%] -bottom-[18%]" aria-hidden="true">
        <Image
          src="/img/photos/sti-commercial-cactus.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
      </motion.div>

      <div className="relative mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
        <div className="max-w-[60%] border-2 border-ink bg-tan/[0.94] p-[56px] text-ink max-md:max-w-full max-md:p-[26px]">
          <p className="text-[clamp(21px,2.2vw,27px)] leading-[1.45]">{heading}</p>
          <hr className="my-6 w-[75px] border-t-2 border-sage" />
          <p className="mb-8">{body}</p>
          <div className="flex flex-wrap gap-4">
            <GhostLink href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" animated>
              Escríbenos por WhatsApp
            </GhostLink>
            {showPhoneButton && (
              <a
                href={`tel:${PHONE_TEL}`}
                className="relative inline-flex items-center border border-ink px-[30px] py-[15px] text-[13px] font-bold uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                <AnimatedBorder />
                {PHONE_DISPLAY}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
