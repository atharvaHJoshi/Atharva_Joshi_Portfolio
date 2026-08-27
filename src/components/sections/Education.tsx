"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { education } from "@/lib/data/education";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Education"
          title="Academic"
          accent="Background"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <FadeIn key={edu.id} delay={i * 0.1}>
              <div className="glass rounded-xl p-6 h-full hover:border-primary/20 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-primary" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                    <Calendar size={12} />
                    {edu.duration}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-sm text-primary mb-3">
                  <BookOpen size={12} />
                  {edu.institution}
                </div>

                <p className="text-base text-muted leading-relaxed mb-4">
                  {edu.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {edu.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-base text-muted/80"
                    >
                      <span className="text-primary mt-1">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {edu.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {edu.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
