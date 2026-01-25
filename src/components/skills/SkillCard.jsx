import { motion } from "framer-motion";
import { useState } from "react";
import { CATEGORY_COLORS, cardReveal } from "../../constants/skills/data.js";

const SkillCard = ({ skill, category, loadout, setSpotlight }) => {
  const color = CATEGORY_COLORS[category];
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <motion.div
      variants={cardReveal}
      className={`relative cursor-pointer ${isHovered ? "z-40" : "z-10"}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => loadout && setSpotlight({ ...skill, category })}
    >
      {/* Hover pulse ring */}
      {isHovered && (
        <motion.div
          className={`absolute inset-0 rounded-xl border ${color.borderActive}`}
          initial={{ scale: 1, opacity: 0.6 }}
          animate={{ scale: 1.15, opacity: 0 }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />
      )}

      {/* ================= MAIN CARD ================= */}
      <motion.div
        className={`
          relative overflow-hidden rounded-xl border bg-black/70 p-5 text-center
          transition-all duration-300
          ${isHovered ? color.borderActive : color.border}
        `}
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "100% 3px",
          }}
        />

        {/* Floating content */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-3"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Icon */}
          <div className="relative">
            <motion.div
              className={`absolute inset-0 rounded-lg ${color.bg} blur-xl`}
              animate={{
                opacity: isHovered ? 0.6 : 0,
                scale: isHovered ? 1.3 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-lg border
                ${loadout || isHovered ? color.borderActive : color.border}
                ${color.bg}`}
            >
              <Icon className={`h-5 w-5 ${color.icon}`} />
            </div>
          </div>

          {/* Name */}
          <span className="text-sm font-medium tracking-wide text-white">
            {skill.name}
          </span>
        </motion.div>
      </motion.div>

      {/* ================= BOTTOM HUD (ABOVE ALL) ================= */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-full mt-3 w-[90%]
            translate-x-2 z-60"
        initial={{ opacity: 0, y: -6 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : -6,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          className={`relative overflow-hidden rounded-md border px-3 py-2
            bg-black/90 ${color.border}`}
        >
          {/* HUD scanlines */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "100% 2px",
            }}
          />
          <div className="relative z-10 flex flex-col text-left">
            <span className="text-[10px] font-mono text-gray-400">
              {skill.hud || "Advanced proficiency"}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
