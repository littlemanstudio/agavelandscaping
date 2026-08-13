import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

export function AnnouncementBar() {
  return (
    <div
      data-announcement-bar
      className="fixed inset-x-0 top-0 z-[60] flex h-[var(--bar-h)] items-center justify-center bg-sage px-4 text-center text-white"
    >
      <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[11px] font-bold uppercase tracking-[0.18em]">
        Estimados Gratis por WhatsApp&ensp;|&ensp;Ponce, Puerto Rico
        &middot; 20+ Años de Experiencia&ensp;|&ensp;
        <a href={`tel:${PHONE_TEL}`} className="underline-offset-2 hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
