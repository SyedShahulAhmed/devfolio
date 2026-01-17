import { motion } from "framer-motion";
import { Code2, Database, Globe, Terminal } from "lucide-react";

const icons = [
  { Icon: Code2, left: "10%", top: "13%" },      // left mid
  { Icon: Database, left: "88%", top: "28%" },  // right mid
  { Icon: Globe, left: "15%", top: "72%" },     // left bottom
  { Icon: Terminal, left: "80%", top: "68%" },  // right bottom
];

const FloatingIcons = () => (
  <>
    {icons.map(({ Icon, left, top }, i) => (
      <motion.div
        key={i}
        className="
          hidden xl:flex
          absolute
          w-16 h-16          
          items-center justify-center
          border border-cyan-400/20
          bg-black/60
          backdrop-blur
          rounded-lg
        "
        style={{ left, top }}
        animate={{ y: [0, -6, 0], opacity: 0.45 }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.6,
        }}
        whileHover={{
          opacity: 1,
          scale: 1.08,
          boxShadow: "0 0 28px rgba(0,255,255,0.4)",
          borderColor: "rgba(0,255,255,0.6)",
        }}
      >
        {/* ⬇ Bigger icon */}
        <Icon className="w-9 h-9 text-cyan-400/75" />
      </motion.div>
    ))}
  </>
);

export default FloatingIcons;
