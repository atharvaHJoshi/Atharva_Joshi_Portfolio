export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  architecture: string[];
  challenges: string[];
  results: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "collabiq",
    title: "CollabIQ",
    category: "Full Stack / AI",
    description: "AI-powered collaborative intelligence platform for real-time team decision-making.",
    problem: "Teams struggle with fragmented communication and lack intelligent tools for collaborative problem-solving across distributed environments.",
    solution: "Built a full-stack platform with real-time collaboration, AI-powered insights, and intelligent task routing using NLP and recommendation engines.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "OpenAI", "WebSockets", "Docker"],
    architecture: ["Next.js Frontend", "FastAPI Gateway", "AI Service", "PostgreSQL", "Redis Cache", "WebSocket Server"],
    challenges: ["Real-time sync across 50+ concurrent users", "AI response latency under 200ms", "Conflict resolution in collaborative editing"],
    results: ["99.9% uptime", "< 150ms average API response", "Supported 50+ concurrent sessions"],
    githubUrl: "https://github.com/atharvajoshi/collabiq",
    featured: true,
  },
  {
    id: "green-model-advisor",
    title: "Green Model Advisor",
    category: "AI / ML / Sustainability",
    description: "Carbon-aware AI model selection system that recommends optimal ML models based on environmental impact.",
    problem: "ML practitioners lack tools to balance model performance with carbon footprint during training and deployment.",
    solution: "Developed an AI system that analyzes model architecture, dataset size, and hardware to recommend carbon-efficient models without sacrificing accuracy.",
    technologies: ["Python", "PyTorch", "FastAPI", "Scikit-learn", "PostgreSQL", "Docker", "AWS"],
    architecture: ["Web Interface", "API Gateway", "Model Analyzer", "Carbon Calculator", "Recommendation Engine", "Database"],
    challenges: ["Accurate carbon estimation across hardware", "Balancing accuracy vs. emissions trade-offs", "Real-time model profiling"],
    results: ["40% average reduction in training emissions", "Analyzed 200+ model architectures", "Published research methodology"],
    githubUrl: "https://github.com/atharvajoshi/green-model-advisor",
    featured: true,
  },
  {
    id: "satellite-ai-analytics",
    title: "Satellite AI Analytics",
    category: "AI / Computer Vision",
    description: "Deep learning system for satellite imagery analysis and automated land-use classification.",
    problem: "Manual analysis of satellite imagery is time-consuming and error-prone, limiting the speed of environmental and urban planning decisions.",
    solution: "Implemented a multi-model CV pipeline using YOLO and custom CNNs for real-time satellite image segmentation and classification.",
    technologies: ["Python", "PyTorch", "YOLO", "OpenCV", "FastAPI", "GDAL", "PostgreSQL", "Docker"],
    architecture: ["Image Ingestion", "Preprocessing Pipeline", "Detection Models", "Segmentation Engine", "Analytics Dashboard", "Database"],
    challenges: ["Handling multi-resolution satellite data", "Training on limited labeled datasets", "Real-time processing of large imagery"],
    results: ["94% classification accuracy", "Processed 10K+ satellite images", "5x faster than manual analysis"],
    githubUrl: "https://github.com/atharvajoshi/satellite-ai-analytics",
    featured: true,
  },
  {
    id: "autonomous-drone",
    title: "Autonomous Drone Landing System",
    category: "Robotics / AI",
    description: "Computer vision-guided autonomous precision landing system for UAVs using LiDAR and stereo vision.",
    problem: "Autonomous drones require precise landing capabilities in GPS-denied environments with dynamic obstacles.",
    solution: "Designed a multi-sensor fusion system combining LiDAR SLAM, stereo vision, and PX4 flight control for centimeter-precision autonomous landing.",
    technologies: ["C++", "Python", "ROS2", "PX4", "MAVSDK", "OpenCV", "LiDAR", "SLAM"],
    architecture: ["Sensor Hub", "SLAM Engine", "Landing Pad Detector", "Flight Controller", "Path Planner", "Safety Monitor"],
    challenges: ["Sensor fusion latency under 10ms", "Wind disturbance compensation", "GPS-denied localization"],
    results: ["< 5cm landing accuracy", "6DOF pose estimation at 30Hz", "Successful trials in 3 environments"],
    githubUrl: "https://github.com/atharvajoshi/autonomous-drone-landing",
    featured: true,
  },
  {
    id: "learning-pathway",
    title: "Personalized Learning Pathway Generator",
    category: "AI / Education",
    description: "AI-driven adaptive learning system that generates personalized study paths based on skill gaps and learning patterns.",
    problem: "Learners waste time on content they already know and miss critical prerequisites, leading to inefficient learning.",
    solution: "Built a knowledge graph-based recommendation engine that maps skill dependencies and adapts pathways based on assessment performance.",
    technologies: ["Python", "FastAPI", "Neo4j", "React", "TensorFlow", "PostgreSQL", "Docker"],
    architecture: ["User Interface", "Assessment Engine", "Knowledge Graph", "Recommendation AI", "Progress Tracker", "Analytics"],
    challenges: ["Building accurate skill dependency graphs", "Real-time adaptation to user performance", "Cold-start problem for new learners"],
    results: ["35% improvement in learning efficiency", "Mapped 500+ skill dependencies", "92% user satisfaction rate"],
    githubUrl: "https://github.com/atharvajoshi/learning-pathway",
    featured: false,
  },
];
