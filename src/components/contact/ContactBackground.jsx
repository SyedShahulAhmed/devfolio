import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { GiClover } from "react-icons/gi";

const PETAL_COUNT = 28;

const ContactBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }).map(() => {
        const depth = Math.random(); // parallax depth

        return {
          size: 6 + depth * 10,
          left: Math.random() * 100,
          delay: Math.random() * 12,
          duration: 30 + (1 - depth) * 26, // distant petals fall slower
          sway: Math.random() * 80 - 40,
          rotate: Math.random() * 240 - 120,
          opacity: 0.35 + depth * 0.45,
          scale: 0.7 + depth * 0.4,
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="absolute will-change-transform transform-gpu"
          style={{
            left: `${p.left}%`,
            top: `-${p.size * 5}px`,
          }}
          initial={{
            y: "-10vh",
            x: 0,
            rotateZ: 0,
            scale: p.scale,
            opacity: p.opacity,
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: "115vh",
                  x: [0, p.sway, 0],
                  rotateZ: [0, p.rotate],
                  opacity: [p.opacity, p.opacity, 0],
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,              // 👈 keeps falling forever
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <GiClover
            size={p.size}
            className="
              text-red-700
              drop-shadow-[0_0_6px_rgba(255,0,0,0.35)]
            "
          />
        </motion.div>
      ))}
    </div>
  );``
};

export default ContactBackground;
