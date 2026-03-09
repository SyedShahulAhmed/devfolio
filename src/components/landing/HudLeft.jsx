import { motion } from "framer-motion";

const HudLeft = () => (
  <motion.div
    className="absolute left-4 top-4 sm:left-6 sm:top-6 font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    SYS.STATUS:{" "}
    <motion.span
      className="text-green-400"
      animate={{
        textShadow: [
          "0 0 2px rgba(74,222,128,0.4)",
          "0 0 8px rgba(74,222,128,0.9)",
          "0 0 2px rgba(74,222,128,0.4)",
        ],
        opacity: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ONLINE
    </motion.span>
    <br />
    VER: 2.0.26
  </motion.div>
);

export default HudLeft;