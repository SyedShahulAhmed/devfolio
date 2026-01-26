import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { Code2, Layers, Palette, Wrench } from "lucide-react";

/* ================= CATEGORY THEME ================= */
const CATEGORY_THEME = {
  "CORE POWERS": {
    icon: Code2,
    iconBg: "bg-red-500/10",
    iconBorder: "border-red-500/60",
    iconText: "text-red-500",
    titleText: "text-red-500",
    line: "from-red-500/40",
  },
  "TECH SUIT MODULES": {
    icon: Layers,
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/60",
    iconText: "text-cyan-400",
    titleText: "text-cyan-300",
    line: "from-cyan-400/40",
  },
  "VISUAL SYSTEMS": {
    icon: Palette,
    iconBg: "bg-purple-500/10",
    iconBorder: "border-purple-500/60",
    iconText: "text-purple-400",
    titleText: "text-purple-300",
    line: "from-purple-500/40",
  },
  "GADGETS & TOOLS": {
    icon: Wrench,
    iconBg: "bg-amber-500/10",
    iconBorder: "border-amber-500/60",
    iconText: "text-amber-400",
    titleText: "text-amber-300",
    line: "from-amber-500/40",
  },
};

const FALLBACK_THEME = CATEGORY_THEME["CORE POWERS"];

const CategorySection = ({ category, loadout, setSpotlight }) => {
  const theme = CATEGORY_THEME[category.title] || FALLBACK_THEME;
  const Icon = theme.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-16"
    >
      {/* ================= CATEGORY HEADER ================= */}
      <div className="relative mb-8">
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "100% 3px",
          }}
        />

        <div className="relative z-10 flex items-center gap-4">
          {/* ICON */}
          <motion.div
            className={`flex h-10 w-10 items-center justify-center rounded-md border ${theme.iconBorder} ${theme.iconBg}`}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <Icon className={`w-5 h-5 ${theme.iconText}`} />
          </motion.div>

          {/* TITLE */}
          <div>
            <h2
              className={`text-lg font-semibold tracking-widest ${theme.titleText}`}
            >
              {category.title}
            </h2>

            {/* Underline */}
            <div
              className={`mt-1 h-px w-40 bg-gradient-to-r ${theme.line} to-transparent`}
            />

            <p className="mt-1 text-xs font-mono tracking-wide text-gray-400">
              {category.subtitle}
            </p>
          </div>

          {/* HUD EXTENSION */}
          <div
            className={`flex-1 h-px bg-gradient-to-r ${theme.line} to-transparent ml-4`}
          />
        </div>
      </div>
      {/* ================= END HEADER ================= */}

      {/* ================= SKILLS GRID ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            category={category.title}
            loadout={loadout}
            setSpotlight={setSpotlight}
          />
        ))}
      </div>
      {/* ================= END GRID ================= */}
    </motion.div>
  );
};

export default CategorySection;
