export function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="mb-12 grid gap-6 md:mb-18 md:grid-cols-12 md:gap-8">
      <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500 md:col-span-3">{eyebrow}</p>
      <div className="md:col-span-8 md:col-start-5">
        <h2 className="max-w-4xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl">{title}</h2>
        {intro ? <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">{intro}</p> : null}
      </div>
    </header>
  );
}
