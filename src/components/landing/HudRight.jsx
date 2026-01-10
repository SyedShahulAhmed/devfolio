import { motion } from "framer-motion";

const HudRight = () => (
  <motion.div
    className="absolute right-4 top-4 sm:right-6 sm:top-6 text-right font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
  >
    NETWORK: <span className="text-cyan-400">CONNECTED</span>
    <br />
    LATENCY: 12ms
  </motion.div>
);

export default HudRight;
