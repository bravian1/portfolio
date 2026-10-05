"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Volume2, VolumeX } from "lucide-react";
import { setEnabled } from "cuelume";
import { motion, AnimatePresence, useMotionValueEvent, useScroll, useReducedMotion } from "framer-motion";
import { EASE_OUT, EASE_IN_OUT, SPRING_LAYOUT, SPRING_PRESS, TAP_SCALE } from "@/lib/motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tickerVisible, setTickerVisible] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const { scrollY } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-sound-enabled");
    if (saved !== null) {
      setSoundEnabled(saved === "true");
    }
  }, []);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    setEnabled(next);
    localStorage.setItem("portfolio-sound-enabled", String(next));
  };

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
        transition={EASE_IN_OUT}
        className="bg-foreground text-background text-xs font-bold uppercase tracking-widest relative z-[60] overflow-hidden"
      >
        <div className="py-2">
          <Marquee speed={30} play={!reduce} gradient={false}>
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
      <nav className={`transition-all duration-200 relative z-[60] ${isScrolled || isMenuOpen ? "bg-background/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 active:scale-[0.98] motion-reduce:active:scale-100 transition-all duration-150">
            Bravian Nyatoro
          </Link>

          <div className="flex items-center gap-6 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  data-cuelume-navigate=""
                  className="text-sm font-semibold uppercase tracking-wider hover:opacity-60 active:scale-[0.97] motion-reduce:active:scale-100 transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={toggleSound}
                data-cuelume-toggle=""
                title={soundEnabled ? "Mute interaction sounds" : "Unmute interaction sounds"}
                aria-label={soundEnabled ? "Mute interaction sounds" : "Unmute interaction sounds"}
                className="p-2 rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground active:scale-95 transition-all outline-none"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-40" />}
              </button>
            </div>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleSound}
                data-cuelume-toggle=""
                title={soundEnabled ? "Mute interaction sounds" : "Unmute interaction sounds"}
                aria-label={soundEnabled ? "Mute interaction sounds" : "Unmute interaction sounds"}
                className="p-2 rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground active:scale-95 transition-all outline-none"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-40" />}
              </button>

              <div className="relative z-50">
                <AnimatePresence>
                  {!isMenuOpen ? (
                    <motion.button
                      layoutId={reduce ? undefined : "menu-container"}
                      transition={reduce ? { duration: 0 } : SPRING_LAYOUT}
                      key="closed"
                      onClick={() => setIsMenuOpen(true)}
                      whileTap={reduce ? undefined : TAP_SCALE}
                      data-cuelume-open=""
                      className="text-sm font-bold uppercase tracking-wider hover:opacity-60 transition-opacity flex items-center justify-center bg-transparent outline-none relative px-3 py-1.5 -mr-3"
                      style={{ borderRadius: 8 }}
                    >
                      <motion.span layoutId={reduce ? undefined : "menu-text"}>Menu</motion.span>
                    </motion.button>
                  ) : (
                    <motion.div
                      layoutId={reduce ? undefined : "menu-container"}
                      transition={reduce ? { duration: 0 } : SPRING_LAYOUT}
                      key="open"
                      className="absolute top-[-16px] right-[-16px] sm:top-[-24px] sm:right-[-24px] w-[calc(100vw-2rem)] sm:w-[320px] bg-background/95 backdrop-blur-xl border border-foreground/10 shadow-2xl flex flex-col origin-top-right overflow-hidden !z-[100]"
                      style={{ borderRadius: 24 }}
                    >
                      <div className="flex justify-between items-center p-6 border-b border-foreground/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 hidden sm:block">Navigation</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-foreground/40 sm:hidden">Nav</span>
                        <button
                          onClick={() => setIsMenuOpen(false)}
                          data-cuelume-close=""
                          className="text-sm font-bold uppercase tracking-wider hover:opacity-60 active:scale-[0.97] motion-reduce:active:scale-100 transition-all duration-150 outline-none"
                        >
                          <motion.span layoutId={reduce ? undefined : "menu-text"}>Close</motion.span>
                        </button>
                      </div>

                      <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 gap-6">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.label}
                            initial={{ opacity: 0, x: reduce ? 0 : -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={reduce ? { duration: 0.1 } : { ...EASE_OUT, delay: 0.04 + index * 0.03 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              data-cuelume-navigate=""
                              className="text-4xl sm:text-5xl font-bold tracking-tighter hover:italic-serif active:scale-[0.98] motion-reduce:active:scale-100 transition-all duration-150 inline-block"
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={reduce ? { duration: 0.1 } : { ...EASE_OUT, delay: 0.12 }}
                        className="bg-foreground/5 p-6 flex gap-6 text-xs font-bold uppercase tracking-widest text-foreground/60 w-full justify-between sm:justify-start"
                      >
                        <a href="https://github.com/bravian1" target="_blank" rel="noreferrer" data-cuelume-tap="" data-cuelume-emphasis="subtle" className="hover:text-foreground active:scale-[0.97] motion-reduce:active:scale-100 transition-all duration-150">Github</a>
                        <a href="https://www.linkedin.com/in/nyatorobravian/" target="_blank" rel="noreferrer" data-cuelume-tap="" data-cuelume-emphasis="subtle" className="hover:text-foreground active:scale-[0.97] motion-reduce:active:scale-100 transition-all duration-150 -translate-y-0.5 text-foreground/90 font-extrabold">LinkedIn</a>
                        <a href="https://www.tiktok.com/@bravke1" target="_blank" rel="noreferrer" data-cuelume-tap="" data-cuelume-emphasis="subtle" className="hover:text-foreground active:scale-[0.97] motion-reduce:active:scale-100 transition-all duration-150">TikTok</a>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}