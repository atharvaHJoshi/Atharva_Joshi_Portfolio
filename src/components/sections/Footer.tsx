"use client";

import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/animated/FadeIn";
import { Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-16 lg:pl-[200px] border-t border-border relative">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm font-mono text-primary mb-3 tracking-widest">
                {SITE.name}
              </div>
              <p className="text-xs text-muted leading-relaxed">
                An interactive engineering portfolio built to demonstrate
                full-stack development, AI/ML, cloud, and robotics expertise.
              </p>
            </div>

            <div>
              <div className="text-xs font-mono text-muted mb-3">
                QUICK LINKS
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["Home", "About", "Work", "Skills", "Contact"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-xs text-muted hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-muted mb-3">
                CONNECT
              </div>
              <div className="flex gap-3">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"
                >
                  <GithubIcon size={14} />
                </a>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"
                >
                  <LinkedinIcon size={14} />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all"
                >
                  <Mail size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10px] font-mono text-muted">
              © 2026 {SITE.fullName}. All rights reserved.
            </span>
            <span className="text-[10px] font-mono text-muted flex items-center gap-1">
              Built with <Heart size={10} className="text-error" /> by{" "}
              {SITE.fullName.split(" ")[0]}.OS
            </span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
