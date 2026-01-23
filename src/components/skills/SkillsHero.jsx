import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const heroReveal = {
  hidden: { opacity: 0, y: -30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

const SkillsHero = () => (
  <motion.div
    variants={heroReveal}
    initial="hidden"
    animate="show"
    className="px-4 py-4 sm:px-6"
  >
    {/* ================= QUOTE ================= */}
    <p className="text-center font-mono text-[12px] sm:text-xs tracking-widest text-red-600 mb-4 sm:mb-6">
      "THE SUIT DOESN'T MAKE THE HERO — BUT IT HELPS."
    </p>

    {/* ================= LOADOUT LABEL ================= */}
    <div className="flex justify-center items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap
          className="text-red-500 w-3.5 h-3.5 sm:w-4 sm:h-4"
          style={{
            filter: "drop-shadow(0 0 4px rgba(239,68,68,0.6))",
          }}
        />
      </motion.div>

      <span className="font-oxa font-bold text-[10px] sm:text-xs tracking-widest text-gray-400">
        ABILITY LOADOUT
      </span>

      <motion.div
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap
          className="text-red-500 w-3.5 h-3.5 sm:w-4 sm:h-4"
          style={{
            filter: "drop-shadow(0 0 4px rgba(239,68,68,0.6))",
          }}
        />
      </motion.div>
    </div>

    {/* ================= GLITCH TITLE ================= */}
    <motion.h1
      className="
        relative
        text-[30px] sm:text-[40px] md:text-[52px] lg:text-[68px]
        font-extrabold
        leading-tight
        text-white
        text-center
        mb-3 sm:mb-4
      "
    >
      {/* BASE TEXT */}
      <motion.span
        className="relative block"
        animate={{ opacity: [1, 1, 0.2, 1, 1] }}
        transition={{
          times: [0, 0.7, 0.75, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.45,
        }}
      >
        POWERS & ABILITIES
      </motion.span>

      {/* GLITCH SHAKE */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: [0, -6, 6, -3, 0],
          opacity: [0, 0, 1, 0, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.4,
          ease: "steps(2)",
        }}
      >
        POWERS & ABILITIES
      </motion.span>

      {/* CUT TOP */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: "inset(0 0 58% 0)" }}
        animate={{
          x: [0, 5, -5, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.4,
          ease: "steps(2)",
        }}
      >
        POWERS & ABILITIES
      </motion.span>

      {/* CUT BOTTOM */}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: "inset(58% 0 0 0)" }}
        animate={{
          x: [0, -5, 5, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.4,
          ease: "steps(2)",
        }}
      >
        POWERS & ABILITIES
      </motion.span>
    </motion.h1>

    {/* ================= DESCRIPTION ================= */}
    <p className="text-center font-oxa text- sm:text-base md:text-lg text-gray-400 max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12">
      Built for speed, scalability, and precision. Every tool mastered, every
      framework conquered.
    </p>
  </motion.div>
);

export default SkillsHero;
