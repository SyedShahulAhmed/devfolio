import { motion } from "framer-motion";

const BootWindow = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="
        relative z-10
        w-155
        p-5
        bg-[rgba(5,11,16,0.9)]
        border border-cyan-400/60
        shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
    >
      {children}
    </motion.div>
  );
};

export default BootWindow;
