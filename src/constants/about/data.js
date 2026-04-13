// src/components/about/data.js

import {
  BookOpen,
  Code,
  Star,
  Skull,
  Coffee,
  Gamepad2,
  Heart,
  Book,
  Music,
  MapPin,
  Calendar,
  Info,
  Waypoints,
} from "lucide-react";
import { BiSolidSchool } from "react-icons/bi";
import { FaSchool, FaUniversity } from "react-icons/fa";
import { SiSourceforge } from "react-icons/si";

/* ===================== JOURNAL CHAPTERS ===================== */

export const chapters = [
  {
    chapter: "PROLOGUE",
    title: "THE BEGINNING",
    content: `I’m <span class="font-semibold text-orange-300">Syed Shahul Ahmed</span>, from Nellore, Andhra Pradesh, India.
    
A <span class="text-orange-200 font-medium">curious mind</span>, a quiet start — and a screen that slowly became my world.
What began as <span class="italic text-orange-300">exploration</span> turned into <span class="font-semibold text-orange-400">purpose</span>.

This journey wasn’t planned. It was built — <span class="font-semibold text-orange-300">line by line</span>.`,

    quote: "We’re thieves in a world that don’t want us no more.",
    quoteAuthor: "— Arthur Morgan",
    icon: SiSourceforge,
    variant: "prologue",
  },

  {
    chapter: "CHAPTER I",
    title: "SCHOOL — THE FOUNDATION",
    content: `<span class="font-semibold text-orange-300">Saint Paul’s High School</span> (2019 – 2020)

<span class="text-orange-200">Discipline. Curiosity. Strong fundamentals.</span>
Scored <span class="font-bold text-orange-400">95.17%</span>, with a deep interest in <span class="italic">science and mathematics</span>.

This is where the <span class="font-semibold text-orange-300">mindset was built</span> — to learn, adapt, and grow.`,
    icon: FaSchool,
  },

  {
    chapter: "CHAPTER II",
    title: "INTERMEDIATE — THE SHIFT",
    content: `<span class="font-semibold text-orange-300">Narayana Junior College</span> (2020 – 2022)

<span class="font-medium text-orange-200">MPC — Mathematics, Physics, Chemistry</span>
Scored <span class="font-bold text-orange-400">91.9%</span>.

<span class="italic">Logic became sharper.</span> Problem-solving became natural.
The transition from <span class="text-orange-300">learning</span> to <span class="font-semibold text-orange-400">application</span> began here.`,
    icon: BiSolidSchool,
  },

  {
    chapter: "CHAPTER III",
    title: "B.TECH — AI & DATA SCIENCE",
    content: `<span class="font-semibold text-orange-300">NBKR Institute of Science and Technology</span> (2022 – 2026)

Currently in <span class="font-semibold">final year</span> — CGPA: <span class="font-bold text-orange-400">8.87</span>

Diving deep into <span class="text-orange-300">AI</span>, <span class="text-orange-300">Data Science</span>, and <span class="font-semibold text-orange-400">Full Stack Development</span>.
Building <span class="italic">real-world projects</span>, solving <span class="font-medium">real problems</span>.

This is the <span class="font-semibold text-orange-300">proving ground</span> — where knowledge meets execution.`,
    icon: FaUniversity,
  },

  {
    chapter: "CHAPTER IV",
    title: "BEYOND CODE",
    content: `Not everything is code.

<span class="font-semibold text-orange-300">Gaming</span> sharpens strategy.
<span class="font-semibold text-orange-300">Music</span> brings balance.
<span class="font-semibold text-orange-300">Reading</span> fuels imagination.

These aren’t distractions — they are <span class="italic text-orange-400">part of the system</span>.`,
    icon: Code,
  },

  {
    chapter: "EPILOGUE",
    title: "THE ROAD AHEAD",
    content: `<span class="italic">Still learning. Still building.</span>

From a <span class="text-orange-300">student</span> to a <span class="font-semibold text-orange-400">developer</span> — the transition is in progress.
The goal is simple: <span class="font-semibold">create</span>, <span class="font-semibold">impact</span>, and <span class="font-semibold">evolve</span>.

This story isn’t finished. It’s <span class="font-bold text-orange-400">just getting started</span>.`,

    quote: "Some things I can’t change. But I can try.",
    quoteAuthor: "— John Marston",
    icon: Waypoints,
    variant: "epilogue",
  },
];

/* ===================== WANTED POSTER DATA ===================== */

export const crimes = [
  "JS Abuse",
  "Illegal APIs",
  "Night Debugging",
  "MERN Violations",
  "DB Tampering",
];

export const stats = [
  { label: "Years Riding Code", value: "3+" },
  { label: "Projects Survived", value: "50+" },
  { label: "Bugs Defeated", value: "1K+" },
  { label: "Ideas Shipped", value: "10+" },
];

export const interests = [
  { icon: Code, label: "Full Stack " },
  { icon: Gamepad2, label: "Gaming" },
  { icon: Book, label: "Reading" },
  { icon: Music, label: "Music" },
];

export const footerData = [
  { label: "Location", value: "India", icon: MapPin, delay: 0 },
  { label: "Active Since", value: "2024", icon: Calendar, delay: 0.3 },
  { label: "Status", value: "Active & Building", icon: Skull, delay: 0.6 },
  { label: "Reputation", value: "Rising", icon: Star, delay: 0.9 },
];
