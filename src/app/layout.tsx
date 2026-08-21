import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Naqib Zuhayr — Software Developer", template: "%s — Naqib Zuhayr" },
  description: "Portfolio of Naqib Zuhayr, an Arizona State University computer science student with experience in software quality assurance and backend development.",
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><Navbar /><main>{children}</main><Footer /></body></html>;
}
