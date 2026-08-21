import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects by Naqib Zuhayr.",
};

export default function Projects() {
  return (
    <section className="flex min-h-[calc(100svh-5rem)] items-center py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal font-mono text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500">Projects</p>
          <h1 className="reveal reveal-delay-1 mt-8 text-balance text-5xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl">No personal projects for now.</h1>
          <p className="reveal reveal-delay-2 mx-auto mt-7 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">I&apos;ll add projects here as I build and publish work that I&apos;m ready to share.</p>
          <Link href="/" className="reveal reveal-delay-2 mt-10 inline-flex items-center gap-2 border-b border-zinc-400 pb-1 text-sm font-medium">Return home <span aria-hidden="true">→</span></Link>
        </div>
      </Container>
    </section>
  );
}
