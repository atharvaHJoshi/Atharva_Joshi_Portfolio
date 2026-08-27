export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const education: Education[] = [
  {
    id: "pict",
    degree: "B.E. Computer Engineering",
    institution: "Pune Institute of Computer Technology (PICT)",
    duration: "Aug 2024 — Jul 2027",
    description:
      "Lateral entry (2nd year, via Diploma) pursuing Computer Engineering with a focus on software systems, AI/ML, and cloud engineering.",
    highlights: [
      "Lateral entry directly into 2nd year via Diploma in IT",
      "Actively involved in PICT Robotics — AIR 1 in ISRO IRoC-U 2025",
      "Core CS: Data Structures, OOP, DBMS, Operating Systems, Networks, System Design",
    ],
    technologies: ["Python", "C++", "Java", "SQL", "AWS", "Docker"],
  },
  {
    id: "gpn",
    degree: "Diploma in Information Technology",
    institution: "Government Polytechnic, Nagpur",
    duration: "Sep 2021 — May 2024",
    description:
      "Diploma in Information Technology building a strong foundation in programming, databases, and web technologies.",
    highlights: [
      "Strong foundation in DSA, OOP, and DBMS fundamentals",
      "Built hands-on programming and web development skills",
    ],
    technologies: ["C++", "Java", "JavaScript", "SQL", "PHP"],
  },
];
