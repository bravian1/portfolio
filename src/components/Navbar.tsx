"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Terminal, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { href: "#about", label: "About", icon: "01" },
  { href: "#projects", label: "Projects", icon: "02" },
  { href: "#skills", label: "Skills", icon: "03" },
  { href: "#experience", label: "Experience", icon: "04" },
  { href: "#contact", label: "Contact", icon: "05" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-teal-400/20 shadow-lg" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-golden rounded-lg flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-background" />
                </div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              </div>
              <span className="font-mono font-bold text-lg gradient-text">bravian.dev</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative group flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-teal-400 bg-teal-400/10 border border-teal-400/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-xs text-teal-400 opacity-60">{item.icon}</span>
                  <span className="text-reveal">{item.label}</span>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg bg-teal-400/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="magnetic-hover relative w-10 h-10 rounded-full border border-teal-400/20 bg-card/50 hover:bg-teal-400/10"
              >
                {isDark ? (
                  <Sun className="w-4 h-4 text-teal-400" />
                ) : (
                  <Moon className="w-4 h-4 text-teal-400" />
                )}
              </Button>

              {/* Resume Button */}
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex magnetic-hover border-magenta/30 text-magenta hover:bg-magenta/10 font-mono"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Résumé
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-full border border-teal-400/20 bg-card/50"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 text-teal-400" />
                ) : (
                  <Menu className="w-4 h-4 text-teal-400" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-background/95 backdrop-blur-md border-b border-teal-400/20`}>
          <div className="container mx-auto px-6 lg:px-12 xl:px-16 py-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-left transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-teal-400 bg-teal-400/10 border border-teal-400/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                  }`}
                >
                  <span className="text-xs text-teal-400 opacity-60 w-6">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Mobile Resume Button */}
              <Button 
                variant="outline" 
                className="w-full border-magenta/30 text-magenta hover:bg-magenta/10 font-mono"
              >
                <Code2 className="w-4 h-4 mr-2" />
                Download Résumé
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-golden transition-all duration-300"
          style={{ 
            width: typeof window !== 'undefined' ? `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` : '0%'
          }}
        ></div>
      </div>

      {/* Scroll Position Indicator */}
      <div className="scroll-indicator hidden xl:block">
        <div className="space-y-2">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`group relative block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "bg-teal-400 scale-125"
                  : "bg-muted-foreground/30 hover:bg-teal-400/50"
              }`}
            >
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge variant="outline" className="bg-card/90 border-teal-400/30 text-xs font-mono whitespace-nowrap">
                  {item.label}
                </Badge>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}