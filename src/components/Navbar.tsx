"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";

const links = [{ href: "/#about", label: "About" }, { href: "/projects", label: "Projects" }, { href: "/#experience", label: "Experience" }];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-950/10 bg-[#f5f5f0]/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0c0e]/90">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="group flex items-center gap-3 font-medium tracking-[-0.02em]" aria-label="Naqib Zuhayr, home">
          <span className="grid size-8 place-items-center rounded-full bg-zinc-950 font-mono text-[0.65rem] text-white transition-transform duration-300 group-hover:-rotate-6 dark:bg-zinc-50 dark:text-zinc-950">NZ</span>
          <span className="hidden sm:inline">Naqib Zuhayr</span>
        </Link>
        <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" className="rounded-full border border-zinc-950/15 px-4 py-2 text-sm md:hidden dark:border-white/15">{open ? "Close" : "Menu"}</button>
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = link.href === "/projects" && pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} className={`relative py-2 transition-colors ${active ? "text-zinc-950 dark:text-white" : "text-zinc-500 hover:text-zinc-950 dark:hover:text-white"}`}>{link.label}{active ? <span className="absolute inset-x-0 -bottom-0.5 h-px bg-current" /> : null}</Link>;
          })}
          <a href="/Naqib-Zuhayr-Resume.pdf" download className="relative py-2 text-zinc-500 transition-colors hover:text-zinc-950 dark:hover:text-white">Resume <span aria-hidden="true">↓</span></a>
          <Link href="/#contact" className="rounded-full bg-zinc-950 px-5 py-2.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 dark:bg-zinc-50 dark:text-zinc-950">Let&apos;s talk <span aria-hidden="true">↗</span></Link>
        </nav>
      </Container>
      <div className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <nav id="mobile-navigation" className="overflow-hidden" aria-label="Mobile navigation">
          <div className="border-t border-zinc-950/10 px-5 py-5 dark:border-white/10">
            {links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-zinc-950/10 py-4 text-xl tracking-tight dark:border-white/10"><span>{link.label}</span><span className="font-mono text-xs text-zinc-500">0{index + 1}</span></Link>)}
            <a href="/NaqibZuhayrResume-SWE.pdf" download onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-zinc-950/10 py-4 text-xl tracking-tight dark:border-white/10"><span>Resume</span><span aria-hidden="true">↓</span></a>
            <Link href="/#contact" onClick={() => setOpen(false)} className="mt-5 block rounded-full bg-zinc-950 px-5 py-3 text-center text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950">Let&apos;s talk</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
