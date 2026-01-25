import { motion } from "framer-motion";

const SkillsFooter = () => {
  return (
    <div className="mt-24 sm:mt-32 mb-8 sm:mb-10 flex flex-col items-center gap-5 sm:gap-6 px-4">
      {/* HUD LINE */}
      <div className="h-px w-32 sm:w-48 bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* STATUS PANEL */}
      <div className="relative max-w-full sm:max-w-xl px-4 sm:px-10 py-3 rounded-md border border-cyan-400/40 bg-black/60 backdrop-blur">
        {/* SUBTLE SCANLINES */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "100% 3px",
          }}
        />

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center">
          {/* LEFT DOT */}
          <motion.span
            className="h-2 w-2 rounded-full bg-green-400 shrink-0"
            animate={{
              opacity: [0.4, 1, 0.4],
              boxShadow: [
                "0 0 4px rgba(34,197,94,0.4)",
                "0 0 12px rgba(34,197,94,0.9)",
                "0 0 4px rgba(34,197,94,0.4)",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* TEXT */}
          <span className="text-[10px] sm:text-xs font-mono tracking-widest text-cyan-300 leading-relaxed">
            ABILITIES CONSTANTLY EVOLVING • ALWAYS ADAPTING
          </span>

          {/* RIGHT DOT */}
          <motion.span
            className="h-2 w-2 rounded-full bg-green-400 shrink-0"
            animate={{
              opacity: [0.4, 1, 0.4],
              boxShadow: [
                "0 0 4px rgba(34,197,94,0.4)",
                "0 0 12px rgba(34,197,94,0.9)",
                "0 0 4px rgba(34,197,94,0.4)",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsFooter;
