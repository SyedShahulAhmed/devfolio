import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { CATEGORY_THEME } from "../../constants/skills/data";
/* ================= CATEGORY THEME ================= */

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
              className={`mt-1 h-px w-40 bg-linear-to-r ${theme.line} to-transparent`}
            />

            <p className="mt-1 text-xs font-mono tracking-wide text-gray-400">
              {category.subtitle}
            </p>
          </div>

          {/* HUD EXTENSION */}
          <div
            className={`flex-1 h-px bg-linear-to-r ${theme.line} to-transparent ml-4`}
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
