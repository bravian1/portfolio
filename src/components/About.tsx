"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about-me" className="py-24 border-t border-foreground/5">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[500px] overflow-hidden rounded-full lg:rounded-[2.5rem] border-4 border-accent/20 lg:border-none shadow-2xl">
                        <Image
                            src="/me.jpg"
                            alt="Bravian Nyatoro"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>

                    {/* Decorative element for desktop */}
                    <div className="hidden lg:block absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                    <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
                </motion.div>

                {/* Text Section */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <header>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
                        >
                            A little about <span className="italic-serif text-foreground/80">me.</span>
                        </motion.h2>
                    </header>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                            I’ve spent the last 4 years obsessed with the idea that code is essentially modern-day <span className="playful-italic ">magic.</span>
                        </p>

                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            As a <span className="text-foreground font-bold">Fullstack Developer</span>, I’m driven by the thrill of turning an idea into something that actually works and lives on a screen. My path took a massive leap forward at <span className="text-foreground font-bold">Zone 01</span>, where I really sharpened my craft and learned how to build systems that scale.
                        </p>

                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Lately, I’ve leaned into <span className="text-foreground font-bold">AI integrations</span>, focusing on how large-scale models can be engineered into robust products. It’s about using AI as a technical lever to solve complex problems that traditional code can’t always reach. By architecting these intelligent engines into the stack, I’m able to build software that feels surprisingly intuitive and powerful—bringing a legitimate sense of magic to the user through smart engineering.
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                            <span className="px-6 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-bold uppercase tracking-widest">
                                4+ Years Exp
                            </span>
                            <span className="px-6 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-bold uppercase tracking-widest text-accent">
                                AI Integrated
                            </span>
                            <span className="px-6 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-bold uppercase tracking-widest">
                                Zone 01 Alumni
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
