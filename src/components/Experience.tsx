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
import type { LucideIcon } from "lucide-react";

// Remove the Project interface since we're no longer using featured projects
// 1. Define clear types for our consolidated data structure.

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  summary: string;
  achievements: string[];
  primaryTechnologies: string[];
  responsibilities: string[];
}

// 2. Consolidate all information into a single, logical object.
const experienceData: Experience = {
  company: "Zone 01",
  position: "System Designer & Full Stack Developer",
  location: "Kisumu, Kenya",
  duration: "Apr 2024 - Present",
  summary: "Leading system architecture design and full-stack development, optimizing system performance, and collaborating with cross-functional teams to deliver scalable software solutions.",
  achievements: [
    "Boosted development efficiency by 30% by architecting and deploying over 20 full-stack applications.",
    "Improved API response performance by 40%, significantly enhancing frontend responsiveness.",
    "Increased code coverage by 25% through expanded testing, reducing deployment bugs.",
    "Designed scalable system architectures that support 10x user growth without performance degradation."
  ],
  responsibilities: [
    "Design and architect scalable system solutions using modern technologies and best practices",
    "Develop full-stack applications with focus on performance, security, and maintainability",
    "Collaborate with cross-functional teams to define system requirements and technical specifications",
    "Mentor junior developers and lead code reviews to ensure high-quality deliverables",
    "Research and implement new technologies to improve system efficiency and development workflow",
    "Create technical documentation and system design specifications for complex projects"
  ],
  primaryTechnologies: ["System Design", "Golang", "Laravel", "React", "JavaScript", "PHP", "MySQL", "Docker", "Git"]
};

export default function Experience() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="gradient-text">Professional</span>
            <span className="text-foreground"> Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">$</span> history --format=timeline
          </p>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          A showcase of my career progression in system design and development, key achievements, 
          and the technologies that have shaped my expertise in building scalable solutions.
        </p>
      </div>

      {/* 3. A single, comprehensive experience card. */}
      <Card className="bg-card/50 border-primary/20 shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl gradient-text flex items-center gap-3">
                <Briefcase className="w-6 h-6" />
                {experienceData.position}
              </CardTitle>
              <div className="flex items-center gap-2 text-accent font-medium text-lg">
                <Building className="w-5 h-5" />
                {experienceData.company}
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2 sm:mt-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {experienceData.duration}
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {experienceData.location}
              </div>
            </div>
          </div>
          <CardDescription className="text-muted-foreground text-base leading-relaxed pt-2 border-t border-primary/10">
            {experienceData.summary}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Achievements */}
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground flex items-center gap-2 text-lg">
              <Zap className="w-5 h-5 text-teal-400" />
              Key Achievements
            </h3>
            <ul className="space-y-2 pl-2">
              {experienceData.achievements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2 text-lg">
              <CheckCircle className="w-5 h-5 text-teal-400" />
              Key Responsibilities
            </h3>
            <ul className="space-y-2 pl-2">
              {experienceData.responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Primary Technologies */}
          <div className="space-y-3 pt-4 border-t border-primary/10">
            <h3 className="font-semibold text-foreground">Primary Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {experienceData.primaryTechnologies.map((tech) => (
                <Badge key={tech} className="bg-teal-400/10 text-teal-400 border-teal-400/30 font-mono text-sm">
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