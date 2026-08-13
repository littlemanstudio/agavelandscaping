export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-sage pb-[52px] pt-[calc(var(--bar-h)+var(--header-h)+36px)] text-white">
      <div className="mx-auto max-w-[1320px] px-8 max-md:px-[22px]">
        <p className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.28em]">{eyebrow}</p>
        <h1 className="font-display text-[clamp(40px,5.2vw,72px)] font-semibold uppercase leading-[1.04] tracking-[0.015em]">
          {title}
        </h1>
        <p className="mt-4 max-w-[560px] text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
