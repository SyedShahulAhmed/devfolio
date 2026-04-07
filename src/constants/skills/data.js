import {
  Code2,
  Database,
  Atom,
  Triangle,
  Server,
  Globe,
  Workflow,
  Layers,
  Sparkles,
  Smartphone,
  Monitor,
  GitBranch,
  Container,
  Cloud,
  Settings,
  Wrench,
  Rocket,
  BarChart3,
} from "lucide-react";
import { AiOutlineOpenAI } from "react-icons/ai";
import { CgVercel } from "react-icons/cg";
import {
  FaDiscord,
  FaDribbble,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { FaCss3, FaHtml5, FaJava } from "react-icons/fa6";
import { FiFramer } from "react-icons/fi";
import { GrGithub } from "react-icons/gr";
import { RiGeminiLine } from "react-icons/ri";
import {
  SiClaude,
  SiExpress,
  SiJavascript,
  SiMetasploit,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNotion,
  SiNumpy,
  SiPandas,
  SiPostman,
  SiPrettier,
  SiReactrouter,
  SiRender,
  SiShadcnui,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const EASE = [0.16, 1, 0.3, 1];

export const categoryReveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

/* ===================== CATEGORIES ===================== */

export const CATEGORIES = [
  {
    title: "PROGRAMMING LANGUAGES",
    subtitle: "Core coding languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript || Code2, hud: "Primary scripting language" },
      { name: "TypeScript", icon: SiTypescript || Code2, hud: "Typed JavaScript for scalable apps" },
      { name: "Python", icon: FaPython || Code2, hud: "Automation & data processing" },
      { name: "Java", icon: FaJava || Code2, hud: "Object-oriented programming" },
      { name: "HTML", icon: FaHtml5 || Code2, hud: "Web structure" },
      { name: "CSS", icon: FaCss3 || Code2, hud: "Styling & layouts" },
    ],
  },

  {
    title: "FRONTEND DEVELOPMENT",
    subtitle: "UI & client-side technologies",
    skills: [
      { name: "React", icon: FaReact || Atom, hud: "Modern UI development" },
      { name: "Next.js", icon: SiNextdotjs || Triangle, hud: "Full-stack React framework" },
      { name: "React Router", icon: SiReactrouter || Globe, hud: "Routing system" },
      { name: "Framer Motion", icon: FiFramer || Triangle, hud: "Animations & interactions" },
      { name: "shadcn/ui", icon: SiShadcnui || Settings, hud: "Modern UI components" },
      { name: "Responsive Design", icon: Smartphone, hud: "Mobile-first design" },
      { name: "Accessibility", icon: Monitor, hud: "Inclusive UX practices" },
    ],
  },

  {
    title: "BACKEND DEVELOPMENT",
    subtitle: "Server & API development",
    skills: [
      { name: "Node.js", icon: FaNodeJs || Server, hud: "Runtime environment" },
      { name: "Express", icon: SiExpress || Globe, hud: "Backend framework" },
      { name: "Mongoose", icon: SiMongoose || Database, hud: "MongoDB ORM" },
    ],
  },

  {
    title: "DATABASES & APIs",
    subtitle: "Data handling & API tools",
    skills: [
      { name: "MongoDB", icon: SiMongodb || Database, hud: "NoSQL database" },
      { name: "Postman", icon: SiPostman || Container, hud: "API testing" },
    ],
  },

  {
    title: "DATA SCIENCE & ANALYSIS",
    subtitle: "Data processing tools",
    skills: [
      { name: "NumPy", icon: SiNumpy || Layers, hud: "Numerical computing" },
      { name: "Pandas", icon: SiPandas || Layers, hud: "Data manipulation" },
      { name: "Matplotlib", icon: SiMetasploit || Monitor, hud: "Data visualization" },
    ],
  },

  {
    title: "TOOLS & DEV ENVIRONMENT",
    subtitle: "Development workflow tools",
    skills: [
      { name: "Git", icon: GitBranch, hud: "Version control" },
      { name: "GitHub", icon: GrGithub || GitBranch, hud: "Code hosting" },
      { name: "VS Code", icon: VscVscode || Monitor, hud: "Code editor" },
      { name: "Prettier", icon: SiPrettier || Settings, hud: "Code formatting" },
      { name: "Notion", icon: SiNotion || Monitor, hud: "Documentation" },
      { name: "Discord", icon: FaDiscord || MessageCircle, hud: "Communication" },
    ],
  },

  {
    title: "DEPLOYMENT & HOSTING",
    subtitle: "Production & deployment platforms",
    skills: [
      { name: "Vercel", icon: CgVercel || Cloud, hud: "Frontend hosting" },
      { name: "Render", icon: SiRender || Cloud, hud: "Backend hosting" },
    ],
  },

  {
    title: "AI & CREATIVE TOOLS",
    subtitle: "AI + design ecosystem",
    skills: [
      { name: "ChatGPT", icon: AiOutlineOpenAI || Sparkles, hud: "AI-assisted development" },
      { name: "Gemini", icon: RiGeminiLine || Sparkles, hud: "AI content & assistance" },
      { name: "Claude", icon: SiClaude, hud: "AI reasoning" },
      { name: "Figma", icon: FaFigma || Palette, hud: "UI/UX design" },
      { name: "Dribbble", icon: FaDribbble || Palette, hud: "Design inspiration" },
      { name: "Antigravity", icon: Rocket, hud: "Creative exploration" },
    ],
  },
];

export const CATEGORY_THEME = {
  "PROGRAMMING LANGUAGES": {
    icon: Code2,
    iconBg: "bg-red-500/10",
    iconBorder: "border-red-500/60",
    iconText: "text-red-500",
    titleText: "text-red-500",
    line: "from-red-500/40",
  },

  "FRONTEND DEVELOPMENT": {
    icon: Monitor,
    iconBg: "bg-blue-400/10",
    iconBorder: "border-blue-400/60",
    iconText: "text-blue-400",
    titleText: "text-blue-300",
    line: "from-blue-400/40",
  },

  "BACKEND DEVELOPMENT": {
    icon: Server,
    iconBg: "bg-orange-400/10",
    iconBorder: "border-orange-400/60",
    iconText: "text-orange-400",
    titleText: "text-orange-300",
    line: "from-orange-400/40",
  },

  "DATABASES & APIs": {
    icon: Database,
    iconBg: "bg-green-400/10",
    iconBorder: "border-green-400/60",
    iconText: "text-green-400",
    titleText: "text-green-300",
    line: "from-green-400/40",
  },

  "DATA SCIENCE & ANALYSIS": {
    icon: BarChart3,
    iconBg: "bg-indigo-400/10",
    iconBorder: "border-indigo-400/60",
    iconText: "text-indigo-400",
    titleText: "text-indigo-300",
    line: "from-indigo-400/40",
  },

  "TOOLS & DEV ENVIRONMENT": {
    icon: Wrench,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/60",
    iconText: "text-amber-400",
    titleText: "text-amber-300",
    line: "from-amber-500/40",
  },

  "DEPLOYMENT & HOSTING": {
    icon: Cloud,
    iconBg: "bg-sky-400/10",
    iconBorder: "border-sky-400/60",
    iconText: "text-sky-400",
    titleText: "text-sky-300",
    line: "from-sky-400/40",
  },

  "AI & CREATIVE TOOLS": {
    icon: Sparkles,
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/60",
    iconText: "text-purple-400",
    titleText: "text-purple-300",
    line: "from-purple-500/40",
  },
};

export const CATEGORY_COLORS = {
  "PROGRAMMING LANGUAGES": {
    border: "border-red-500/40",
    borderActive: "border-red-500",
    icon: "text-red-500",
    bg: "bg-red-500/10",
  },

  "FRONTEND DEVELOPMENT": {
    border: "border-blue-400/40",
    borderActive: "border-blue-400",
    icon: "text-blue-400",
    bg: "bg-blue-400/10",
  },

  "BACKEND DEVELOPMENT": {
    border: "border-orange-400/40",
    borderActive: "border-orange-400",
    icon: "text-orange-400",
    bg: "bg-orange-400/10",
  },

  "DATABASES & APIs": {
    border: "border-green-400/40",
    borderActive: "border-green-400",
    icon: "text-green-400",
    bg: "bg-green-400/10",
  },

  "DATA SCIENCE & ANALYSIS": {
    border: "border-indigo-400/40",
    borderActive: "border-indigo-400",
    icon: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },

  "TOOLS & DEV ENVIRONMENT": {
    border: "border-amber-400/40",
    borderActive: "border-amber-400",
    icon: "text-amber-400",
    bg: "bg-amber-400/10",
  },

  "DEPLOYMENT & HOSTING": {
    border: "border-sky-400/40",
    borderActive: "border-sky-400",
    icon: "text-sky-400",
    bg: "bg-sky-400/10",
  },

  "AI & CREATIVE TOOLS": {
    border: "border-purple-400/40",
    borderActive: "border-purple-400",
    icon: "text-purple-400",
    bg: "bg-purple-400/10",
  },
};
