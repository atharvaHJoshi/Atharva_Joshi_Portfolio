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
      { name: "Python", level: 95, projects: ["isro-irou-drone", "isro-bah-satellite", "green-model-advisor", "collabiq"] },
      { name: "Java", level: 80, projects: ["shetisakha"] },
      { name: "C++", level: 85, projects: [] },
      { name: "SQL", level: 85, projects: ["collabiq"] },
      { name: "Shell Scripting", level: 75, projects: [] },
      { name: "JavaScript", level: 85, projects: ["collabiq"] },
    ],
  },
  {
    name: "Java / J2EE",
    icon: "JVM",
    skills: [
      { name: "Servlets", level: 72, projects: [] },
      { name: "JDBC", level: 74, projects: [] },
      { name: "Struts", level: 68, projects: [] },
      { name: "EJB", level: 66, projects: [] },
      { name: "Android SDK (Java)", level: 78, projects: ["shetisakha"] },
      { name: "RESTful Web Services", level: 80, projects: ["collabiq"] },
    ],
  },
  {
    name: "Web Technologies",
    icon: "WEB",
    skills: [
      { name: "React.js", level: 88, projects: ["collabiq"] },
      { name: "FastAPI", level: 90, projects: ["green-model-advisor", "collabiq"] },
      { name: "Flask", level: 85, projects: ["isro-irou-drone"] },
      { name: "WebSockets", level: 80, projects: [] },
      { name: "REST API Integration", level: 90, projects: ["collabiq", "green-model-advisor"] },
      { name: "PHP", level: 70, projects: [] },
    ],
  },
  {
    name: "AI & Agentic Software",
    icon: "AI",
    skills: [
      { name: "OpenCV", level: 88, projects: ["isro-irou-drone"] },
      { name: "YOLO", level: 84, projects: [] },
      { name: "MLflow", level: 80, projects: [] },
      { name: "Scikit-learn", level: 85, projects: ["isro-bah-satellite"] },
      { name: "TensorFlow", level: 78, projects: [] },
      { name: "Agentic Task Pipelines", level: 80, projects: [] },
      { name: "Model Orchestration", level: 78, projects: [] },
      { name: "Inference Pipelines", level: 82, projects: ["green-model-advisor"] },
      { name: "ETL Pipelines", level: 85, projects: ["isro-bah-satellite"] },
    ],
  },
  {
    name: "Data & Cloud",
    icon: "☁",
    skills: [
      { name: "AWS", level: 80, projects: [] },
      { name: "S3", level: 78, projects: [] },
      { name: "EC2", level: 78, projects: [] },
      { name: "DynamoDB", level: 74, projects: [] },
      { name: "Docker", level: 85, projects: ["green-model-advisor", "collabiq"] },
      { name: "Git", level: 90, projects: [] },
      { name: "Redis", level: 78, projects: [] },
      { name: "CI/CD", level: 80, projects: [] },
      { name: "Linux", level: 85, projects: ["isro-irou-drone"] },
      { name: "MongoDB", level: 76, projects: [] },
      { name: "MySQL", level: 82, projects: ["collabiq"] },
    ],
  },
  {
    name: "Core CS",
    icon: "CS",
    skills: [
      { name: "Data Structures & Algorithms", level: 88, projects: [] },
      { name: "OOP", level: 90, projects: [] },
      { name: "DBMS", level: 82, projects: [] },
      { name: "Operating Systems", level: 80, projects: [] },
      { name: "Computer Networks", level: 78, projects: [] },
      { name: "System Design (Fundamentals)", level: 76, projects: [] },
    ],
  },
];

export const techColors: Record<string, string> = {
  Python: "#3776AB",
  Java: "#E76F00",
  "C++": "#00599C",
  SQL: "#E38C00",
  "Shell Scripting": "#4EAA25",
  JavaScript: "#F7DF1E",
  Servlets: "#E76F00",
  JDBC: "#F5C542",
  Struts: "#800080",
  EJB: "#F89820",
  "Android SDK (Java)": "#3DDC84",
  "RESTful Web Services": "#FF6B6B",
  "React.js": "#61DAFB",
  FastAPI: "#009688",
  Flask: "#000000",
  WebSockets: "#E34F26",
  "REST API Integration": "#FF6B6B",
  PHP: "#777BB4",
  OpenCV: "#5C3EE8",
  YOLO: "#00D4AA",
  MLflow: "#0194E2",
  "Scikit-learn": "#F89939",
  TensorFlow: "#FF6F00",
  "Agentic Task Pipelines": "#8B5CF6",
  "Model Orchestration": "#C084FC",
  "Inference Pipelines": "#7C3AED",
  "ETL Pipelines": "#10B981",
  AWS: "#FF9900",
  S3: "#E25440",
  EC2: "#FF9900",
  DynamoDB: "#4053D6",
  Docker: "#2496ED",
  Git: "#F05032",
  Redis: "#DC382D",
  "CI/CD": "#2088FF",
  Linux: "#FCC624",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  "Data Structures & Algorithms": "#3B82F6",
  OOP: "#6366F1",
  DBMS: "#6B7280",
  "Operating Systems": "#64748B",
  "Computer Networks": "#0EA5E9",
  "System Design (Fundamentals)": "#F59E0B",
};
