import { Container } from "@/components/Container";
import { ExperienceList } from "@/components/Lists";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden py-20 sm:min-h-[calc(100svh-5rem)] sm:py-28">
        <div className="page-grid pointer-events-none absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute -right-40 top-10 size-[32rem] rounded-full bg-emerald-300/15 blur-[100px] dark:bg-emerald-500/10" />
        <Container className="relative">
          <p className="reveal flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-zinc-500"><span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50" /><span className="relative size-2 rounded-full bg-emerald-500" /></span>{profile.availability}</p>
          <h1 className="reveal reveal-delay-1 mt-8 max-w-6xl text-balance text-[clamp(3.5rem,9.2vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.065em]">Naqib Zuhayr <span className="text-zinc-400 dark:text-zinc-600">Computer science student.</span></h1>
          <div className="reveal reveal-delay-2 mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl md:col-span-6 dark:text-zinc-400">{profile.introduction}</p>
            <div className="md:col-span-5 md:col-start-8" />
          </div>
        </Container>
      </section>

      <Section id="about"><SectionHeading eyebrow="01 / About" title="Building practical experience while completing my degree." /><div className="grid md:grid-cols-12"><div className="space-y-6 text-lg leading-8 text-zinc-600 md:col-span-7 md:col-start-5 dark:text-zinc-400">{profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></Section>

      <Section id="experience"><SectionHeading eyebrow="02 / Experience" title="Learning by building with others." /><ExperienceList /></Section>
    </>
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return <section id={id} className="border-t border-zinc-950/10 py-24 sm:py-32 lg:py-40 dark:border-white/10"><Container>{children}</Container></section>;
}
