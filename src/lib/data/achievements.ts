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
    id: "isro-irou-2025",
    title: "ISRO IRoC-U Robotics Challenge",
    event: "ISRO IRoC-U 2025",
    position: "AIR 1",
    year: "2025",
    description:
      "Ranked 1st nationwide (AIR 1) among 500+ teams for an autonomous UAV with GPS-free navigation, LiDAR-based terrain mapping, and computer-vision landing-zone detection.",
    category: "competition",
  },
  {
    id: "dd-robocon-2026",
    title: "DD Robocon",
    event: "DD Robocon India 2026",
    position: "AIR 9",
    year: "2026",
    description:
      "Finished AIR 9 nationally with 100/100 in Stage 1 & Stage 2 and the Best Technical Report Award.",
    category: "competition",
  },
  {
    id: "isro-bah-2025",
    title: "ISRO Bharat Antariksh Hackathon",
    event: "ISRO BAH 2025",
    position: "Top 28",
    year: "2025",
    description:
      "Finished Top 28 out of 8,744 teams with an ML-based air quality index (AQI) prediction pipeline.",
    category: "hackathon",
  },
  {
    id: "mastercard-adversia",
    title: "Adversia — AI Payment Security Lab",
    event: "Mastercard Hackathon",
    position: "Project",
    year: "2025",
    description:
      "Built an AI Red Team ↔ Blue Team payment fraud-detection system with 92/92 unit tests and 14/14 end-to-end tests; adversarial recall improved by 13.5 pp and F1 from 0.357 to 0.519.",
    category: "hackathon",
  },
  {
    id: "pict-robotics-lead",
    title: "Finance & Project Management Lead",
    event: "PICT Robotics Club",
    position: "Lead",
    year: "2026",
    description:
      "Leading a 30-member robotics team — owns project planning, budgeting, and integration milestones; key outcomes include AIR 1 (IRoC-U 2025) and AIR 9 (DD Robocon 2026).",
    category: "leadership",
  },
];