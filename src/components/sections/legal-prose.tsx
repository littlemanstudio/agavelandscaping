import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

export function LegalProse({ children }: { children: ReactNode }) {
  return (
    <section className="py-[68px] max-md:py-[52px]">
      <Reveal direction="fade">
        <div className="mx-auto max-w-[760px] space-y-4 px-8 text-grey max-md:px-[22px] [&_a]:text-ink [&_a]:underline-offset-2 [&_a:hover]:text-sage-deep [&_h2]:mt-9 [&_h2]:font-display [&_h2]:text-[21px] [&_h2]:font-medium [&_h2]:uppercase [&_h2]:tracking-[0.06em] [&_h2]:text-ink [&_h2:first-child]:mt-0">
          {children}
        </div>
      </Reveal>
    </section>
  );
}
