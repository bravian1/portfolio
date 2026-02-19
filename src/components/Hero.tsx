"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col items-start justify-center pt-32 pb-12 md:pt-20 md:pb-20">
            <div className="container mx-auto px-6 lg:px-12 xl:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 mb-4 md:mb-8"
                >
                    <span className="text-sm font-medium tracking-wider uppercase text-foreground/60">
                        Based in Kisumu, Kenya
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-8 md:mb-12"
                >
                    Fullstack Dev & <br />
                    AI Engineer helping <br />
                    bring your ideas <br />
                    to <span className="relative inline-block">
                        <span className="italic-serif text-foreground/90 relative z-10">life.</span>
                        {/* AI Sparkles */}
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
                            transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute -top-4 -right-2 text-accent pointer-events-none"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                            </svg>
                        </motion.span>
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: [0, 1, 0.8], opacity: [0, 1, 0.6] }}
                            transition={{ duration: 0.6, delay: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
                            className="absolute -bottom-2 -left-4 text-accent/60 pointer-events-none scale-75"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                            </svg>
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap gap-4"
                >
                    <Link href="mailto:nyatorobravian@gmail.com">
                        <Button className="h-12 md:h-14 px-6 md:px-8 text-base bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold transition-all group">
                            Let&apos;s talk about your idea
                            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Background elements - very subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
        </section>
    );
}
