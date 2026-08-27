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
    id: "thelios",
    role: "Computer Vision / ML Intern",
    organization: "Thelios AI",
    duration: "Jun 2025 — Sep 2025",
    description:
      "Built computer vision and machine-learning systems for real-time applications.",
    responsibilities: [
      "Engineered Python-based ETL pipelines for large-scale image datasets, cutting preprocessing latency by 35% via batched ingestion and parallelized transforms; integrated REST API endpoints for pipeline control.",
      "Fine-tuned YOLO deep learning models with custom augmentation pipelines, improving mAP by 18% over baseline.",
      "Tracked experiments with MLflow, wrote unit tests, and shipped reproducible builds end-to-end.",
      "Integrated ML inference into Flask REST APIs.",
    ],
    technologies: ["Python", "YOLO", "OpenCV", "Flask", "REST APIs", "MLflow", "ETL"],
    achievements: [],
  },
  {
    id: "muscle-box",
    role: "Web Developer Intern",
    organization: "Muscle Box",
    duration: "Internship",
    description:
      "Worked on web development and application functionality for Muscle Box, contributing to the development and improvement of web-based features.",
    responsibilities: [
      "Developed and maintained responsive web interfaces.",
      "Implemented frontend functionality and integrated backend/API services.",
      "Debugged application issues and improved overall user experience.",
      "Collaborated with the development team to deliver and test new features.",
    ],
    technologies: ["JavaScript", "React.js", "HTML", "CSS", "REST APIs", "Git"],
    achievements: [],
  },
  {
    id: "rb-tech",
    role: "Full-Stack Developer Intern",
    organization: "RB Tech Services",
    duration: "Internship",
    description:
      "Worked on full-stack web applications and backend services, gaining practical experience in API development, databases, and application deployment.",
    responsibilities: [
      "Developed web applications using React.js, JavaScript, Node.js, and Python.",
      "Built and integrated REST APIs for frontend-backend communication.",
      "Worked with databases, application logic, debugging, and testing.",
      "Contributed to deploying and maintaining application features.",
    ],
    technologies: ["React.js", "JavaScript", "Node.js", "Python", "REST APIs", "SQL", "Git"],
    achievements: [],
  },
  {
    id: "aws-cloud-club",
    role: "Research Lead Intern — AI/ML",
    organization: "AWS Cloud Club, PICT",
    duration: "Feb 2025 — Jun 2025",
    description:
      "Led a 6-member team through the full design-build-evaluate cycle to deliver an ML classification system measured against held-out test data.",
    responsibilities: [
      "Delivered a working ML classification system at 82% accuracy, measured against held-out test data, by leading a 6-member team.",
      "Standardized the team's engineering process into a documented, reusable framework, measured by adoption across all 6 team members.",
      "Authored a faculty-reviewed methodology report.",
      "Conducted signal preprocessing, feature extraction, and machine-learning classification.",
    ],
    technologies: ["Python", "Machine Learning", "Scikit-learn", "Signal Processing", "Feature Engineering"],
    achievements: [],
  },
  {
    id: "pict-robotics-finance",
    role: "Finance & Operations Lead",
    organization: "PICT Robotics",
    duration: "2025 — 2026",
    description:
      "Led financial and operational activities alongside technical contributions to national-level robotics competitions.",
    responsibilities: [
      "Managed club budgeting, financial planning, and resource allocation for robotics projects.",
      "Coordinated operational requirements across multidisciplinary technical teams.",
      "Supported project planning, execution, documentation, and competition preparation.",
      "Contributed technically through software debugging, testing, and system integration.",
    ],
    technologies: [],
    achievements: [],
  },
  {
    id: "pict-robotics-tech",
    role: "Robotics Software & Technical Team",
    organization: "PICT Robotics",
    duration: "2024 — Present",
    description:
      "Contributed to the development of autonomous robotics systems for national-level competitions.",
    responsibilities: [
      "Developed software for an autonomous drone participating in the ISRO Robotics Challenge 2025, contributing to LiDAR-based terrain mapping, flat landing-zone detection, real-time WebSocket communication, and mission-control software.",
      "Contributed to robotics software development, debugging, testing, and integration for DD Robocon India 2026.",
      "Achieved AIR 1 – ISRO Robotics Challenge 2025.",
      "Achieved National AIR 9 – DD Robocon India 2026, along with the Best Technical Report Award and 100/100 in both Stage 1 and Stage 2 evaluations.",
      "ISRO IRoC-U 2026 Finalist – Top 20 among 500+ teams (results awaited).",
    ],
    technologies: ["C++", "Python", "ROS2", "LiDAR", "OpenCV", "WebSockets", "MAVSDK", "PX4"],
    achievements: [
      "AIR 1 – ISRO Robotics Challenge 2025",
      "National AIR 9 – DD Robocon India 2026 + Best Technical Report Award",
      "ISRO IRoC-U 2026 Finalist – Top 20 among 500+ teams",
    ],
  },
];
