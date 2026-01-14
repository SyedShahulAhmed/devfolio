import { motion } from "framer-motion";

const BootTerminal = ({ lines, currentIndex }) => {
  return (
    <div>
      {lines.slice(0, currentIndex + 1).map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-1.5 text-sm text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.6)]"
        >
          &gt; {line}
        </motion.p>
      ))}
    </div>
  );
};

export default BootTerminal;
