export interface Experience {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "axaentic",
    role: "AI / Software Engineering",
    organization: "AXAENTIC LABS",
    duration: "2026 — Present",
    description:
      "Working on secure and sovereign LLM data pipelines for enterprise AI systems, focusing on protecting proprietary company data throughout the AI lifecycle.",
    responsibilities: [
      "Developing data pipelines for ingestion, preprocessing, classification, and secure preparation of enterprise data for LLM applications.",
      "Working on mechanisms to detect and protect sensitive and confidential information before it reaches LLM systems.",
      "Exploring data isolation, governance, and sovereignty to prevent unauthorized cross-organization data exposure.",
      "Contributing to secure LLM/RAG pipelines designed to reduce the risk of sensitive information leakage.",
    ],
    technologies: ["Python", "LLMs", "ETL", "Data Engineering", "RAG", "AI/ML", "Data Security"],
    achievements: [],
  },
  {
    id: "pict-robotics",
    role: "Finance & Project Management Lead",
    organization: "PICT Robotics",
    duration: "2025 — Present",
    description:
      "Leading finance and project management alongside technical planning across a 30-member robotics team competing in national-level robotics competitions.",
    responsibilities: [
      "Managing project planning and milestones.",
      "Coordinating task pipelines across technical teams.",
      "Tracking integration milestones.",
      "Supporting architecture and technical coordination.",
      "Managing budgeting and procurement.",
      "Planning resource allocation.",
      "Coordinating between different technical teams.",
      "Supporting testing, debugging, documentation, and integration.",
    ],
    technologies: ["C++", "Python", "ROS", "ROS2", "MAVSDK/MAVLink", "Embedded C++", "LiDAR", "Computer Vision"],
    achievements: [
      "AIR 1 — ISRO IRoC-U 2025",
      "AIR 9 — DD Robocon India 2026",
      "Best Technical Report Award",
      "100/100 in Stage 1 and Stage 2 at DD Robocon India 2026",
    ],
  },
  {
    id: "open-source",
    role: "Open Source Contributor",
    organization: "gVisor · eksctl · SoL-Pi",
    duration: "Ongoing",
    description:
      "Contributing to open-source projects through repository issues, codebase exploration, and validated fixes using issue-based development workflows.",
    responsibilities: [
      "gVisor — worked through repository issues, understood the existing codebase, implemented fixes, and validated the changes.",
      "eksctl (official CLI for Amazon EKS) — worked on issues with corresponding code and test changes.",
      "SoL-Pi — contributed to the project and its development workflow.",
      "Built comfort with reading unfamiliar codebases, Git/GitHub workflows, issue tracking, debugging, and writing validated fixes.",
    ],
    technologies: ["Go", "Git", "GitHub", "Issue Tracking", "Testing", "Debugging"],
    achievements: [],
  },
  {
    id: "thelios",
    role: "Computer Vision / ML Intern",
    organization: "Thelios AI",
    duration: "Jun 2025 — Sep 2025",
    description:
      "Worked on computer-vision and machine-learning workflows involving large-scale image datasets.",
    responsibilities: [
      "Built batched and parallelized Python ETL pipelines for image preprocessing and data preparation.",
      "Added REST-controlled orchestration to make the data-processing workflow easier to integrate with other services.",
      "Reduced image-preprocessing latency by 35%, measured through pipeline throughput benchmarks.",
      "Worked on YOLO model fine-tuning, custom data augmentation, and MLflow experiment tracking.",
      "Improved YOLO detection mAP by 18% over the baseline on held-out validation data.",
      "Focused on reproducibility by developing unit-tested ML workflows and reproducible builds.",
    ],
    technologies: ["Python", "ETL", "REST APIs", "YOLO", "OpenCV", "MLflow", "Machine Learning"],
    achievements: [],
  },
  {
    id: "aws-cloud-club",
    role: "Research Lead Intern — AI/ML",
    organization: "AWS Cloud Club, PICT",
    duration: "Feb 2025 — Jun 2025",
    description:
      "Led a 6-member team working on Brain-Computer Interface (BCI) research as an AI/ML Research Lead.",
    responsibilities: [
      "Led the team through the complete design → build → evaluate ML workflow.",
      "Worked with EEG signals and BCI classification.",
      "Developed an ML classification system that achieved 82% accuracy on held-out test data.",
      "Established a reusable ML research methodology that was adopted across the team.",
      "Worked on research, experimentation, evaluation, documentation, and team coordination.",
    ],
    technologies: ["Python", "Machine Learning", "EEG/BCI", "Data Processing", "ML Research"],
    achievements: [],
  },
  {
    id: "muscle-box",
    role: "Web Developer Intern",
    organization: "Muscle Box",
    duration: "May 2024 — Aug 2024",
    description:
      "Worked as a Web Developer Intern and contributed to the development of the company's official website.",
    responsibilities: [
      "Designed and developed the official website for the corporate fitness brand.",
      "Implemented responsive UI and user-friendly website features.",
      "Worked on aligning the website's design and functionality with the company's branding and promotional requirements.",
      "Gained practical experience in translating business requirements into usable web interfaces.",
    ],
    technologies: ["Web Development", "HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    achievements: [],
  },
  {
    id: "rb-tech",
    role: "Web Developer Intern",
    organization: "RB Tech Services",
    duration: "Jan 2024 — May 2024",
    description:
      "Worked on full-stack web development during the diploma final year.",
    responsibilities: [
      "Developed dynamic and user-friendly web interfaces.",
      "Worked with HTML, CSS, JavaScript, Bootstrap, and PHP.",
      "Gained practical experience in server-side development and database integration.",
      "Worked on creating web applications with functional frontend, backend, and database components.",
      "Developed an understanding of how web applications move from UI development to server and database implementation.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Web Development", "Databases"],
    achievements: [],
  },
];