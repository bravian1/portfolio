"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Terminal,
  Code,
  Coffee,
  ArrowUp,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/bravian1",
      color: "hover:text-white hover:bg-white/10"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bravian-nyatoro-0576021b0/",
      color: "hover:text-blue-400 hover:bg-blue-400/10"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      url: "https://twitter.com/bravke1",
      color: "hover:text-sky-400 hover:bg-sky-400/10"
    },
    {
      icon: (
        <Image
          src="/tiktok.svg"
          alt="TikTok"
          width={20}
          height={20}
          className="w-5 h-5"
        />
      ),
      label: "TikTok",
      url: "https://www.tiktok.com/@brav0016",
      color: "hover:text-pink-400 hover:bg-pink-400/10"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:bravian@example.com",
      color: "hover:text-accent hover:bg-accent/10"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" }
  ];

  return (
    <>
      <footer className="relative bg-zinc-950 border-t border-zinc-900 mt-20">
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono tracking-tight">bravian.dev</h3>
                    <p className="text-xs text-zinc-500 font-mono">System Designer & Full-stack Developer</p>
                  </div>
                </div>

                <p className="text-zinc-400 leading-relaxed max-w-md font-light">
                  Designing scalable systems and crafting robust solutions.
                  Building the future with <span className="text-white font-medium">Go</span>,
                  <span className="text-white font-medium"> Laravel</span>, and modern technologies.
                </p>
              </div>

              {/* Terminal Status */}
              <div className="bg-black border border-zinc-800 rounded-lg p-5 font-mono text-sm shadow-sm">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-zinc-900">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-zinc-700 rounded-full"></div>
                  </div>
                  <span className="text-zinc-600 text-xs ml-auto">status check</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="text-zinc-300">
                    <span className="text-accent">$</span> status --check
                  </div>
                  <div className="text-zinc-500 pl-2">
                    Available for hire: <span className="text-emerald-500">true</span>
                  </div>
                  <div className="text-zinc-500 pl-2">
                    Response time: <span className="text-zinc-300">&lt; 24h</span>
                  </div>
                  <div className="text-zinc-500 pl-2 flex items-center gap-1">
                    <span className="animate-pulse w-1.5 h-3 bg-accent block"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-mono font-semibold text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-zinc-500" />
                Navigation
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => {
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-zinc-500 hover:text-white font-mono text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <span className="text-accent opacity-0 hover:opacity-100 transition-opacity mr-2">/</span> {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h4 className="font-mono font-semibold text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-zinc-500" />
                Connect
              </h4>

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(social.url, '_blank')}
                    className={`w-10 h-10 p-0 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <p className="font-mono text-sm text-zinc-500">Let&apos;s build something amazing.</p>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Coffee className="w-4 h-4 text-zinc-600" />
                  <span className="font-mono text-xs">Always ready to chat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-zinc-900">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">

              {/* Copyright */}
              <div className="flex items-center gap-2 text-xs text-zinc-600 font-mono">
                <span>© {currentYear} Bravian Nyatoro</span>
                <span className="text-zinc-800">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-900/50" />
                </span>
              </div>

              {/* Tech Stack Credit */}
              <div className="flex items-center gap-3 text-xs text-zinc-600 font-mono">
                <span>Built with</span>
                <div className="flex gap-2">
                  {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-zinc-900 rounded border border-zinc-800/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white text-black hover:bg-zinc-200 shadow-xl transition-all duration-500 hover:-translate-y-1 z-50"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </footer>
    </>
  );
}