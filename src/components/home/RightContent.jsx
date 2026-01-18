import MenuGrid from "./MenuGrid";
import Typewriter from "./Typewriter";
import { motion } from "framer-motion";

const RightContent = () => {
  return (
    <div className="text-center lg:text-left">
      <div className="text-[11px] tracking-[0.35em] font-extrabold text-cyan-400 mb-1">
        {">"} SYSTEM INITIALIZED
      </div>

      <motion.h1
        className="
    relative
    text-[44px] sm:text-[56px] lg:text-[72px]
    font-extrabold
    leading-tight
    text-white
  "
      >
        {/* BASE TEXT */}
        <motion.span
          className="relative block"
          animate={{
            opacity: [1, 1, 0.2, 1, 1],
          }}
          transition={{
            times: [0, 0.7, 0.75, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 4,
            duration: 0.4,
          }}
        >
          SOFTWARE
        </motion.span>

        {/* GLITCH LAYER */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          animate={{
            x: [0, -8, 8, -4, 0],
            opacity: [0, 0, 1, 0, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 0.4,
            ease: "steps(2)",
          }}
        >
          SOFTWARE
        </motion.span>

        {/* CUT TOP */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: "inset(0 0 55% 0)" }}
          animate={{
            x: [0, 6, -6, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 0.4,
            ease: "steps(2)",
          }}
        >
          SOFTWARE
        </motion.span>

        {/* CUT BOTTOM */}
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{ clipPath: "inset(55% 0 0 0)" }}
          animate={{
            x: [0, -6, 6, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatDelay: 4,
            duration: 0.4,
            ease: "steps(2)",
          }}
        >
          SOFTWARE
        </motion.span>
      </motion.h1>

      <h2 className="mt-1 text-[26px] sm:text-[32px] lg:text-[38px] font-semibold text-cyan-400 glow-cyan">
        <Typewriter text="DEVELOPER & ENGINEER" />
      </h2>

      <p className="mt-3 max-w-md mx-auto lg:mx-0 text-[14px] text-[#8faab3] leading-relaxed">
        Crafting digital experiences with code and passion. Ready to embark on
        your next mission.
      </p>

      <MenuGrid />
    </div>
  );
};

export default RightContent;
