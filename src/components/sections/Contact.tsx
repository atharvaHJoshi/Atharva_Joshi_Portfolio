"use client";

import { FadeIn } from "@/components/animated/FadeIn";
import { SITE } from "@/lib/constants";
import { Mail, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import SectionHeading from "./SectionHeading";

const LINKS = [
  {
    href: SITE.linkedin,
    external: true,
    icon: LinkedinIcon,
    label: "LinkedIn",
    subtitle: "Let's connect on LinkedIn",
  },
  {
    href: `mailto:${SITE.email}`,
    external: false,
    icon: Mail,
    label: "Email",
    subtitle: SITE.email,
  },
  {
    href: SITE.github,
    external: true,
    icon: GithubIcon,
    label: "GitHub",
    subtitle: "github.com/atharvaHJoshi",
  },
  {
    href: "/Atharva-Joshi-Resume.pdf",
    external: true,
    icon: FileText,
    label: "Resume",
    subtitle: "Download PDF",
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Let's"
          accent="Connect"
          description={`${SITE.status} — Reach out on LinkedIn, email, or GitHub. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.`}
        />

        <div className="max-w-3xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="glass rounded-xl p-6">
              <div className="text-xs font-mono text-primary mb-4 tracking-widest">
                CONNECT
              </div>
              <div className="space-y-3">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <link.icon
                      size={16}
                      className="text-muted group-hover:text-primary transition-colors"
                    />
                    <div>
                      <div className="text-sm text-foreground">{link.label}</div>
                      <div className="text-xs text-muted">{link.subtitle}</div>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
