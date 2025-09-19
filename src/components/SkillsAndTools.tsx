"use client";

import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code, Database, Server, Globe, Terminal, GitBranch,
  Layers, Zap, Cpu, ChevronDown, ChevronUp, Monitor, LucideIcon
} from "lucide-react";

// 1. Define strong types for our data structures.
type Category = keyof typeof CATEGORY_DETAILS;
type SkillCategory = Exclude<Category, "All">;

interface Skill {
  name: string;
  category: SkillCategory;
  Icon: LucideIcon; // Use the exported LucideIcon type for type safety.
}

interface CategoryDetail {
  Icon: LucideIcon;
}

interface TechStat {
  label: string;
  value: string | number;
  Icon: LucideIcon;
}


// 2. Centralized data configuration with a readonly type for immutability.
const SKILLS_CONFIG: readonly Skill[] = [
  { name: "Go", category: "Languages", Icon: Code },
  { name: "PHP", category: "Languages", Icon: Code },
  { name: "JavaScript", category: "Languages", Icon: Code },
  { name: "TypeScript", category: "Languages", Icon: Code },
  { name: "SQL", category: "Languages", Icon: Database },
  { name: "HTML/CSS", category: "Languages", Icon: Globe },
  { name: "Laravel", category: "Frameworks", Icon: Server },
  { name: "React", category: "Frameworks", Icon: Globe },
  { name: "Next.js", category: "Frameworks", Icon: Globe },
  { name: "Tailwind CSS", category: "Frameworks", Icon: Globe },
  { name: "Gin (Go)", category: "Frameworks", Icon: Server },
  { name: "PostgreSQL", category: "Databases", Icon: Database },
  { name: "MySQL", category: "Databases", Icon: Database },
  { name: "Redis", category: "Databases", Icon: Database },
  { name: "SQLite", category: "Databases", Icon: Database },
  { name: "Docker", category: "DevOps & Tools", Icon: Layers },
  { name: "Git", category: "DevOps & Tools", Icon: GitBranch },
  { name: "Linux", category: "DevOps & Tools", Icon: Terminal },
  { name: "Nginx", category: "DevOps & Tools", Icon: Server },
  { name: "CI/CD", category: "DevOps & Tools", Icon: Zap },
  { name: "AWS", category: "DevOps & Tools", Icon: Monitor },
  { name: "REST APIs", category: "APIs & Architecture", Icon: Globe },
  { name: "GraphQL", category: "APIs & Architecture", Icon: Code },
  { name: "Microservices", category: "APIs & Architecture", Icon: Layers },
  { name: "MVC Pattern", category: "APIs & Architecture", Icon: Layers },
];

// 3. Category details are typed as a Record mapping Category keys to CategoryDetail objects.
const CATEGORY_DETAILS: Record<string, CategoryDetail> = {
  "All": { Icon: Cpu },
  "Languages": { Icon: Code },
  "Frameworks": { Icon: Layers },
  "Databases": { Icon: Database },
  "DevOps & Tools": { Icon: Terminal },
  "APIs & Architecture": { Icon: Globe },
};

const CATEGORIES = Object.keys(CATEGORY_DETAILS) as Category[];

export default function SkillsAndTools() {
  // 4. State hooks are typed for better control and predictability.
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<"compact" | "grid">("compact");

  // 5. useMemo will infer the correct return types from the typed inputs.
  const groupedTools = useMemo(() => {
    const filtered = selectedCategory === "All"
      ? SKILLS_CONFIG
      : SKILLS_CONFIG.filter(tool => tool.category === selectedCategory);

    return filtered.reduce((acc, tool) => {
      // TypeScript knows `acc` is Record<string, Skill[]>
      (acc[tool.category] = acc[tool.category] || []).push(tool);
      return acc;
    }, {} as Record<string, Skill[]>);
  }, [selectedCategory]);

  const techStats: readonly TechStat[] = useMemo(() => {
    const counts = SKILLS_CONFIG.reduce((acc, { category }) => {
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {} as Record<SkillCategory, number>);

    return [
      { label: "Languages", value: counts["Languages"], Icon: Code },
      { label: "Frameworks", value: counts["Frameworks"], Icon: Layers },
      { label: "Databases", value: counts["Databases"], Icon: Database },
      { label: "Tools & DevOps", value: `${counts["DevOps & Tools"]}+`, Icon: Terminal },
    ];
  }, []);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <div id="skills-section" className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="gradient-text">Tools</span>
            <span className="text-foreground"> & Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">$</span> tech --stack=production
          </p>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          The technologies and tools I use to build robust, scalable applications.
        </p>
      </div>


      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => {
          const { Icon } = CATEGORY_DETAILS[category];
          return (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`magnetic-hover font-mono text-xs flex items-center gap-2 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground glow-effect"
                  : "border-primary/20 text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              <Icon className="w-3 h-3" />
              {category}
            </Button>
          );
        })}
      </div>

      {/* Tools Display */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="flex gap-1 bg-muted/20 rounded-lg p-1">
            <Button size="sm" variant={viewMode === 'compact' ? 'default' : 'ghost'} onClick={() => setViewMode('compact')} className="text-xs h-7">Compact</Button>
            <Button size="sm" variant={viewMode === 'grid' ? 'default' : 'ghost'} onClick={() => setViewMode('grid')} className="text-xs h-7">Grid</Button>
          </div>
        </div>

        {viewMode === "compact" ? (
          <div className="space-y-3">
            {Object.entries(groupedTools).map(([category, tools]) => {
              const { Icon } = CATEGORY_DETAILS[category];
              return (
                <Card key={category} className="bg-card/30 border-primary/10">
                  <CardContent className="p-4">
                    <button onClick={() => toggleCategory(category)} className="w-full flex items-center justify-between p-0 h-auto">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3 h-3" />
                        <span className="font-mono text-sm font-semibold">{category}</span>
                        <Badge variant="outline" className="text-xs">{tools.length}</Badge>
                      </div>
                      {expandedCategories[category] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    {expandedCategories[category] && (
                      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {tools.map(({ name, Icon: ToolIcon }) => (
                          <div key={name} className="flex items-center gap-2 p-2 rounded bg-muted/20 hover:bg-muted/30 transition-colors">
                            <div className="p-1 rounded bg-primary/10"><ToolIcon className="w-4 h-4" /></div>
                            <span className="font-mono text-xs truncate">{name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedTools).map(([category, tools]) => {
                const { Icon } = CATEGORY_DETAILS[category];
                return (
                    <div key={category} className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Icon className="w-3 h-3" />
                        <span className="font-mono text-sm">{category}</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {tools.map(({ name, Icon: ToolIcon }, index) => (
                        <Card key={name} className="magnetic-hover group bg-card/30 border-primary/10 hover:border-primary/30 hover:bg-card/50 transition-all duration-300" style={{ animationDelay: `${index * 0.05}s` }}>
                            <CardContent className="p-3 flex items-center gap-2">
                            <div className="p-1 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"><ToolIcon className="w-4 h-4" /></div>
                            <span className="font-mono text-xs text-foreground group-hover:text-primary transition-colors duration-300">{name}</span>
                            </CardContent>
                        </Card>
                        ))}
                    </div>
                    </div>
                );
            })}
          </div>
        )}
      </div>

      {/* Tech Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {techStats.map(({ label, value, Icon }, index) => (
          <Card key={label} className="magnetic-hover bg-card/30 border-primary/20 hover:border-primary/50 transition-all duration-300 group text-center" style={{ animationDelay: `${index * 0.1}s` }}>
            <CardContent className="p-4 space-y-2">
              <div className="w-8 h-8 mx-auto rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon className="w-4 h-4" />
              </div>
              <div className="font-mono text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-muted-foreground font-mono">{label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}