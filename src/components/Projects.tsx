"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Calculator, Mic, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, Variants } from "framer-motion"; // Import Variants for strong typing
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
    name: "Sippar",
    description: "A comprehensive platform for workflow automation and financial tracking.",
    link: "https://getsippar.com",
    Icon: Server,
    tags: ["FinTech", "Laravel", "React"],
    image: "/getsippar.png"
  },
  {
    name: "Fuel Calculator",
    description: "An advanced tool for calculating fuel efficiency and planning trips.",
    link: "https://fuel-bravian11048-6tzwyf5o.leapcell.dev/",
    Icon: Calculator,
    tags: ["Utility", "Go", "Public"],
    image: "/fuelcalculator.png"
  },
  {
    name: "VoiceDiary.xyz",
    description: "Transform thoughts into an audio diary with AI-powered insights.",
    link: "https://voicediary.xyz",
    Icon: Mic,
    tags: ["AI/ML", "Base", "React"],
    image: "/voicediary.png"
  }
];

const cardVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } },
};

export default function Projects() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="gradient-text">Featured</span>
            <span className="text-foreground"> Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">$</span> showcase --filter=production-ready
          </p>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          A collection of production-grade applications showcasing expertise in
          system design, full-stack development, and modern web architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={cardVariants}
            initial="initial"
            whileHover="hover"
            className="w-full"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* 2. The Card is now just a container for the Image and the overlay */}
            <Card className="group relative w-full h-full overflow-hidden rounded-xl border-primary/20 hover:border-primary/50 transition-colors duration-300 aspect-[3/4]">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
                className="z-0 transition-transform duration-300"
              />
              {/* 3. The gradient overlay now covers the whole card to create the smooth blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10" />

              {/* Top-right bookmark icon to match the reference */}
              <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 z-20">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>

              {/* 4. Content is anchored to the bottom inside the gradient */}
              <div className="relative flex flex-col justify-end h-full p-6 text-white z-20 space-y-4">
                <h3 className="text-2xl font-bold text-white pr-4">
                  {project.name}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <div key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-mono backdrop-blur-sm">
                      {tag}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block pt-2">
                  <Button className="w-full bg-white text-black hover:bg-white/90 font-bold">
                    Visit Site
                  </Button>
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}