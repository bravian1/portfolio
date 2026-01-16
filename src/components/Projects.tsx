"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calculator, Mic, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface Project {
    name: string;
    description: string;
    link: string;
    Icon: LucideIcon;
    tags: string[];
    image: string;
}

const projects: readonly Project[] = [
    {
        name: "WebMaker Agency",
        description: "A premium web agency specialized in custom design, SEO, and high-performance applications.",
        link: "https://webmaker-chi.vercel.app",
        Icon: Server,
        tags: ["Agency", "Next.js", "SEO"],
        image: "/images/projects/webmaker.png"
    },
    {
        name: "PassAfrika",
        description: "A secure blockchain ticketing platform ensuring tamper-proof and verifiable event access.",
        link: "https://passafrika.xyz",
        Icon: Mic, // Keeping Mic as a fallback, though maybe Shield/Lock would be better if available, but I'll stick to imported icons or generic.
        tags: ["Blockchain", "Web3", "Security"],
        image: "/images/projects/passafrika.png"
    },
    {
        name: "Medicare Hospital",
        description: "A comprehensive healthcare portal featuring appointment booking and service showcases.",
        link: "https://hospital-portfolio-six.vercel.app",
        Icon: Calculator,
        tags: ["Healthcare", "React", "Tailwind"],
        image: "/images/projects/hospital.png"
    }
];

const cardVariants: Variants = {
    initial: { y: 0 },
    hover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Projects() {
    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
                <div className="space-y-2">
                    <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                        Featured <span className="text-zinc-500">Projects</span>
                    </h2>
                    <p className="text-lg text-zinc-400 font-mono flex items-center gap-2">
                        <span className="text-accent">$</span> showcase --filter=production-ready
                    </p>
                </div>
                <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed border-l-2 border-accent/20 pl-6">
                    A collection of production-grade applications showcasing expertise in
                    system design, full-stack development, and modern web architectures.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.name}
                        variants={cardVariants}
                        initial="initial"
                        whileHover="hover"
                        className="group w-full flex flex-col gap-6"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        {/* Image Container */}
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-lg group-hover:shadow-xl transition-all duration-500">
                            <div className="absolute inset-0 bg-zinc-800/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                            <Image
                                src={project.image}
                                alt={`Screenshot of ${project.name}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                        </a>

                        {/* Content */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start justify-between">
                                <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {project.name}
                                </h3>
                                <div className="px-3 py-1 rounded-full border border-zinc-700 text-zinc-400 text-xs font-mono">
                                    2025
                                </div>
                            </div>

                            <div className="text-accent font-medium text-sm">
                                {project.tags[0]} {/* Main Category */}
                            </div>

                            <p className="text-lg text-zinc-400 leading-relaxed line-clamp-2 max-w-xl">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
