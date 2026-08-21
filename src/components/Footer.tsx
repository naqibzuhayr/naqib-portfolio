import { socialLinks } from "@/data/social";
import { Container } from "./Container";

const contactDetails = {
  Email: { value: (href: string) => href.replace("mailto:", ""), icon: EmailIcon },
  GitHub: { value: (href: string) => `@${href.split("/").filter(Boolean).at(-1)}`, icon: GitHubIcon },
  LinkedIn: { value: (href: string) => href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), icon: LinkedInIcon },
} as const;

export function Footer() {
  return (
    <footer id="contact" className="overflow-hidden bg-zinc-950 py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-10 md:grid-cols-12">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-zinc-500 md:col-span-3">03 / Get in touch</p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="max-w-5xl text-balance text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Let&apos;s connect.</h2>
            <div className="mt-12 border-t border-white/10">
              {socialLinks.map((link) => {
                const details = contactDetails[link.label as keyof typeof contactDetails];
                if (!details) return null;
                const Icon = details.icon;
                const external = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-white/10 py-6 transition-[padding,color,background-color] duration-300 hover:bg-white/[0.035] hover:px-4 sm:gap-6"
                  >
                    <span className="grid size-11 place-items-center rounded-full border border-white/15 text-zinc-300 transition-colors duration-300 group-hover:border-white/35 group-hover:text-white"><Icon /></span>
                    <span>
                      <span className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">{link.label}</span>
                      <span className="mt-1 block break-all text-base text-zinc-200 sm:text-lg">{details.value(link.href)}</span>
                    </span>
                    <span className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" aria-hidden="true">↗</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-24 border-t border-white/10 pt-6 text-sm text-zinc-500">
          <p>© 2026 Naqib Zuhayr</p>
        </div>
      </Container>
    </footer>
  );
}

function EmailIcon() {
  return <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.97a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5.3 7.3A2.3 2.3 0 1 0 5.3 2.7a2.3 2.3 0 0 0 0 4.6ZM3.3 21h4V9h-4v12Zm6.5-12h3.8v1.64h.05c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07V21h-3.96v-5.63c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9.8V9Z" /></svg>;
}
