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
      "Ranked 1st nationwide (500+ teams including IITs & NITs) for a GNSS-free autonomous drone with LiDAR-based computer vision.",
    category: "competition",
  },
  {
    id: "dd-robocon-2026",
    title: "DD Robocon",
    event: "DD Robocon India 2026",
    position: "AIR 9",
    year: "2026",
    description:
      "100/100 in Stage 1 & Stage 2, Best Technical Report Award, and the highest technical evaluation score.",
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
    id: "pict-robotics-lead",
    title: "Finance & Project Management Lead",
    event: "PICT Robotics Club",
    position: "Lead",
    year: "2026",
    description:
      "Leading a 30-member team; owns architecture, task pipelines, and integration milestones.",
    category: "leadership",
  },
];
