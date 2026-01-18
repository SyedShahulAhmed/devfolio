import { motion } from "framer-motion";

const Rain = () => (
  <div className="absolute inset-0 pointer-events-none hidden sm:block">
    {Array.from({ length: 40 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-px h-12 bg-linear-to-b from-cyan-400/40 to-transparent"
        style={{ left: `${Math.random() * 100}%` }}
        initial={{ y: "-20vh", opacity: 0 }}
        animate={{ y: "120vh", opacity: [0, 0.6, 0] }}
        transition={{
          duration: 2 + Math.random(),
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export default Rain;
