"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT, SPRING_PRESS, TAP_SCALE } from "@/lib/motion";

export default function Hero() {
    const reduce = useReducedMotion();

    return (
        <section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col items-start justify-center pt-32 pb-12 md:pt-20 md:pb-20">
            <div className="w-full">
                <motion.div
                    initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={EASE_OUT}
                    className="space-y-4 mb-4 md:mb-8"
                >
                    <span className="text-sm font-medium tracking-wider uppercase text-foreground/60">
                        Based in Nairobi, Kenya • Available Remotely
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...EASE_OUT, delay: reduce ? 0 : 0.05 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-8 md:mb-12"
                >
                    Fullstack Dev & <br />
                    AI Engineer helping <br />
                    bring your ideas <br />
                    to <span className="relative inline-block">
                        <span className="playful-italic text-foreground/90 relative z-10">life.</span>
                        {/* AI Sparkles - gated behind reduced motion preferences */}
                        <motion.span
                            initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 0.8 : 0 }}
                            animate={
                                reduce
                                    ? { scale: 1, opacity: 0.8, rotate: 0 }
                                    : {
                                        scale: [0.95, 1.05, 0.95],
                                        opacity: [0.7, 1, 0.7],
                                        rotate: [0, 6, -6, 0]
                                    }
                            }
                            transition={
                                reduce
                                    ? { duration: 0.2 }
                                    : {
                                        duration: 2.2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }
                            }
                            className="absolute -top-1 -right-2 text-2xl pointer-events-none select-none"
                        >
                            ✨
                        </motion.span>
                        <motion.span
                            initial={{ scale: reduce ? 1 : 0, opacity: reduce ? 0.7 : 0 }}
                            animate={
                                reduce
                                    ? { scale: 1, opacity: 0.7, rotate: 0 }
                                    : {
                                        scale: [0.9, 1.05, 0.9],
                                        opacity: [0.6, 0.9, 0.6],
                                        rotate: [0, -8, 8, 0]
                                    }
                            }
                            transition={
                                reduce
                                    ? { duration: 0.2 }
                                    : {
                                        duration: 2.6,
                                        delay: 0.4,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        ease: "easeInOut"
                                    }
                            }
                            className="absolute -bottom-4 -left-6 text-xl pointer-events-none select-none"
                        >
                            ✨
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ...EASE_OUT, delay: reduce ? 0 : 0.1 }}
                    className="flex flex-wrap gap-4"
                >
                    <motion.div
                        whileTap={reduce ? undefined : TAP_SCALE}
                        transition={SPRING_PRESS}
                    >
                        <Link href="mailto:nyatorobravian@gmail.com">
                            <Button className="h-12 md:h-14 px-6 md:px-8 text-base bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold transition-all group">
                                Let&apos;s talk about your idea
                                <ArrowUpRight className="w-5 h-5 ml-2 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background elements - very subtle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10 pointer-events-none opacity-50"></div>
        </section>
    );
}
