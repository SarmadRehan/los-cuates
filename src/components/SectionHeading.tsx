type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, id }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-neon">{eyebrow}</p>
      <h2 id={id} className="glow-pink mt-3 font-sign text-4xl leading-tight text-pink text-balance sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-fog">{intro}</p>}
    </div>
  );
}
