"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/animated/FadeIn";
import { SITE } from "@/lib/constants";
import {
  Send,
  Mail,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", organization: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-16 lg:pl-[200px] relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Contact"
          title="Get in"
          accent="Touch"
          description={`${SITE.status} — I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.`}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-muted mb-1.5 block">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted mb-1.5 block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-muted mb-1.5 block">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                    placeholder="Company (optional)"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted mb-1.5 block">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors"
                    placeholder="What's this about?"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-muted mb-1.5 block">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-sm text-foreground font-mono focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-mono text-sm hover:bg-primary/90 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="glass rounded-xl p-6">
                <div className="text-xs font-mono text-primary mb-4 tracking-widest">
                  CONNECT
                </div>
                <div className="space-y-3">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <Mail size={16} className="text-muted group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-sm text-foreground">{SITE.email}</div>
                      <div className="text-xs text-muted">Email</div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <GithubIcon size={16} className="text-muted group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-sm text-foreground">GitHub</div>
                      <div className="text-xs text-muted">Open Source & Projects</div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={SITE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <LinkedinIcon size={16} className="text-muted group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-sm text-foreground">LinkedIn</div>
                      <div className="text-xs text-muted">Professional Network</div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="/Atharva-Joshi-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface-light transition-colors group"
                  >
                    <FileText size={16} className="text-muted group-hover:text-primary transition-colors" />
                    <div>
                      <div className="text-sm text-foreground">Resume</div>
                      <div className="text-xs text-muted">Download PDF</div>
                    </div>
                    <ArrowUpRight size={14} className="ml-auto text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
