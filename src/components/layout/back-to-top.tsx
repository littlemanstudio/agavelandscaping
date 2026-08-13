"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      aria-label="Volver arriba"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center rounded-full bg-tan text-ink shadow transition-all duration-300 hover:bg-sage-deep hover:text-white",
        visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ChevronUp className="size-4" strokeWidth={2.5} />
    </a>
  );
}
