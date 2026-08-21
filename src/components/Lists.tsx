import { education } from "@/data/education";
import { experience } from "@/data/experience";

export function ExperienceList() {
  return (
    <div className="border-t border-zinc-950/15 dark:border-white/15">
      {experience.map((item, index) => (
        <article key={item.company} className="group grid gap-4 border-b border-zinc-950/15 py-7 sm:grid-cols-12 sm:gap-6 sm:py-9 dark:border-white/15">
          <div className="flex gap-4 sm:col-span-3"><span className="font-mono text-[0.65rem] text-zinc-400">0{index + 1}</span><p className="font-mono text-[0.65rem] uppercase tracking-wider text-zinc-500">{item.period}</p></div>
          <div className="sm:col-span-3 sm:col-start-5"><h3 className="font-medium tracking-[-0.02em]">{item.role}</h3><p className="mt-1 text-sm text-zinc-500">{item.company}</p></div>
          <p className="text-sm leading-6 text-zinc-600 sm:col-span-4 dark:text-zinc-400">{item.summary}</p>
        </article>
      ))}
    </div>
  );
}

export function EducationList() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {education.map((item, index) => (
        <article key={item.institution} className="group flex min-h-72 flex-col rounded-[1.5rem] border border-zinc-950/12 p-6 transition-colors duration-300 hover:bg-white/60 sm:p-8 dark:border-white/12 dark:hover:bg-white/[0.04]">
          <div className="flex justify-between font-mono text-[0.65rem] uppercase tracking-wider text-zinc-500"><span>0{index + 1}</span><span>{item.period}</span></div>
          <div className="mt-auto pt-14"><h3 className="text-2xl font-medium tracking-[-0.035em]">{item.qualification}</h3><p className="mt-2 text-sm text-zinc-500">{item.institution}</p><p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</p></div>
        </article>
      ))}
    </div>
  );
}
