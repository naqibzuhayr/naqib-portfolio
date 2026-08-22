import Image from "next/image";
import { Container } from "@/components/Container";
import { ExperienceList } from "@/components/Lists";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-[#0b0b0d] py-16 text-zinc-50 sm:min-h-[calc(100svh-5rem)] sm:py-24 lg:py-28">
        <div className="page-grid pointer-events-none absolute inset-0 opacity-20 [--hairline:rgba(255,255,255,0.07)]" />
        <div className="pointer-events-none absolute -right-32 top-1/2 size-[34rem] -translate-y-1/2 rounded-full bg-white/[0.055] blur-[110px] sm:size-[44rem]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(113,113,122,0.11),transparent_38%)]" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            <div className="lg:col-span-8">
              <p className="reveal flex max-w-2xl items-center gap-3 font-mono text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-zinc-500">
                <span className="size-2 shrink-0 rounded-full bg-emerald-500" />
                {profile.availability}
              </p>
              <h1 className="reveal reveal-delay-1 mt-8 max-w-5xl text-balance text-[clamp(3.5rem,7.4vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.065em]">
                Naqib Zuhayr <span className="text-zinc-500">Computer science student.</span>
              </h1>
              <p className="reveal reveal-delay-2 mt-10 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl lg:mt-12">{profile.introduction}</p>
            </div>

            <div className="reveal reveal-delay-2 flex justify-center lg:col-span-4 lg:justify-end">
              <div className="relative aspect-square w-full max-w-72 rounded-full border border-white/15 p-1.5 shadow-[0_24px_90px_rgba(0,0,0,0.48)] sm:max-w-88 lg:max-w-[27rem]">
                <div className="relative size-full overflow-hidden rounded-full bg-zinc-900">
                  <Image
                    src="/profilepic.JPG"
                    alt="Portrait of Naqib Zuhayr"
                    fill
                    priority
                    sizes="(max-width: 640px) 18rem, (max-width: 1024px) 22rem, 27rem"
                    className="object-cover object-[50%_100%] scale-[1.40]"
                  />
                </div>
              </div>
            </div>
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
