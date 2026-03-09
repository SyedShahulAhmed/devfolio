import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HudRight = () => {
  const [latency, setLatency] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPing = Math.floor(8 + Math.random() * 25); // 8–33ms
      setLatency(newPing);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute right-4 top-4 sm:right-6 sm:top-6 text-right font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
    >
      NETWORK: <span className="text-cyan-400">CONNECTED</span>
      <br />
      LATENCY:{" "}
      <motion.span
        key={latency}
        initial={{ opacity: 0, y: -3 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-400"
      >
        {latency}ms
      </motion.span>
    </motion.div>
  );
};

export default HudRight;