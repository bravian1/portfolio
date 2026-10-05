"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { EASE_OUT, SPRING_PRESS, TAP_SCALE } from "@/lib/motion";

interface Project {
    name: string;
    description: string;
    link: string;
    category: string;
    year: string;
    image: string;
}

const projects: readonly Project[] = [
    {
        name: "SOS Real Estate",
        description: "Verified property marketplace and brokerage across East Africa. Brokering land and luxury homes end-to-end with verified title deeds and transparent ownership pathways.",
        link: "https://sosrealestates.com",
        category: "PropTech Platform",
        year: "2024",
        image: "/images/projects/sosrealestates.png"
    },
    {
        name: "WebMaker Agency",
        description: "A premium web agency specialized in custom design, SEO, and high-performance applications. Built with a focus on conversions and modern aesthetics.",
        link: "https://webmaker-chi.vercel.app",
        category: "Creative Agency",
        year: "2024",
        image: "/images/projects/webmaker.png"
    },
    {
        name: "PassAfrika",
        description: "A secure blockchain ticketing platform ensuring tamper-proof and verifiable event access. Revolutionizing event security in Africa.",
        link: "https://passafrika.xyz",
        category: "Web3 Platform",
        year: "2024",
        image: "/images/projects/passafrika.png"
    },
    {
        name: "Medicare Hospital",
        description: "A comprehensive healthcare portal featuring appointment booking and service showcases. Bridging the gap between patients and care.",
        link: "https://hospital-portfolio-six.vercel.app",
        category: "Health Tech",
        year: "2023",
        image: "/images/projects/hospital.png"
    }
];

export default function Projects() {
    const reduce = useReducedMotion();

    return (
        <section id="projects" className="pt-12 pb-24 md:pt-24 md:pb-32">
            <header className="mb-12 md:mb-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Selected Works
                </h2>
            </header>

            <div className="space-y-32">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{
                            opacity: 0,
                            y: reduce ? 0 : 12,
                            filter: reduce ? "none" : "blur(4px)"
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={EASE_OUT}
                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground/40">
                                    <span>{project.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-foreground/20"></span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
                                    {project.name}
                                </h3>
                            </div>

                            <p className="text-xl text-foreground/60 leading-relaxed max-w-xl">
                                {project.description}
                            </p>

                            <div className="pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-lg font-bold group active:scale-[0.98] motion-reduce:active:scale-100 transition-all duration-150"
                                >
                                    <span className="relative">
                                        View Case Study
                                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent transition-transform duration-200 origin-left scale-x-0 group-hover:scale-x-100 motion-reduce:transition-none"></span>
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 transition-transform duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" />
                                </a>
                            </div>
                        </div>

                        {/* Image Container */}
                        <div className="flex-1 w-full">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-muted group shadow-2xl active:scale-[0.99] motion-reduce:active:scale-100 transition-transform duration-150"
                            >
                                <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-transparent transition-colors duration-200" />
                                <Image
                                    src={project.image}
                                    alt={`Screenshot of ${project.name}`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                                />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
