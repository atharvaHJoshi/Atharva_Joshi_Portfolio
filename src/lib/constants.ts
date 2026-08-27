export const SITE = {
  name: "ATHARVA JOSHI",
  fullName: "ATHARVA JOSHI",
  title: "SOFTWARE ENGINEER",
  tagline: "Building intelligent, scalable systems.",
  domains: ["FULL STACK", "AI/ML", "CLOUD", "SYSTEMS", "ROBOTICS"],
  email: "atharva@example.com",
  github: "https://github.com/atharvajoshi",
  linkedin: "https://linkedin.com/in/atharvajoshi",
  status: "OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES",
} as const;

export const NAV_ITEMS = [
  { label: "HOME", icon: "◉", href: "#home" },
  { label: "ABOUT", icon: "◇", href: "#about" },
  { label: "WORK", icon: "⬡", href: "#work" },
  { label: "SKILLS", icon: "◈", href: "#skills" },
  { label: "CONTACT", icon: "✉", href: "#contact" },
] as const;

export const SYSTEM_STATUS = [
  { label: "Portfolio", status: "ONLINE", color: "text-emerald-400" },
  { label: "APIs", status: "OPERATIONAL", color: "text-emerald-400" },
  { label: "AI Assistant", status: "ONLINE", color: "text-emerald-400" },
  { label: "Deployment", status: "AUTOMATED", color: "text-violet-400" },
] as const;
