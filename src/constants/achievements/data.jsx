import { tr } from "framer-motion/client";
import {
  GraduationCap,
  Code2,
  Rocket,
  ScrollText,
  BookOpen,
  Briefcase,
  Award,
  Target,
  FolderOpen,
  Trophy,
  Calendar,
  Github,
  Download,
  Mail,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

/* =========================================================
   DATA
========================================================= */

const milestones = [
  {
    level: 1,
    icon: <GraduationCap size={18} />,
    title: "B.Tech in Artificial Intelligence & Data Science",
    subtitle: "NBKR Institute of Science and Technology, Nellore",
    date: "Aug 2022 – May 2026",
    description:
      "Pursuing B.Tech in AI & Data Science with focus on ML, data analysis, and software development.",
    skills: ["Artificial Intelligence", "Data Science", "Java", "DSA"],
    impact: "CGPA: 8.5/10",
  },
  {
    level: 1,
    icon: <BookOpen size={18} />,
    title: "Civic Connect",
    subtitle: "AI Civic Complaint Platform",
    date: "2026",
    description:
      "Built a MERN-based platform for reporting and tracking civic issues with AI , geolocation mapping, and transparency-focused workflows.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Mapbox"],
    impact: "Production Ready",
  },
  {
    level: 2,
    icon: <SiLeetcode size={18} />,
    title: "400+ DSA Problems Solved",
    subtitle: "LeetCode",
    date: "2025 – Present",
    description:
      "Continuously learning and solving DSA problems across arrays, trees, graphs, and dynamic programming to strengthen problem-solving skills.",
    impact: "Top 10%",
  },
  {
    level: 2,
    icon: <Code2 size={18} />,
    title: "Full Stack Development",
    subtitle: "Self-Driven Learning",
    date: "2024 – Present",
    description:
      "Developing modern full-stack applications with MERN and Next.js, focusing on authentication systems, scalable APIs.",
    skills: ["React", "Next.js", "Node.js", "Express", "MongoDB"],
  },
  {
    level: 3,
    icon: <Briefcase size={18} />,
    title: "MERN Stack Intern",
    subtitle: "Brainovision Solutions India Pvt. Ltd.",
    date: "Jun 2025 – Aug 2025",
    description:
      "Worked on MERN stack applications, gaining hands-on experience in building full-stack features, APIs, and real-world project workflows.",
    skills: ["React", "Node.js", "Express", "MongoDB"],
    impact: "2-Month Internship",
  },
  {
    level: 3,
    icon: <Rocket size={18} />,
    title: "MediaVerse",
    subtitle: "Full Stack Analytics Platform",
    date: "2025",
    description:
      "Developed a full-stack MERN platform for tracking media with analytics, gamified badges, and social features for enhanced user engagement.",
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    impact: "Production Ready",
  },
  {
    level: 4,
    icon: <ScrollText size={18} />,
    title: "DevOps on AWS",
    subtitle: "Amazon Web Services (edX XSeries)",
    date: "July 2024",
    description:
      "Completed AWS DevOps XSeries program, gaining practical knowledge in cloud infrastructure, CI/CD pipelines, and scalable deployment strategies.",
    impact: "Certified by AWS & edX",
  },
  {
    level: 4,
    icon: <Award size={18} />,
    title: "Google Cloud Computing Foundations",
    subtitle: "Google Cloud x edX",
    date: "August 2024",
    description:
      "Completed Google Cloud Professional Certificate, gaining hands-on knowledge of cloud infrastructure, services, and deployment fundamentals.",
    impact: "Certified by Google Cloud",
  },
];

const skillTree = [
  {
    id: "core",
    title: "Core Programming",
    value: 90,
    description: "Strong fundamentals in problem solving & logic.",
    x: 10,
    y: 10,
  },
  {
    id: "dsa",
    title: "DSA",
    value: 85,
    description: "Data structures & algorithm mastery.",
    x: 20,
    y: 40,
  },
  {
    id: "mern",
    title: "MERN Stack",
    value: 78,
    description: "Full-stack application development.",
    x: 80,
    y: 40,
  },
  {
    id: "api",
    title: "REST APIs",
    value: 80,
    description: "Backend architecture & authentication.",
    x: 20,
    y: 75,
  },
  {
    id: "git",
    title: "Git & GitHub",
    value: 88,
    description: "Version control & collaboration workflow.",
    x: 80,
    y: 75,
  },
];

const levelFiveSkills = [
  {
    id: 1,
    name: "Blade of Logic",
    subtitle: "Data Structures & Algorithms",
    icon: "dsa",
    tasks: [
      { name: "Big-O Analysis", unlocked: true },
      { name: "Arrays", unlocked: true },
      { name: "Strings", unlocked: true },
      { name: "Two Pointers", unlocked: true },
      { name: "Sliding Window", unlocked: true },
      { name: "Hashing (Maps & Sets)", unlocked: true },
      { name: "Binary Search", unlocked: true },
      { name: "Sorting Algorithms", unlocked: true },
      { name: "Recursion", unlocked: true },
      { name: "Backtracking", unlocked: false },
      { name: "Linked Lists", unlocked: true },
      { name: "Stacks & Queues", unlocked: true },
      { name: "Trees (Binary Trees, BST)", unlocked: false },
      { name: "Heaps / Priority Queue", unlocked: false },
      { name: "Greedy Algorithms", unlocked: false },
      { name: "Dynamic Programming", unlocked: false },
      { name: "Graphs (BFS, DFS)", unlocked: false },
      { name: "Shortest Path (Dijkstra, Floyd)", unlocked: false },
      { name: "Union Find (Disjoint Set)", unlocked: false },
      { name: "Trie (Prefix Trees)", unlocked: false },
      { name: "Bit Manipulation", unlocked: false },
      { name: "Advanced Problem Patterns", unlocked: false },
    ],
  },
  {
    id: 2,
    name: "Forge of Systems",
    subtitle: "Advanced MERN & Full-Stack Systems",
    icon: "mern",
    tasks: [
      { name: "Project Architecture Planning", unlocked: true },
      { name: "MVC & Folder Structuring", unlocked: true },
      { name: "REST API Design Principles", unlocked: true },
      { name: "JWT Authentication", unlocked: true },
      { name: "Role-Based Access Control (RBAC)", unlocked: true },
      { name: "Database Design & Indexing", unlocked: true },
      {
        name: "File Upload & Cloud Storage (Cloudinary)",
        unlocked: true,
      },
      { name: "Caching (Redis)", unlocked: false },
      { name: "API Optimization & Pagination", unlocked: true },
      { name: "Rate Limiting & Security (Helmet, CORS)", unlocked: true },
      {
        name: "Payment Gateway Integration (Stripe/Razorpay)",
        unlocked: false,
      },
      { name: "Real-Time Features (Socket.io)", unlocked: false },
      { name: "Background Jobs & Queues (BullMQ)", unlocked: false },
      { name: "Testing (Jest / Supertest)", unlocked: false },
      { name: "Error Handling & Logging", unlocked: true },
      { name: "Deployment (Vercel / AWS / Render)", unlocked: true },
      { name: "CI/CD Pipelines (GitHub Actions)", unlocked: true },
      { name: "Docker & Containerization", unlocked: false },
      { name: "Production Monitoring (Logs, Metrics)", unlocked: false },
      { name: "Scalability & System Design Basics", unlocked: false },
    ],
  },
  {
    id: 3,
    name: "Mind of the All-Father",
    subtitle: "AI Tools & Applied Intelligence",
    icon: "ai",
    tasks: [
      { name: "Prompt Engineering Basics", unlocked: true },
      { name: "Advanced Prompt Structuring", unlocked: true },
      { name: "AI APIs Integration (OpenAI / Gemini)", unlocked: true },
      { name: "AI Chatbot ", unlocked: false },
      { name: "LangChain Fundamentals", unlocked: false },
      { name: "Vector Databases (Pinecone / FAISS)", unlocked: false },
      { name: "RAG (Retrieval-Augmented Generation)", unlocked: false },
      { name: "AI Workflow Automation (Agents)", unlocked: false },
      { name: "Fine-Tuning & Model Customization", unlocked: false },
      { name: "AI SaaS Product (Production Ready)", unlocked: false },
    ],
  },
  {
    id: 4,
    name: "Trial of Champions",
    subtitle: "Interview Preparation",
    icon: "interview",
    tasks: [
      { name: "Resume Optimization", unlocked: true },
      { name: "LinkedIn & Portfolio Optimization", unlocked: true },
      { name: "Behavioral Questions ", unlocked: true },
      { name: "DSA Core Revision ", unlocked: true },
      { name: "Mock Technical Interviews", unlocked: false },
      { name: "Project Deep Dive ", unlocked: true },
      { name: "System Design Fundamentals", unlocked: false },
      { name: "HR & Managerial Interview Prep", unlocked: false },
      { name: "Company-Specific Preparation & Strategy", unlocked: false },
    ],
  },
];
const statsData = [
  {
    icon: FolderOpen,
    value: "7+",
    label: "Projects Built",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: Trophy,
    value: "400+",
    label: "Problems Solved",
  },
  {
    icon: Calendar,
    value: "25+",
    label: "Months Learning",
  },
  {
    icon: Github,
    value: "1500+",
    label: "GitHub Contributions",
  },
];

/* =========================================================
   ADVANCED SKILL TREE (HIERARCHICAL)
========================================================= */

const advancedSkillTree = [
  { id: "core", label: "Software Engineer Core", unlocked: true },

  /* PROGRAMMING */
  {
    id: "programming-root",
    label: "Programming",
    parent: "core",
    unlocked: true,
  },

  {
    id: "languages",
    label: "Languages",
    parent: "programming-root",
    unlocked: true,
  },
  { id: "java", label: "Java", parent: "languages", unlocked: true },
  { id: "python", label: "Python", parent: "languages", unlocked: true },
  {
    id: "javascript",
    label: "JavaScript",
    parent: "languages",
    unlocked: true,
  },

  {
    id: "core-concepts",
    label: "Core Concepts",
    parent: "programming-root",
    unlocked: true,
  },
  { id: "oop", label: "OOP", parent: "core-concepts", unlocked: true },
  {
    id: "ds-basic",
    label: "Data Structures",
    parent: "core-concepts",
    unlocked: true,
  },
  {
    id: "design-patterns",
    label: "Design Patterns",
    parent: "core-concepts",
    unlocked: false,
  },
  {
    id: "solid",
    label: "SOLID Principles",
    parent: "core-concepts",
    unlocked: false,
  },

  {
    id: "api-design",
    label: "API Design",
    parent: "core-concepts",
    unlocked: true,
  },

  {
    id: "advanced-programming",
    label: "Advanced Programming",
    parent: "programming-root",
    unlocked: true,
  },
  {
    id: "multithreading",
    label: "Multithreading (Java)",
    parent: "advanced-programming",
    unlocked: false,
  },
  {
    id: "async",
    label: "Async / Concurrency",
    parent: "advanced-programming",
    unlocked: true,
  },
  {
    id: "memory",
    label: "Memory Management",
    parent: "advanced-programming",
    unlocked: false,
  },
  {
    id: "event-loop",
    label: "Event Loop (Node.js)",
    parent: "advanced-programming",
    unlocked: false,
  },
  /* PROBLEM SOLVING */
  {
    id: "problem-solving",
    label: "Problem Solving",
    parent: "core",
    unlocked: true,
  },

  /* FOUNDATIONS */
  {
    id: "ps-foundations",
    label: "Foundations",
    parent: "problem-solving",
    unlocked: true,
  },

  { id: "arrays", label: "Arrays", parent: "ps-foundations", unlocked: true },
  { id: "strings", label: "Strings", parent: "ps-foundations", unlocked: true },
  {
    id: "recursion",
    label: "Recursion",
    parent: "ps-foundations",
    unlocked: true,
  },

  /* CORE PATTERNS */
  {
    id: "two-pointer",
    label: "Two Pointers",
    parent: "arrays",
    unlocked: true,
  },
  {
    id: "sliding-window",
    label: "Sliding Window",
    parent: "arrays",
    unlocked: true,
  },
  {
    id: "binary-search",
    label: "Binary Search",
    parent: "arrays",
    unlocked: true,
  },
  { id: "hashing", label: "Hashing", parent: "strings", unlocked: true },
  {
    id: "string-manipulation",
    label: "String Manipulation",
    parent: "strings",
    unlocked: true,
  },

  {
    id: "backtracking",
    label: "Backtracking",
    parent: "recursion",
    unlocked: false,
  },
  {
    id: "dp",
    label: "Dynamic Programming",
    parent: "recursion",
    unlocked: false,
  },

  /* CORE DATA STRUCTURES */
  {
    id: "linked-list",
    label: "Linked List",
    parent: "ps-foundations",
    unlocked: true,
  },
  {
    id: "ll-reverse",
    label: "Reverse Linked List",
    parent: "linked-list",
    unlocked: true,
  },
  {
    id: "ll-cycle",
    label: "Cycle Detection (Floyd)",
    parent: "linked-list",
    unlocked: true,
  },
  {
    id: "ll-fast-slow",
    label: "Fast & Slow Pointer",
    parent: "linked-list",
    unlocked: true,
  },

  {
    id: "stack-queue",
    label: "Stacks & Queues",
    parent: "ps-foundations",
    unlocked: true,
  },
  {
    id: "stack-basic",
    label: "Stack (LIFO)",
    parent: "stack-queue",
    unlocked: true,
  },
  {
    id: "queue-basic",
    label: "Queue (FIFO)",
    parent: "stack-queue",
    unlocked: true,
  },
  {
    id: "monotonic-stack",
    label: "Monotonic Stack",
    parent: "stack-queue",
    unlocked: false,
  },

  /* ADVANCED (HIGH IMPACT ONLY) */
  {
    id: "advanced-ps",
    label: "Advanced Problem Solving",
    parent: "problem-solving",
    unlocked: false,
  },
  /* TREES */
  {
    id: "trees",
    label: "Trees",
    parent: "advanced-ps",
    unlocked: false,
  },
  {
    id: "tree-bfs",
    label: "Level Order (BFS)",
    parent: "trees",
    unlocked: false,
  },
  {
    id: "tree-dfs",
    label: "DFS (Pre/In/Post)",
    parent: "trees",
    unlocked: false,
  },
  {
    id: "bst",
    label: "Binary Search Tree (BST)",
    parent: "trees",
    unlocked: false,
  },
  {
    id: "lca",
    label: "Lowest Common Ancestor",
    parent: "trees",
    unlocked: false,
  },

  /* GRAPHS */
  {
    id: "graphs",
    label: "Graphs",
    parent: "advanced-ps",
    unlocked: false,
  },
  { id: "bfs", label: "BFS", parent: "graphs", unlocked: false },
  { id: "dfs", label: "DFS", parent: "graphs", unlocked: false },
  { id: "topo", label: "Topological Sort", parent: "graphs", unlocked: false },
  { id: "dijkstra", label: "Dijkstra", parent: "graphs", unlocked: false },

  /* HEAPS */
  {
    id: "heaps",
    label: "Heaps / Priority Queue",
    parent: "advanced-ps",
    unlocked: false,
  },
  { id: "min-heap", label: "Min Heap", parent: "heaps", unlocked: false },
  { id: "max-heap", label: "Max Heap", parent: "heaps", unlocked: false },
  {
    id: "heap-patterns",
    label: "Top K Elements",
    parent: "heaps",
    unlocked: false,
  },

  /* GREEDY */
  {
    id: "greedy",
    label: "Greedy Algorithms",
    parent: "advanced-ps",
    unlocked: false,
  },
  { id: "intervals", label: "Intervals", parent: "greedy", unlocked: false },
  {
    id: "activity",
    label: "Activity Selection",
    parent: "greedy",
    unlocked: false,
  },

  /* UNION FIND */
  {
    id: "union-find",
    label: "Union Find (DSU)",
    parent: "advanced-ps",
    unlocked: false,
  },
  {
    id: "find-union",
    label: "Find / Union",
    parent: "union-find",
    unlocked: false,
  },
  {
    id: "path-compression",
    label: "Path Compression",
    parent: "union-find",
    unlocked: false,
  },
  /* FULL STACK */
  { id: "fullstack", label: "Full Stack", parent: "core", unlocked: true },

  /* FRONTEND */
  { id: "frontend", label: "Frontend", parent: "fullstack", unlocked: true },

  { id: "react", label: "React", parent: "frontend", unlocked: true },
  { id: "next", label: "Next.js", parent: "frontend", unlocked: true },

  /* STYLING */
  { id: "tailwind", label: "Tailwind CSS", parent: "frontend", unlocked: true },

  /* ANIMATION */
  { id: "framer", label: "Framer Motion", parent: "frontend", unlocked: true },

  /* STATE MANAGEMENT */
  {
    id: "state",
    label: "State Management ",
    parent: "frontend",
    unlocked: false,
  },

  /* API HANDLING */
  {
    id: "api-client",
    label: "API Handling",
    parent: "frontend",
    unlocked: true,
  },

  { id: "backend", label: "Backend", parent: "fullstack", unlocked: true },

  { id: "node", label: "Node.js", parent: "backend", unlocked: true },
  { id: "express", label: "Express.js", parent: "backend", unlocked: true },

  /* ADD THESE */
  {
    id: "auth",
    label: "Authentication (JWT / OAuth)",
    parent: "backend",
    unlocked: true,
  },
  {
    id: "api-design",
    label: "REST API Design",
    parent: "backend",
    unlocked: true,
  },

  { id: "database", label: "Database", parent: "fullstack", unlocked: true },

  { id: "mongo", label: "MongoDB", parent: "database", unlocked: true },
  { id: "postgres", label: "PostgreSQL", parent: "database", unlocked: false },

  { id: "prisma", label: "Prisma ORM", parent: "database", unlocked: true },

  /* AI */
  { id: "ai", label: "AI Engineering", parent: "core", unlocked: true },

  /* PROMPTING */
  /* PROMPTING */
  { id: "prompt", label: "Prompt Engineering", parent: "ai", unlocked: true },
  {
    id: "prompt-struct",
    label: "Structured Prompting",
    parent: "prompt",
    unlocked: true,
  },
  {
    id: "prompt-fewshot",
    label: "Few-shot Prompting",
    parent: "prompt",
    unlocked: false,
  },
  {
    id: "prompt-role",
    label: "Role-based Prompting",
    parent: "prompt",
    unlocked: false,
  },

  /* LLM INTEGRATION */
  { id: "llm", label: "LLM Integration", parent: "ai", unlocked: false },
  {
    id: "openai-api",
    label: "OpenAI / Gemini API",
    parent: "llm",
    unlocked: false,
  },
  {
    id: "function-calling",
    label: "Function Calling",
    parent: "llm",
    unlocked: false,
  },
  {
    id: "streaming",
    label: "Streaming Responses",
    parent: "llm",
    unlocked: false,
  },

  /* LANGCHAIN */
  { id: "langchain", label: "LangChain", parent: "ai", unlocked: false },
  { id: "chains", label: "Chains", parent: "langchain", unlocked: false },
  { id: "memory", label: "Memory", parent: "langchain", unlocked: false },
  {
    id: "agents-lc",
    label: "Agents (LangChain)",
    parent: "langchain",
    unlocked: false,
  },

  /* RAG */
  { id: "rag", label: "RAG Systems", parent: "ai", unlocked: false },
  { id: "embeddings", label: "Embeddings", parent: "rag", unlocked: false },
  {
    id: "retrieval",
    label: "Retrieval Pipeline",
    parent: "rag",
    unlocked: false,
  },
  {
    id: "chunking",
    label: "Chunking Strategies",
    parent: "rag",
    unlocked: false,
  },

  /* AGENTS */
  { id: "agents", label: "AI Agents", parent: "ai", unlocked: false },
  { id: "tool-use", label: "Tool Usage", parent: "agents", unlocked: false },
  {
    id: "planning",
    label: "Planning & Execution",
    parent: "agents",
    unlocked: false,
  },
  {
    id: "multi-agent",
    label: "Multi-Agent Systems",
    parent: "agents",
    unlocked: false,
  },
];

export { milestones, skillTree, levelFiveSkills, statsData, advancedSkillTree };
