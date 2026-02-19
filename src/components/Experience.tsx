"use client";

import { motion } from "framer-motion";

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  summary: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Zone 01",
    position: "Full-stack Developer",
    location: "Kisumu, Kenya",
    duration: "2024 - Present",
    summary: "Leading architecture and development of scalable full-stack solutions.",
    highlights: [
      "Architected and deployed 20+ full-stack applications, boosting development efficiency by 30%.",
      "Optimized API performance by 40% and designed architectures supporting 10x user growth.",
      "Mentored developers and led code reviews to ensure high-quality, maintainable deliverables."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <header className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Experience
        </h2>
      </header>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-24"
          >
            <div className="md:w-1/3">
              <span className="text-lg font-bold text-foreground/40 uppercase tracking-widest">
                {exp.duration}
              </span>
              <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
            </div>

            <div className="md:w-2/3 space-y-6">
              <h4 className="text-3xl md:text-4xl font-bold tracking-tight">
                {exp.position}
              </h4>
              <p className="text-xl text-foreground/60 leading-relaxed max-w-2xl">
                {exp.summary}
              </p>
              <ul className="space-y-4">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg text-foreground/80 leading-relaxed">
                    <span className="text-accent font-bold mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
