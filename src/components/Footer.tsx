"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      color: "hover:text-cyan-400 hover:bg-cyan-400/10"
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
      color: "hover:text-teal-400 hover:bg-teal-400/10"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <footer className="relative bg-card/30 border-t border-primary/20 mt-20">
        {/* Floating Shapes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Terminal className="w-5 h-5 text-background" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text font-mono">bravian.dev</h3>
                    <p className="text-xs text-muted-foreground font-mono">System Designer & Full-stack Developer</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-md">
                  Designing scalable systems and crafting robust backend solutions. 
                  Building the future with <span className="text-teal-400 font-mono">Go</span>, 
                  <span className="text-golden font-mono"> Laravel</span>, and modern web technologies.
                </p>
              </div>

              {/* Terminal Status */}
                <div className="bg-card/50 border border-teal-400/20 rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">~/status</span>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="text-green-400">
                      <span className="text-teal-400">$</span> status --check
                    </div>
                    <div className="text-muted-foreground">
                      → Available for hire: <span className="text-green-400">true</span>
                    </div>
                    <div className="text-muted-foreground">
                      → Response time: <span className="text-teal-400">&lt; 24h</span>
                    </div>
                    <div className="text-muted-foreground terminal-cursor">
                      → Ready to design amazing systems
                    </div>
                  </div>
                </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-mono font-semibold text-foreground flex items-center gap-2">
                <Code className="w-4 h-4 text-teal-400" />
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
                    className="block text-muted-foreground hover:text-teal-400 font-mono text-sm transition-colors duration-300 hover:translate-x-1 transform transition-transform"
                  >
                    <span className="text-teal-400 opacity-60">→</span> {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Connect */}
            <div className="space-y-6">
              <h4 className="font-mono font-semibold text-foreground flex items-center gap-2">
                <Globe className="w-4 h-4 text-golden" />
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
                    className={`magnetic-hover w-10 h-10 p-0 border border-teal-400/20 ${social.color} transition-all duration-300 group`}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </Button>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2">
                <p className="font-mono text-sm text-muted-foreground">Let's build something amazing together!</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Coffee className="w-4 h-4 text-golden" />
                  <span className="font-mono">Always ready for a coffee chat</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <span>© {currentYear} Bravian Nyatoro</span>
                <span className="text-teal-400">•</span>
                <span className="flex items-center gap-1">
                  Made with <Heart className="w-3 h-3 text-red-500 animate-pulse" /> and lots of 
                  <Coffee className="w-3 h-3 text-amber-500" />
                </span>
              </div>

              {/* Tech Stack Credit */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <span>Built with</span>
                <div className="flex gap-2">
                  {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs bg-golden/10 border-golden/30">
                      {tech}
                    </Badge>
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
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-golden text-black hover:from-teal-500 hover:to-yellow-500 glow-effect animate-fade-in z-50 group"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
          </Button>
        )}
      </footer>
    </>
  );
}