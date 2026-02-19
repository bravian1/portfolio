"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#projects", label: "Works" },
    { href: "#about", label: "About" },
    { href: "mailto:nyatorobravian@gmail.com", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Ticker Bar */}
      <div className="bg-foreground text-background py-2 text-xs font-bold uppercase tracking-widest relative z-[60]">
        <Marquee speed={40} gradient={false}>
          <span className="mx-8">Now accepting projects</span>
          <span className="mx-8">Available for hire</span>
          <span className="mx-8">Now accepting projects</span>
          <span className="mx-8">Available for hire</span>
          <span className="mx-8">Now accepting projects</span>
          <span className="mx-8">Available for hire</span>
          <span className="mx-8">Now accepting projects</span>
          <span className="mx-8">Available for hire</span>
        </Marquee>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 relative z-[60] ${isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            Bravian Nyatoro
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity z-50"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-background z-[55] flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl md:text-7xl font-bold tracking-tighter hover:italic-serif transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 flex gap-8 text-sm font-bold uppercase tracking-widest text-foreground/40"
            >
              <a href="https://github.com/bravian1" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Github</a>
              <a href="https://linkedin.com/in/bravian-nyatoro-0576021b0/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://twitter.com/bravke1" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}