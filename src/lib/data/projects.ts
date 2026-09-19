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
      "ISRO IRoC-U 2025 autonomous UAV system for GPS/GNSS-denied navigation and autonomous mission execution — AIR 1 among 500+ teams.",
    problem:
      "Autonomous drones must navigate and land without GNSS in dynamic, GPS-denied environments, requiring precise local mapping and real-time mission control.",
    solution:
      "Developed 2D → 2.5D LiDAR terrain mapping using point-cloud processing and statistical filtering for sub-metre GPS-free navigation; implemented autonomous arm, takeoff, waypoint navigation, and landing sequences via embedded C++ command-and-control over MAVSDK/MAVLink; built a Flask REST API backend for distributed subsystem communication and WebSocket streaming for real-time telemetry; developed modular OpenCV-based landing-zone detection.",
    technologies: ["C++", "Python", "ROS", "MAVSDK/MAVLink", "Flask", "OpenCV", "LiDAR", "WebSockets"],
    architecture: [
      "Flask REST API Backend",
      "2D → 2.5D LiDAR Mapping",
      "OpenCV Landing-Zone Detection",
      "MAVSDK/MAVLink Command & Control",
      "WebSocket Real-time Telemetry",
    ],
    challenges: [
      "GPS-free localization to sub-metre accuracy",
      "Real-time landing-zone detection and flatness scoring",
      "System integration, testing, debugging, and field validation",
    ],
    results: [
      "AIR 1 / 500+ Teams",
      "Sub-metre GPS-free navigation accuracy during field testing",
    ],
    featured: true,
  },
  {
    id: "adversia",
    title: "Adversia — AI Payment Security Lab",
    category: "AI / Security",
    description:
      "AI Red Team ↔ Blue Team payment fraud detection and adversarial security system built for the Mastercard Hackathon.",
    problem:
      "Payment fraud-detection systems need robust defence against adversarial attacks and a way to continuously improve from them.",
    solution:
      "Built a simulated payment ecosystem with 2,061 customers, 1,327 merchants, and 361K simulated transactions spanning multiple fraud scenarios across 7 fraud families; engineered 83 behavioral/causal features; trained Histogram Gradient Boosting and Random Forest detection models; developed an adaptive Red Team ↔ Blue Team loop where adversarial attacks were generated and used to improve the defensive model; implemented model explainability with TreeSHAP and integrated the ML system into a Next.js + Docker application.",
    technologies: ["Python", "NumPy", "Pandas", "Adversarial ML", "TreeSHAP", "Histogram-GBDT", "Random Forest", "Next.js", "Docker"],
    architecture: [
      "Simulated Payment Ecosystem",
      "83 Behavioral/Causal Features",
      "Histogram GBDT + Random Forest",
      "Red Team ↔ Blue Team Loop",
      "TreeSHAP Explainability",
      "Next.js + Docker App",
    ],
    challenges: [
      "Generating realistic adversarial attack scenarios",
      "Improving adversarial recall without inflating false positives",
      "Comprehensive unit and end-to-end testing",
    ],
    results: [
      "92/92 unit tests",
      "14/14 end-to-end tests",
      "Adversarial recall improved by 13.5 pp",
      "F1 improved: 0.357 → 0.519",
    ],
    featured: true,
  },
  {
    id: "sovereignguard",
    title: "SovereignGuard — Secure LLM Data Pipeline",
    category: "AI / Privacy",
    description:
      "Secure and sovereign LLM data pipeline that lets organizations use LLMs with proprietary data without exposing it to external model providers — B.E. capstone.",
    problem:
      "Organizations need LLMs for confidential data but risk unnecessarily exposing proprietary information to external model providers.",
    solution:
      "Designing secure enterprise data ingestion pipelines with classification of incoming data, PII and sensitive-data detection, anonymization and preprocessing, tenant isolation between organizations, organization-specific RAG pipelines, LoRA/PEFT fine-tuning of open-weight LLMs, and self-hosted inference to reduce dependence on external model APIs.",
    technologies: ["Python", "Docker", "LLMs", "RAG", "LoRA/PEFT", "Data Privacy", "Governance"],
    architecture: [
      "Secure Data Ingestion",
      "PII / Sensitive-Data Detection",
      "Anonymization & Preprocessing",
      "Tenant Isolation",
      "Organization-specific RAG",
      "LoRA/PEFT Fine-tuning",
      "Self-hosted Inference",
    ],
    challenges: [
      "Keeping confidential data out of external LLM calls",
      "Maintaining tenant isolation between organizations",
      "Embedding data privacy and governance into the pipeline",
    ],
    results: [
      "B.E. Capstone — Ongoing",
    ],
    featured: true,
  },
  {
    id: "green-model-advisor",
    title: "Green Model Advisor",
    category: "AI / Sustainability",
    description:
      "Carbon-aware AI inference router that dynamically selects LLM/inference routes based on latency, accuracy, computational cost, and estimated CO₂ emissions.",
    problem:
      "LLM selection for inference ignores engineering constraints and environmental impact, leading to unnecessary compute and emissions.",
    solution:
      "Built a FastAPI microservice that dynamically selects an appropriate LLM/inference route based on latency, accuracy, computational cost, and estimated carbon emissions, with real-time CO₂ tracking and Dockerized deployment.",
    technologies: ["Python", "FastAPI", "Docker", "CodeCarbon", "LLMs", "REST APIs"],
    architecture: [
      "FastAPI Microservice",
      "Constraint-aware Selection Engine",
      "CodeCarbon CO₂ Tracking",
      "Dockerized Deployment",
    ],
    challenges: [
      "Balancing latency, cost, and accuracy trade-offs",
      "Real-time carbon estimation",
    ],
    results: [
      "45% reduction in compute usage vs static model selection (CO₂-tracking benchmarks)",
    ],
    featured: true,
  },
  {
    id: "isro-bah-satellite",
    title: "Satellite Air Pollution Analytics",
    category: "AI / Data",
    description:
      "ISRO Bharatiya Antariksh AI/ML Hackathon 2025 end-to-end ML/data pipeline for analysing satellite and environmental data for air-pollution analysis — Top 28 / 8,744 teams.",
    problem:
      "Accurately predicting air quality from heterogeneous, multi-source satellite data requires robust ingestion and feature engineering.",
    solution:
      "Built a 5-year multi-source data ingestion pipeline; cleaned and transformed heterogeneous satellite/environmental datasets; performed feature engineering across 40+ raw variables, distilling them to 12 high-signal features; built and evaluated machine-learning prediction models.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Engineering", "Machine Learning"],
    architecture: [
      "5-year Data Ingestion",
      "Cleaning & Transformation",
      "Feature Engineering (12 vars)",
      "ML Prediction Models",
      "Evaluation",
    ],
    challenges: [
      "Heterogeneous multi-source satellite data",
      "Feature selection from 40+ raw variables",
      "Accuracy and F1 tuning",
    ],
    results: [
      "Top 28 / 8,744 Teams",
      "88% prediction accuracy",
      "F1 improved 15% on held-out satellite AQI data",
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