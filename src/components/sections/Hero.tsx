"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { SITE } from "@/lib/constants";
import SystemStatus from "./SystemStatus";
import { TypingTerminal } from "@/components/animated/TypingTerminal";
import { MagneticButton } from "@/components/animated/MagneticButton";
import { ArrowDown, FileText, Send } from "lucide-react";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />,
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/60 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-success animate-glow-pulse" />
            <span className="text-xs font-mono text-muted">{SITE.status}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            <span className="text-foreground">{SITE.name.split(" ")[0]}</span>
            <br />
            <span className="text-primary">{SITE.name.split(" ")[1]}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-lg sm:text-xl text-muted mb-6 tracking-wide">
            {SITE.title.split(" ").join(" · ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mb-8"
        >
          <TypingTerminal
            lines={[SITE.tagline]}
            speed={50}
            className="justify-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {SITE.domains.map((domain, i) => (
            <span
              key={domain}
              className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted hover:border-primary/50 hover:text-primary transition-colors"
            >
              {domain}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <MagneticButton strength={0.2}>
            <a
              href="#work"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-mono text-sm hover:bg-primary/90 transition-colors glow-box"
            >
              <span>Explore My Work</span>
              <ArrowDown size={16} />
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-mono text-sm text-muted hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Send size={16} />
              <span>Contact Me</span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a
              href="/Atharva-Joshi-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg font-mono text-sm text-muted hover:border-primary/50 hover:text-primary transition-colors"
            >
              <FileText size={16} />
              <span>Resume</span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 right-8 hidden lg:block z-10"
      >
        <SystemStatus />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
