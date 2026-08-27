"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { achievements } from "@/lib/data/achievements";
import { Trophy, Medal, BookOpen, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categoryIcons = {
  competition: Trophy,
  hackathon: Medal,
  research: BookOpen,
  leadership: Users,
};

const categoryColors = {
  competition: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  hackathon: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  research: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  leadership: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition &"
          accent="Impact"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const Icon = categoryIcons[ach.category];
            const colorClass = categoryColors[ach.category];
            return (
              <FadeIn key={ach.id} delay={i * 0.05}>
                <div className="glass rounded-xl p-5 h-full hover:border-primary/20 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono border ${colorClass}`}
                    >
                      <Icon size={10} />
                      {ach.category.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      {ach.year}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {ach.title}
                  </h3>
                  <div className="text-xs text-primary font-mono mb-2">
                    {ach.event} — {ach.position}
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
