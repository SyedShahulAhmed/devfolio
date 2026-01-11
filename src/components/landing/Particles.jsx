import { motion } from "framer-motion";

const Particles = () => (
  <>
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute z-2 h-1 w-1 rounded-full bg-cyan-400/60"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </>
);

export default Particles;
