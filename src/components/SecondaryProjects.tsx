"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

interface SecondaryProject {
    title: string;
    description: string;
    url: string;
    category: string;
    image?: string;
    color: string;
}

const secondaryProjects: SecondaryProject[] = [
    {
        title: "Bet Agent",
        description: "AI-powered sports betting analysis and automation system.",
        url: "https://github.com/bravian1/bet-agent",
        category: "AI & Automation",
        color: "bg-blue-500/10",
    },
    {
        title: "Textblitz",
        description: "High-performance text processing and analysis tool for developers.",
        url: "https://github.com/bravian1/Textblitz",
        category: "Developer Tools",
        color: "bg-emerald-500/10",
    },
    {
        title: "Gemini CLI Server",
        description: "A robust local server for interacting with Gemini AI models via CLI.",
        url: "https://github.com/bravian1/gemini_cli_server",
        category: "AI Infrastructure",
        color: "bg-purple-500/10",
    },

    {
        title: "Sippar",
        description: "A powerful platform to manage organizational petty cash and optimize approval workflows with ease.",
        url: "https://getsippar.com",
        category: "Fintech",
        image: "/getsippar.png",
        color: "bg-emerald-500/10",
    },
];

export default function SecondaryProjects() {
    return (
        <section className="py-24 border-t border-foreground/5">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-16">
                <div className="lg:w-1/3">
                    <h2 className="text-4xl font-bold tracking-tight">Need more?</h2>
                </div>
                <div className="lg:w-2/3">
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Check my recent works <br />
                        from <span className="italic-serif text-foreground/80">GitHub.</span>
                    </h3>
                </div>
            </div>

            <div className="relative">
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        AutoScroll({
                            speed: 1,
                            stopOnInteraction: false,
                            stopOnMouseEnter: true,
                        })
                    ]}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 md:-ml-8">
                        {secondaryProjects.map((project, index) => (
                            <CarouselItem key={index} className="pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3">
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-full group bg-foreground/[0.02] rounded-[2rem] p-6 border border-foreground/5 hover:bg-foreground/[0.04] transition-all"
                                    >
                                        <div className={`aspect-[16/10] rounded-2xl ${project.color} flex items-center justify-center mb-8 overflow-hidden relative shadow-sm group-hover:shadow-md transition-shadow`}>
                                            {project.image ? (
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                            ) : (
                                                <Github className="w-12 h-12 text-foreground/10 group-hover:scale-110 transition-transform duration-500" />
                                            )}
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30">
                                                    {project.category}
                                                </span>
                                                <ArrowUpRight className="w-4 h-4 text-foreground/20 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                            <h4 className="text-2xl font-bold tracking-tight">
                                                {project.title}
                                            </h4>
                                            <p className="text-sm text-foreground/50 leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
}
