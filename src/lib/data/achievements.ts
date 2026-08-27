export interface Achievement {
  id: string;
  title: string;
  event: string;
  position: string;
  year: string;
  description: string;
  category: "competition" | "hackathon" | "research" | "leadership";
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: "ach-1",
    title: "ISRO Robotics Challenge",
    event: "ISRO Robotics Challenge 2024",
    position: "Finalist",
    year: "2024",
    description: "Developed autonomous navigation system for planetary rover simulation. Top 10 team nationally.",
    category: "competition",
  },
  {
    id: "ach-2",
    title: "Smart India Hackathon",
    event: "Smart India Hackathon 2024",
    position: "Winner (Internal Round)",
    year: "2024",
    description: "Built AI-powered disaster response coordination platform in 36 hours.",
    category: "hackathon",
  },
  {
    id: "ach-3",
    title: "Carbon-Aware ML Research",
    event: "IEEE Conference",
    position: "Published Paper",
    year: "2024",
    description: "Published research paper on carbon-efficient machine learning model selection methodology.",
    category: "research",
  },
  {
    id: "ach-4",
    title: "Robocon 2023",
    event: "ABU Robocon 2023",
    position: "Team Lead",
    year: "2023",
    description: "Led a 6-member team to design and build autonomous robot for competition. Developed vision-based line following system.",
    category: "competition",
  },
  {
    id: "ach-5",
    title: "HackX Hackathon",
    event: "HackX National Hackathon",
    position: "1st Place",
    year: "2023",
    description: "Won first place for building a real-time collaborative coding platform with AI code review.",
    category: "hackathon",
  },
  {
    id: "ach-6",
    title: "Technical Club President",
    event: "University Tech Club",
    position: "President",
    year: "2023 — 2024",
    description: "Led club of 100+ members. Organized 15+ workshops on AI/ML, web development, and system design.",
    category: "leadership",
  },
];
