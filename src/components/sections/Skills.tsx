"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FadeIn } from "@/components/animated/FadeIn";
import { skillCategories } from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SkillOrbit = dynamic(() => import("@/components/three/SkillOrbit"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-muted font-mono text-sm">
      Loading 3D Skills...
    </div>
  ),
});

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const category = skillCategories[activeCategory];

  return (
    <section id="skills" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technology"
          accent="Ecosystem"
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 3D Skill Network */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-xl overflow-hidden h-[400px]">
              <SkillOrbit />
            </div>
          </FadeIn>

          {/* Category Tabs + Skills */}
          <FadeIn delay={0.2}>
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {skillCategories.map((cat, i) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(i)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer",
                      activeCategory === i
                        ? "bg-primary text-white"
                        : "bg-surface border border-border text-muted hover:border-primary/50 hover:text-primary"
                    )}
                  >
                    <span className="mr-1.5">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="p-4 rounded-lg border border-border bg-surface/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-mono text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        {skill.projects.length > 0 && (
                          <ExternalLink
                            size={12}
                            className="text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        )}
                      </div>
                      <span className="text-xs font-mono text-muted">
                        {skill.projects.length} projects
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, #7c3aed, #8b5cf6, #c084fc)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Hovered skill projects */}
        {hoveredSkill && (
          <FadeIn>
            <div className="glass rounded-xl p-4 mb-8">
              <div className="text-xs font-mono text-primary mb-2">
                PROJECTS USING {hoveredSkill.toUpperCase()}
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills
                  .find((s) => s.name === hoveredSkill)
                  ?.projects.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {p}
                    </span>
                  ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
