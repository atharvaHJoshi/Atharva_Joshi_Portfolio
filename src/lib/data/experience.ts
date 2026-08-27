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
    id: "exp-1",
    role: "Software Engineering Intern",
    organization: "Research Lab — Autonomous Systems",
    duration: "2024 — Present",
    description: "Working on autonomous drone navigation and computer vision systems for precision landing in GPS-denied environments.",
    responsibilities: [
      "Developing SLAM-based localization algorithms in C++/ROS2",
      "Implementing real-time LiDAR point cloud processing pipelines",
      "Designing sensor fusion architecture for multi-modal perception",
      "Building simulation environments for safe algorithm testing",
    ],
    technologies: ["C++", "ROS2", "Python", "PX4", "LiDAR", "OpenCV", "MAVSDK"],
    achievements: [
      "Achieved < 5cm landing accuracy in autonomous trials",
      "Reduced processing latency by 40% through optimized pipeline",
      "Presented findings at university robotics symposium",
    ],
  },
  {
    id: "exp-2",
    role: "AI/ML Research Assistant",
    organization: "Computer Vision & AI Lab",
    duration: "2023 — 2024",
    description: "Contributed to satellite imagery analysis and carbon-aware ML model optimization research projects.",
    responsibilities: [
      "Developed deep learning models for satellite image classification",
      "Built data preprocessing pipelines for multi-spectral imagery",
      "Implemented carbon footprint estimation for ML training workflows",
      "Created visualization dashboards for model performance analysis",
    ],
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI", "PostgreSQL", "Docker"],
    achievements: [
      "Published research on carbon-aware model selection",
      "Achieved 94% accuracy on satellite classification benchmark",
      "Processed and analyzed 10K+ satellite images",
    ],
  },
  {
    id: "exp-3",
    role: "Full Stack Developer",
    organization: "University Tech Club",
    duration: "2022 — 2023",
    description: "Led development of web applications for campus-wide collaborative tools and event management systems.",
    responsibilities: [
      "Designed and developed full-stack web applications using React and FastAPI",
      "Implemented real-time features using WebSockets",
      "Managed PostgreSQL databases and designed optimized schemas",
      "Deployed applications using Docker and CI/CD pipelines",
    ],
    technologies: ["React", "Next.js", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
    achievements: [
      "Built platform serving 500+ active users",
      "Reduced deployment time by 70% with automated CI/CD",
      "Led a team of 4 developers on main project",
    ],
  },
];
