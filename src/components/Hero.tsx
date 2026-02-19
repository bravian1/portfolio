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
                    bring your <span className="italic-serif text-foreground/90">ideas</span> <br />
                    to life.
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
