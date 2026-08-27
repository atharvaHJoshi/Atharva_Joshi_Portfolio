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
    id: "isro-irou-drone",
    title: "Autonomous Drone Mission Control",
    category: "Robotics / AI",
    description:
      "ISRO IRoC-U 2025 autonomous drone system with a Flask REST API backend and real-time web dashboard for GPS-free navigation.",
    problem:
      "Autonomous drones must navigate and land without GNSS in dynamic, GPS-denied environments, requiring precise local mapping and real-time mission control.",
    solution:
      "Architected a full-stack autonomous drone system with a Flask REST API backend and real-time web dashboard; designed a novel 2D→2.5D LiDAR terrain-mapping algorithm using statistical point-cloud filtering for sub-metre GPS-free navigation.",
    technologies: ["Python", "Flask", "REST APIs", "ROS", "OpenCV", "LiDAR", "NumPy"],
    architecture: [
      "Flask REST API Backend",
      "HTTP Server",
      "2D→2.5D LiDAR Mapping",
      "OpenCV Inference",
      "Real-time Web Dashboard",
    ],
    challenges: [
      "GPS-free localization to sub-metre accuracy",
      "Real-time object detection and flatness scoring",
      "Clean, testable service boundaries across subsystems",
    ],
    results: [
      "AIR 1 / 500+ Teams",
      "Sub-metre navigation accuracy",
      "Modular, testable Python services",
    ],
    featured: true,
  },
  {
    id: "isro-bah-satellite",
    title: "Satellite Air Pollution Analytics",
    category: "AI / Data",
    description:
      "ISRO Bharat Antariksh Hackathon 2025 end-to-end pipeline ingesting 5+ years of multi-source satellite AQI data for pollution prediction.",
    problem:
      "Accurately predicting air quality from heterogeneous, multi-source satellite data requires robust ingestion and feature engineering.",
    solution:
      "Designed an end-to-end data pipeline ingesting 5+ years of multi-source satellite AQI data; applied feature engineering to distil 12 high-signal variables from 40+ raw inputs and shipped regression/classification models hitting 88% accuracy.",
    technologies: ["Python", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
    architecture: [
      "Data Ingestion",
      "Feature Engineering (12 vars)",
      "Regression / Classification Models",
      "Prediction Output",
    ],
    challenges: [
      "Heterogeneous multi-source satellite data",
      "Feature selection from 40+ raw inputs",
      "Accuracy and F1 tuning",
    ],
    results: [
      "Top 28 / 8,744 Teams",
      "88% accuracy",
      "F1 improved 15% via tuning",
    ],
    featured: true,
  },
  {
    id: "green-model-advisor",
    title: "Green Model Advisor",
    category: "AI / Sustainability",
    description:
      "Carbon-aware AI inference router that dynamically selects LLMs based on latency, accuracy, cost, and estimated CO₂ emissions.",
    problem:
      "LLM selection for inference ignores environmental impact, leading to unnecessary compute and emissions.",
    solution:
      "Built an AI inference routing platform that dynamically selects LLMs based on latency, accuracy, cost, and estimated CO₂ emissions using FastAPI microservices; integrated real-time carbon tracking with Dockerized deployment.",
    technologies: ["Python", "FastAPI", "Docker", "CodeCarbon", "REST APIs"],
    architecture: [
      "FastAPI Microservice",
      "Selection Engine",
      "CodeCarbon Tracker",
      "Dockerized Deployment",
    ],
    challenges: [
      "Balancing latency, cost, and accuracy trade-offs",
      "Real-time carbon estimation",
    ],
    results: [
      "45% reduction in compute vs static selection",
    ],
    featured: true,
  },
  {
    id: "collabiq",
    title: "CollabIQ",
    category: "Full Stack / AI",
    description:
      "AI-powered SaaS project management platform with AI-assisted task management, documentation, collaborative coding, and analytics dashboards.",
    problem:
      "Project teams need an intelligent platform that automates planning, documentation, and collaboration while improving developer productivity.",
    solution:
      "Built a full-stack SaaS platform featuring AI-assisted task management, documentation generation, collaborative coding, analytics dashboards, and role-based authentication; designed scalable REST APIs, modular backend services, and LLM-powered automation.",
    technologies: ["ReactJS", "FastAPI", "MySQL", "Docker", "REST APIs"],
    architecture: [
      "ReactJS Frontend",
      "FastAPI Backend",
      "MySQL Database",
      "LLM Automation",
      "Docker Deployment",
    ],
    challenges: [
      "Scalable REST API design",
      "Role-based authentication",
      "LLM-powered automation",
    ],
    results: [
      "Improved developer productivity",
      "SaaS with analytics dashboards",
    ],
    featured: true,
  },
  {
    id: "shetisakha",
    title: "SHETISAKHA",
    category: "IoT / Mobile",
    description:
      "Agri-Bot control system — an Android 14-compatible farming robot control app with live soil monitoring and autonomous path replay.",
    problem:
      "Farmers need an accessible way to monitor soil conditions and control agricultural robots for automated seeding, sprinkling, and ploughing.",
    solution:
      "Built an Android 14-compatible control app transmitting real-time soil moisture, pH, and nutrient data via an onboard sensor package over Bluetooth (HC-05); implemented autonomous field-path replay and touch-based Draw Lane navigation.",
    technologies: ["Java", "Android 14", "HC-05 Bluetooth", "Sensor Integration"],
    architecture: [
      "Android App",
      "HC-05 Bluetooth Link",
      "Soil Sensor Package",
      "Path Replay Engine",
    ],
    challenges: [
      "Reliable sensor-to-app data sync",
      "Accurate trajectory reproduction",
      "Coordinating app-to-hardware automation",
    ],
    results: [
      "Successful field trials",
      "Autonomous seeding / sprinkling / ploughing",
    ],
    featured: false,
  },
];
