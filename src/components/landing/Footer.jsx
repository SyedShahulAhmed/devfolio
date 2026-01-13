import { motion } from "framer-motion";

const Footer = () => (
  <motion.div
    className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
  >
    <div className="w-16 sm:w-24 h-px bg-linear-to-r from-transparent to-cyan-400/40" />
    <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#7A9AA5]">
      2026
    </span>
    <div className="w-16 sm:w-24 h-px bg-linear-to-l from-transparent to-cyan-400/40" />
  </motion.div>
);

export default Footer;
