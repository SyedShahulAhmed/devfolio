import { motion } from "framer-motion";

const LoadoutToggle = ({ loadout, setLoadout }) => (
  <>
    <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
      <motion.button
        onClick={() => setLoadout(!loadout)}
        whileTap={{ scale: 0.96 }}
        className={`
          relative flex items-center gap-2 sm:gap-3
          
          px-4 py-2
          sm:px-6 sm:py-2.5
          md:px-8 md:py-3

          rounded-lg sm:rounded-xl
          
          font-hud
          text-[10px] sm:text-xs md:text-sm
          tracking-widest
          uppercase

          border
          backdrop-blur-md
          transition-colors duration-300
          whitespace-nowrap

          ${
            loadout
              ? `
                border-red-500/70
                text-red-200
                bg-red-500/15
              `
              : `
                border-cyan-400/40
                text-cyan-200/80
                bg-cyan-400/5
                hover:border-cyan-400/60
              `
          }
        `}
      >
        {/* STATUS DOT */}
        <motion.span
          animate={{
            scale: loadout ? [1, 1.3, 1] : 1,
            opacity: loadout ? [0.6, 1, 0.6] : 0.7,
          }}
          transition={{
            duration: 1.2,
            repeat: loadout ? Infinity : 0,
            ease: "easeInOut",
          }}
          className={`
            w-1.5 h-1.5 sm:w-2 sm:h-2
            rounded-full
            ${loadout ? "bg-red-400" : "bg-cyan-300/70"}
          `}
        />

        {/* LABEL */}
        <span className="text-center">
          {loadout ? "LOADOUT MODE: ACTIVE" : "ENABLE LOADOUT MODE"}
        </span>

        {/* INNER HUD STROKE */}
        <span
          className={`
            pointer-events-none
            absolute inset-0
            rounded-lg sm:rounded-xl
            border
            ${
              loadout
                ? "border-red-400/30"
                : "border-cyan-400/25"
            }
          `}
        />
      </motion.button>
    </div>

    {loadout && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          text-center
          font-mono
          tracking-widest
          text-cyan-200/60
          text-[10px] sm:text-xs
          px-4
          mb-10 sm:mb-12
        "
      >
        SELECT AN ABILITY TO VIEW DETAILED ANALYSIS
      </motion.p>
    )}
  </>
);

export default LoadoutToggle;
