export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  projects: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: "</>",
    skills: [
      { name: "C++", level: 90, projects: ["autonomous-drone", "satellite-ai-analytics"] },
      { name: "Python", level: 95, projects: ["collabiq", "green-model-advisor", "satellite-ai-analytics", "learning-pathway"] },
      { name: "TypeScript", level: 88, projects: ["collabiq", "learning-pathway"] },
      { name: "JavaScript", level: 90, projects: ["collabiq", "learning-pathway"] },
      { name: "Java", level: 75, projects: [] },
      { name: "C", level: 80, projects: ["autonomous-drone"] },
      { name: "SQL", level: 85, projects: ["collabiq", "green-model-advisor"] },
      { name: "Bash", level: 70, projects: ["autonomous-drone"] },
    ],
  },
  {
    name: "Frontend",
    icon: "UI",
    skills: [
      { name: "React", level: 92, projects: ["collabiq", "learning-pathway"] },
      { name: "Next.js", level: 90, projects: ["collabiq"] },
      { name: "Tailwind CSS", level: 90, projects: ["collabiq", "learning-pathway"] },
      { name: "HTML/CSS", level: 95, projects: ["collabiq", "learning-pathway"] },
    ],
  },
  {
    name: "Backend",
    icon: "API",
    skills: [
      { name: "FastAPI", level: 90, projects: ["collabiq", "green-model-advisor", "satellite-ai-analytics", "learning-pathway"] },
      { name: "Node.js", level: 80, projects: ["collabiq"] },
      { name: "Flask", level: 78, projects: ["satellite-ai-analytics"] },
      { name: "Django", level: 70, projects: [] },
      { name: "REST APIs", level: 92, projects: ["collabiq", "green-model-advisor", "learning-pathway"] },
    ],
  },
  {
    name: "AI / ML",
    icon: "AI",
    skills: [
      { name: "PyTorch", level: 88, projects: ["satellite-ai-analytics", "green-model-advisor"] },
      { name: "TensorFlow", level: 80, projects: ["learning-pathway"] },
      { name: "Scikit-learn", level: 85, projects: ["green-model-advisor"] },
      { name: "YOLO", level: 82, projects: ["satellite-ai-analytics"] },
      { name: "OpenCV", level: 88, projects: ["satellite-ai-analytics", "autonomous-drone"] },
      { name: "Computer Vision", level: 85, projects: ["satellite-ai-analytics", "autonomous-drone"] },
      { name: "Generative AI", level: 78, projects: ["collabiq"] },
    ],
  },
  {
    name: "Cloud / DevOps",
    icon: "☁",
    skills: [
      { name: "AWS", level: 80, projects: ["green-model-advisor", "collabiq"] },
      { name: "Docker", level: 88, projects: ["collabiq", "green-model-advisor", "satellite-ai-analytics", "learning-pathway"] },
      { name: "Kubernetes", level: 72, projects: [] },
      { name: "GitHub Actions", level: 82, projects: ["collabiq", "green-model-advisor"] },
      { name: "Linux", level: 88, projects: ["autonomous-drone", "satellite-ai-analytics"] },
    ],
  },
  {
    name: "Databases",
    icon: "DB",
    skills: [
      { name: "PostgreSQL", level: 88, projects: ["collabiq", "green-model-advisor", "satellite-ai-analytics", "learning-pathway"] },
      { name: "MongoDB", level: 78, projects: ["collabiq"] },
      { name: "Redis", level: 82, projects: ["collabiq"] },
    ],
  },
  {
    name: "Robotics",
    icon: "🤖",
    skills: [
      { name: "ROS2", level: 85, projects: ["autonomous-drone"] },
      { name: "SLAM", level: 80, projects: ["autonomous-drone"] },
      { name: "LiDAR", level: 78, projects: ["autonomous-drone"] },
      { name: "PX4", level: 82, projects: ["autonomous-drone"] },
      { name: "MAVSDK", level: 80, projects: ["autonomous-drone"] },
    ],
  },
];

export const techColors: Record<string, string> = {
  "C++": "#00599C",
  "Python": "#3776AB",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "React": "#61DAFB",
  "Next.js": "#FFFFFF",
  "FastAPI": "#009688",
  "PyTorch": "#EE4C2C",
  "TensorFlow": "#FF6F00",
  "Docker": "#2496ED",
  "AWS": "#FF9900",
  "PostgreSQL": "#4169E1",
  "Redis": "#DC382D",
  "ROS2": "#22323F",
  "OpenCV": "#5C3EE8",
  "YOLO": "#00D4AA",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  "SQL": "#E38C00",
  "HTML/CSS": "#E34F26",
  "Linux": "#FCC624",
  "Kubernetes": "#326CE5",
  "GitHub Actions": "#2088FF",
  "Flask": "#000000",
  "Django": "#092E20",
  "REST APIs": "#FF6B6B",
  "MongoDB": "#47A248",
  "Scikit-learn": "#F89939",
  "Computer Vision": "#8B5CF6",
  "Generative AI": "#C084FC",
  "SLAM": "#10B981",
  "LiDAR": "#F59E0B",
  "PX4": "#3B82F6",
  "MAVSDK": "#6366F1",
  "C": "#A8B9CC",
  "Bash": "#4EAA25",
};
