"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building,
  Calendar,
  MapPin,
  Zap,
  Briefcase,
  CheckCircle
} from "lucide-react";

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  summary: string;
  highlights: string[];
  primaryTechnologies: string[];
}

const experienceData: Experience = {
  company: "Zone 01",
  position: "Full-stack Developer",
  location: "Kisumu, Kenya",
  duration: "Apr 2024 - Present",
  summary: "Leading architecture and development of scalable full-stack solutions.",
  highlights: [
    "Architected and deployed 20+ full-stack applications, boosting development efficiency by 30%.",
    "Optimized API performance by 40% and designed architectures supporting 10x user growth.",
    "Mentored developers and led code reviews to ensure high-quality, maintainable deliverables."
  ],
  primaryTechnologies: ["System Design", "Golang", "Laravel", "Next.js", "React", "PHP", "MySQL", "Docker", "Git"]
};

export default function Experience() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Professional <span className="text-zinc-500">Journey</span>
          </h2>
          <p className="text-lg text-zinc-400 font-mono flex items-center gap-2">
            <span className="text-accent">$</span> history --format=timeline
          </p>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed border-l-2 border-accent/20 pl-6">
          A showcase of my career progression in system design and development, key achievements,
          and the technologies that have shaped my expertise in building scalable solutions.
        </p>
      </div>

      <Card className="bg-zinc-900/20 border-zinc-800 shadow-xl overflow-hidden hover:border-zinc-700 transition-colors duration-300">
        <CardHeader className="space-y-6 bg-zinc-900/50 p-6 sm:p-8 border-b border-zinc-800/50">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-3">
              <CardTitle className="text-2xl sm:text-3xl text-white font-bold flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-zinc-500" />
                Full-stack Developer
              </CardTitle>
              <div className="flex items-center gap-2 text-accent font-medium text-lg">
                <Building className="w-5 h-5" />
                {experienceData.company}
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-2 text-sm text-zinc-400 font-mono">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                <Calendar className="w-4 h-4" />
                {experienceData.duration}
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
                <MapPin className="w-4 h-4" />
                {experienceData.location}
              </div>
            </div>
          </div>
          <CardDescription className="text-zinc-300 text-base leading-relaxed max-w-4xl">
            {experienceData.summary}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-10 p-6 sm:p-8">
          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-accent" />
              Key Impact
            </h3>
            <ul className="space-y-3">
              {experienceData.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-zinc-400 bg-zinc-900/30 p-3 rounded-lg border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></div>
                  <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary Technologies */}
          <div className="space-y-4 pt-6 border-t border-zinc-800">
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider">Primary Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {experienceData.primaryTechnologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-zinc-900/50 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white transition-colors py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
