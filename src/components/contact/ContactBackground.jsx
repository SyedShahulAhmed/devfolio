import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import { GiClover } from "react-icons/gi";

const PETAL_COUNT = 28;

const ContactBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }).map(() => {
        const depth = Math.random();

        return {
          size: 6 + depth * 10,
          left: Math.random() * 100,
          delay: Math.random() * 12,
          duration: 26 + (1 - depth) * 22,
          sway: Math.random() * 40 - 20,
          rotate: Math.random() * 360,
          opacity: 0.5 + depth * 0.5,
          scale: 0.75 + depth * 0.35,
        };
      }),
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((p, i) => (
        <motion.div
          key={i}
          className="
            absolute
            will-change-transform
            transform-gpu
          "
          style={{
            left: `${p.left}%`,
            top: `-${p.size * 6}px`,
            opacity: p.opacity,
            transform: "translateZ(0)",
          }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: ["-10vh", "120vh"],
                  x: [0, p.sway, 0],
                  rotateZ: [0, p.rotate],
                  scale: [p.scale, p.scale * 1.04, p.scale],
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <GiClover
            size={p.size}
            className="
              text-red-700
              drop-shadow-[0_0_6px_rgba(255,0,0,0.45)]
            "
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ContactBackground;
