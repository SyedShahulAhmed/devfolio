import { motion } from "framer-motion";

const StartButton = ({ isPressed, onClick }) => (
  <motion.button
    onClick={onClick}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.6,
      type: "spring",
      stiffness: 90,
      damping: 14,
    }}
    whileHover={{
      scale: 1.05,
      transition: { type: "spring", stiffness: 220, damping: 18 },
    }}
    whileTap={{
      scale: 0.97,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    }}
    className="
      relative mt-12 sm:mt-16
      font-orbitron
      tracking-[3px] sm:tracking-[4px]
      text-cyan-400 text-sm sm:text-base
      cursor-pointer
    "
  >
    {/* OUTER PULSE FRAME */}
    <motion.span
      className="
        absolute -inset-10px sm:-inset-3.5
        border border-cyan-400/40
        rounded-md
      "
      animate={
        !isPressed
          ? {
              opacity: [0.35, 0.7, 0.35],
              scale: [1, 1.03, 1],
            }
          : {}
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* MAIN BUTTON */}
    <div
      className={`
        relative
        px-10 sm:px-14 py-3 sm:py-4
        border-2 border-cyan-400
        bg-cyan-400/5
        transition-all duration-300 ease-out
        ${isPressed ? "bg-cyan-400/25" : "hover:bg-cyan-400/10"}
      `}
    >
      {isPressed ? "LOADING..." : "PRESS START"}

      {/* CORNER ACCENTS */}
      <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
      <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
      <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />
    </div>
  </motion.button>
);

export default StartButton;