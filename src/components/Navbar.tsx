"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Terminal, Code2 } from "lucide-react";


const navItems = [
  { href: "#about", label: "About", icon: "01" },
  { href: "#projects", label: "Projects", icon: "02" },
  { href: "#experience", label: "Experience", icon: "03" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(Number.isNaN(scrolled) ? 0 : Math.min(scrolled, 100));

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-background/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
        : "bg-transparent"
        }`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-105">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full border-2 border-background"></div>
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-white group-hover:text-accent transition-colors">bravian.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="p-1.5 bg-zinc-900/50 rounded-full border border-white/5 backdrop-blur-md">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeSection === item.href.substring(1)
                      ? "text-black bg-white shadow-lg"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle - Hidden essentially as we are forcing dark mode feel, but kept for logic */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full border border-white/5 bg-zinc-900/50 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>

              {/* Resume Button */}
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex border-white/10 bg-transparent text-white hover:bg-white hover:text-black font-medium transition-all duration-300"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Résumé
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full border border-white/5 bg-zinc-900/50 hover:bg-white/10"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-white" />
                ) : (
                  <Menu className="w-4 h-4 text-white" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-spring ${isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-background border-b border-white/10`}>
          <div className="container mx-auto px-6 py-6 transition-transform duration-500">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-medium text-lg transition-all duration-300 ${activeSection === item.href.substring(1)
                    ? "text-black bg-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                >
                  <span className="text-xs font-mono opacity-50 w-6 uppercase tracking-wider">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}

              {/* Mobile Resume Button */}
              <Button
                className="w-full mt-4 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 py-6 text-lg"
              >
                <Code2 className="w-5 h-5 mr-2" />
                Download Résumé
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Simplified Progress Indicator - Clean Gold Line */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60]">
        <div
          className="h-full bg-accent shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all duration-100 ease-out"
          style={{
            width: `${scrollProgress}%`
          }}
        ></div>
      </div>

      {/* Scroll Position Indicator - Minimalist Dots */}
      <div className="scroll-indicator hidden xl:flex flex-col gap-4 fixed right-8 top-1/2 -translate-y-1/2 z-40">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => handleNavClick(item.href)}
            className="group relative flex items-center justify-end"
          >
            <span className={`absolute right-6 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap`}>
              {item.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-500 ${activeSection === item.href.substring(1)
              ? "bg-accent scale-125 ring-2 ring-accent/30"
              : "bg-zinc-700 hover:bg-zinc-500"
              }`} />
          </button>
        ))}
      </div>
    </>
  );
}