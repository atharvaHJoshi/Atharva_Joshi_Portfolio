"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { Code, Cpu, Globe, Layers, Bot, Database } from "lucide-react";
import SectionHeading from "./SectionHeading";

const DNA_NODES = [
  {
    icon: Code,
    label: "FULL STACK",
    items: ["React", "Next.js", "FastAPI", "Node.js"],
    color: "text-blue-400",
    border: "border-blue-400/20",
  },
  {
    icon: Bot,
    label: "AI / ML",
    items: ["PyTorch", "Computer Vision", "YOLO", "GenAI"],
    color: "text-violet-400",
    border: "border-violet-400/20",
  },
  {
    icon: Cpu,
    label: "SYSTEMS",
    items: ["Cloud", "DevOps", "Docker", "AWS"],
    color: "text-emerald-400",
    border: "border-emerald-400/20",
  },
  {
    icon: Globe,
    label: "ROBOTICS",
    items: ["ROS2", "SLAM", "LiDAR", "PX4"],
    color: "text-amber-400",
    border: "border-amber-400/20",
  },
  {
    icon: Database,
    label: "DATA",
    items: ["PostgreSQL", "Redis", "MongoDB"],
    color: "text-cyan-400",
    border: "border-cyan-400/20",
  },
  {
    icon: Layers,
    label: "ARCHITECTURE",
    items: ["System Design", "APIs", "Microservices"],
    color: "text-rose-400",
    border: "border-rose-400/20",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="About"
          title="The Engineer Behind"
          accent="the System"
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a software engineer who builds systems that work — not
                just code that compiles. My approach bridges the gap between
                deep technical engineering and production-grade software
                delivery.
              </p>
              <p>
                From training computer vision models on satellite imagery to
                building autonomous drone landing systems, from designing
                full-stack platforms to implementing real-time collaborative
                systems — I operate across the entire engineering spectrum.
              </p>
              <p>
                My philosophy is simple: <span className="text-foreground font-medium">every technical claim should be backed
                by something real.</span> This portfolio itself is a testament to
                that principle — a full-stack application demonstrating the
                very skills it showcases.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="glass rounded-xl p-6">
              <div className="text-xs font-mono text-primary mb-4 tracking-widest">
                ENGINEERING DNA
              </div>
              <div className="grid grid-cols-2 gap-3">
                {DNA_NODES.map((node) => (
                  <div
                    key={node.label}
                    className={`p-3 rounded-lg border ${node.border} bg-surface/50 hover:bg-surface-light transition-colors`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <node.icon size={14} className={node.color} />
                      <span className="text-xs font-mono text-foreground">
                        {node.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {node.items.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono text-muted px-1.5 py-0.5 rounded bg-background/50"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
