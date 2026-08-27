"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: shouldReduce ? "auto" : "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Centered Top Nav */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass pb-3" : "pb-4"
        )}
      >
        <div className="flex items-center justify-between px-6 pt-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-success animate-glow-pulse" />
            <span className="font-mono text-xs text-muted hidden sm:block">
              {SITE.fullName}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              SYSTEMS ONLINE
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs font-mono text-primary">
              {SITE.status}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-muted hover:text-foreground transition-colors"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center px-4">
          <nav className="glass rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer",
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary/15 text-primary glow-box"
                    : "text-muted hover:text-foreground hover:bg-surface-light"
                )}
              >
                <span className="text-[10px]">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <div className="relative w-72 h-full glass p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-sm text-primary tracking-widest">
                  {SITE.name}
                </span>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="text-muted hover:text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="space-y-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.button
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.href)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-mono transition-all cursor-pointer",
                      activeSection === item.href.replace("#", "")
                        ? "bg-primary/15 text-primary"
                        : "text-muted hover:text-foreground hover:bg-surface-light"
                    )}
                  >
                    <span className="text-xs">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
