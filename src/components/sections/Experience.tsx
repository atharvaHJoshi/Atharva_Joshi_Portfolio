"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { experiences } from "@/lib/data/experience";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Experience"
          title="Professional"
          accent="Journey"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.1}>
                <div className="relative md:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block z-10" />

                  <div className="glass rounded-xl p-6 hover:border-primary/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-primary">
                          <Briefcase size={12} />
                          {exp.organization}
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-muted mt-2 sm:mt-0">
                        <Calendar size={12} />
                        {exp.duration}
                      </div>
                    </div>

                    <p className="text-sm text-muted mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <div className="text-xs font-mono text-muted mb-2">
                        RESPONSIBILITIES
                      </div>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((r, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-muted/80"
                          >
                            <ChevronRight
                              size={12}
                              className="text-primary mt-0.5 shrink-0"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="text-xs font-mono text-muted mb-2">
                        ACHIEVEMENTS
                      </div>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((a, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-emerald-400/80"
                          >
                            <span className="text-emerald-400 mt-0.5">★</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 text-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
