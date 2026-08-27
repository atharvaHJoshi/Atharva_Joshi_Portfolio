"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { skillCategories } from "@/lib/data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Skills"
          title="Technical"
          accent="Proficiency"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.name} delay={i * 0.05}>
              <div className="glass rounded-xl p-6 h-full">
                <h3 className="flex items-center gap-2 text-sm font-mono text-primary mb-4">
                  <span>{category.icon}</span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-md text-sm font-mono bg-surface border border-border text-foreground"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
