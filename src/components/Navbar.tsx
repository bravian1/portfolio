"use client";

import { useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tickerVisible, setTickerVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    setTickerVisible(latest <= 20);
  });

  const navLinks = [
    { href: "#projects", label: "Works" },
    { href: "#about", label: "About" },
    { href: "mailto:nyatorobravian@gmail.com", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Ticker Bar */}
      <motion.div
        initial={false}
        animate={{
          height: tickerVisible ? "auto" : 0,
          opacity: tickerVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-foreground text-background text-xs font-bold uppercase tracking-widest relative z-[60] overflow-hidden"
      >
        <div className="py-2">
          <Marquee speed={30} gradient={false}>
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
      </motion.div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 relative z-[60] ${isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
            Bravian Nyatoro
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-wider hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="relative z-50 md:hidden">
              <AnimatePresence>
                {!isMenuOpen ? (
                  <motion.button
                    layoutId="menu-container"
                    key="closed"
                    onClick={() => setIsMenuOpen(true)}
                    className="text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity flex items-center justify-center bg-transparent outline-none relative px-3 py-1.5 -mr-3"
                    style={{ borderRadius: 8 }}
                  >
                    <motion.span layoutId="menu-text">Menu</motion.span>
                  </motion.button>
                ) : (
                  <motion.div
                    layoutId="menu-container"
                    key="open"
                    className="absolute top-[-16px] right-[-16px] sm:top-[-24px] sm:right-[-24px] w-[calc(100vw-2rem)] sm:w-[320px] bg-background/95 backdrop-blur-xl border border-foreground/10 shadow-2xl flex flex-col origin-top-right overflow-hidden !z-[100]"
                    style={{ borderRadius: 24 }}
                  >
                    <div className="flex justify-between items-center p-6 border-b border-foreground/5">
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 hidden sm:block">Navigation</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 sm:hidden">Nav</span>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity outline-none"
                      >
                        <motion.span layoutId="menu-text">Close</motion.span>
                      </button>
                    </div>

                    <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 gap-6">
                      {navLinks.map((link, index) => (
                        <motion.div
                          key={link.label}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl sm:text-5xl font-bold tracking-tighter hover:italic-serif transition-all"
                          >
                            {link.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="bg-foreground/5 p-6 flex gap-6 text-xs font-bold uppercase tracking-widest text-foreground/60 w-full justify-between sm:justify-start"
                    >
                      <a href="https://github.com/bravian1" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Github</a>
                      <a href="https://linkedin.com/in/bravian-nyatoro-0576021b0/" target="_blank" rel="noreferrer" className="hover:text-foreground transition-all -translate-y-0.5 text-foreground/90 font-extrabold">LinkedIn</a>
                      <a href="https://twitter.com/bravke1" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Twitter</a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}