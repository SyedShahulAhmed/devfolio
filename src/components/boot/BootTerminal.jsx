import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BootTerminal = ({ lines, currentIndex }) => {
  const [charIndex, setCharIndex] = useState(0);

  const currentLine = lines[currentIndex] || "";

  useEffect(() => {
    setCharIndex(0);

    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= currentLine.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [currentIndex, currentLine]);

  return (
    <div className="mt-3 space-y-2 text-sm font-mono text-cyan-300">

      {lines.slice(0, currentIndex + 1).map((line, i) => {
        const isCurrent = i === currentIndex;

        return (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              flex items-center gap-2
              text-cyan-300
              tracking-wide
            "
          >
            {/* Prompt */}
            <span className="text-cyan-500 select-none">{">"}</span>

            {/* Line */}
            <span className="flex">
              {isCurrent ? (
                <>
                  {line.slice(0, charIndex)}

                  {/* Cursor */}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 inline-block w-[2px] bg-cyan-400"
                    style={{ height: "1" }}
                  />
                </>
              ) : (
                line
              )}
            </span>
          </motion.p>
        );
      })}

    </div>
  );
};

export default BootTerminal;