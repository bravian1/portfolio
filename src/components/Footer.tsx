"use client";

import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/bravian1" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/nyatorobravian/" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", url: "https://twitter.com/bravke1" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:nyatorobravian@gmail.com" }
  ];

  return (
    <footer className="pt-24 pb-12">
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 text-center lg:text-left">
        {/* Large CTA Section */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-12">
            Let&apos;s build <br />
            <span className="italic-serif text-foreground/80">something</span> great.
          </h2>
          <Link
            href="mailto:nyatorobravian@gmail.com"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold border-b-4 border-foreground pb-2 transition-all hover:gap-8"
          >
            Start a project
            <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12 border-t border-foreground/10 gap-8">
          <div className="text-sm font-bold uppercase tracking-widest text-foreground/40">
            © {currentYear} Bravian Nyatoro
          </div>

          <div className="flex items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/40 hover:text-foreground transition-colors p-2"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-sm font-bold uppercase tracking-widest text-foreground/40">
            Based in Kisumu, Kenya
          </div>
        </div>
      </div>
    </footer>
  );
}