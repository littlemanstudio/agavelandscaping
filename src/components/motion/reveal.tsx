"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

const OFFSET = 44;
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const offsets = {
  up: { y: OFFSET, x: 0 },
  down: { y: -OFFSET, x: 0 },
  left: { x: -OFFSET, y: 0 },
  right: { x: OFFSET, y: 0 },
  fade: { x: 0, y: 0 },
} as const;

export function Reveal({
  direction = "up",
  delay = 0,
  className,
  children,
}: {
  direction?: keyof typeof offsets;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.8, ease: EASE, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
}
