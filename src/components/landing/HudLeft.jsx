import { motion } from "framer-motion";

const HudLeft = () => (
  <motion.div
    className="absolute left-4 top-4 sm:left-6 sm:top-6 font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    SYS.STATUS: <span className="text-green-400">ONLINE</span>
    <br />
    VER: 2.0.26
  </motion.div>
);

export default HudLeft;
