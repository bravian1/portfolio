"use client";

import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import { SplitReveal } from "@/components/ui/SplitReveal";
import { useSound } from "@/context/SoundContext";
import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { playCue } = useSound();

  const handleStartProject = async () => {
    playCue("success", { emphasis: "strong" });
    try {
      await navigator.clipboard.writeText("nyatorobravian@gmail.com");
      toast.success("Email copied to clipboard", {
        description: "nyatorobravian@gmail.com — opening mail client...",
      });
    } catch {}
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", url: "https://github.com/bravian1" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", url: "https://www.linkedin.com/in/nyatorobravian/" },
    { icon: <IconBrandTiktok className="w-5 h-5" stroke={2} />, label: "TikTok", url: "https://www.tiktok.com/@bravke1" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", url: "mailto:nyatorobravian@gmail.com" }
  ];

  return (
    <footer id="contact" className="pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center lg:text-left">
        {/* Large CTA Section */}
        <div className="mb-32">
          <SplitReveal
            as="h2"
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-12"
            stagger={80}
          >
            Let&apos;s build <br />
            <span className="italic-serif text-foreground/80">something</span> great.
          </SplitReveal>
          <Link
            href="mailto:nyatorobravian@gmail.com"
            onClick={handleStartProject}
            data-cuelume-tap=""
            data-cuelume-emphasis="strong"
            className="group inline-flex items-center gap-4 text-2xl md:text-3xl font-bold border-b-4 border-foreground pb-2 transition-all duration-150 hover:gap-8 active:scale-[0.98] motion-reduce:active:scale-100 motion-reduce:hover:gap-4"
          >
            Start a project
            <ArrowUpRight className="w-8 h-8 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
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
                data-cuelume-tap=""
                data-cuelume-emphasis="subtle"
                className="text-foreground/40 hover:text-foreground active:scale-90 motion-reduce:active:scale-100 transition-all duration-150 p-2"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-sm font-bold uppercase tracking-widest text-foreground/40">
            Based in Nairobi, Kenya • Available Remotely
          </div>
        </div>
      </div>
    </footer>
  );
}