import { Reveal } from "@/components/motion/reveal";

export type SkimmerItem = {
  title: string;
  body: string;
  fullWidth?: boolean;
};

export function SkimmerGrid({
  eyebrow,
  title,
  items,
  tight = false,
}: {
  eyebrow: string;
  title: string;
  items: SkimmerItem[];
  tight?: boolean;
}) {
  return (
    <section className={`bg-tan text-ink ${tight ? "py-[68px] max-md:py-[52px]" : "py-[92px] max-md:py-16"}`}>
      <div className="mx-auto max-w-[980px] px-8 max-md:px-[22px]">
        <Reveal direction="fade">
          <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em] text-ink">{eyebrow}</p>
          <h2 className="mb-9 font-display text-[clamp(24px,3vw,38px)] font-medium uppercase leading-[1.25] tracking-[0.03em]">
            {title}
          </h2>
          <div className="grid grid-cols-1 gap-11 sm:grid-cols-2">
            {items.map((item) => (
              <p key={item.title} className={item.fullWidth ? "sm:col-span-2" : undefined}>
                <strong className="tracking-[0.08em]">{item.title}</strong>
                <br />
                {item.body}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
