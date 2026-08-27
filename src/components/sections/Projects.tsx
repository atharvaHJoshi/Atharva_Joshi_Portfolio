"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeIn } from "@/components/animated/FadeIn";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/ui/icons";
import SectionHeading from "./SectionHeading";
import {
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  X,
} from "lucide-react";

const categories = ["All", "AI", "Robotics", "Full Stack", "IoT"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (p) =>
            p.category.includes(activeCategory) ||
            p.title.toLowerCase().includes(activeCategory.toLowerCase())
        );

  const project = projects.find((p) => p.id === selectedProject);

  return (
    <section id="work" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Work"
          title="Featured"
          accent="Projects"
        />

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer",
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-surface border border-border text-muted hover:border-primary/50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <FadeIn key={p.id} delay={0.1 + i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 cursor-pointer group hover:border-primary/30 transition-all"
                onClick={() => setSelectedProject(p.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-xs font-mono text-primary mb-1">
                      {p.category}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="text-base text-muted mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 text-muted border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {p.technologies.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-background/50 text-muted">
                      +{p.technologies.length - 5}
                    </span>
                  )}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {project && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            >
              <div
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass rounded-xl p-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="text-xs font-mono text-primary mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-base text-muted mb-6 leading-relaxed">{project.description}</p>

                {/* Problem */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-2">
                    PROBLEM
                  </h4>
                  <p className="text-base text-muted leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-2">
                    SOLUTION
                  </h4>
                  <p className="text-base text-muted leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Architecture */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">
                    ARCHITECTURE
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.architecture.map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="px-3 py-1.5 text-xs font-mono rounded-lg bg-surface border border-border text-foreground">
                          {step}
                        </span>
                        {i < project.architecture.length - 1 && (
                          <ChevronRight size={12} className="text-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">
                    CHALLENGES
                  </h4>
                  <ul className="space-y-2">
                    {project.challenges.map((ch, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-base text-muted"
                      >
                        <span className="text-primary mt-1">▸</span>
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-mono text-primary mb-3">
                    RESULTS
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.results.map((result, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-surface border border-border text-center"
                      >
                        <span className="text-xs font-mono text-foreground">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-sm font-mono text-muted hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-mono hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
