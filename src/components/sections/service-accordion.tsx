"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export type ServiceAccordionItem = {
  title: string;
  body: string;
};

export function ServiceAccordion({ items }: { items: ServiceAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.title}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="flex items-center font-display text-[19px] uppercase tracking-[0.05em] text-ink">
                <span className="mr-3 inline-block size-[7px] shrink-0 rotate-45 bg-sage-deep" aria-hidden="true" />
                {item.title}
              </span>
              <Plus
                className={cn("size-4 shrink-0 text-sage-deep transition-transform duration-300", isOpen && "rotate-45")}
                strokeWidth={2.5}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-[19px] text-grey">{item.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
