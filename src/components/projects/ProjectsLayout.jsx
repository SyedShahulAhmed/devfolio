import { motion } from "framer-motion";
import { useMemo } from "react";
import ProjectFooter from "./ProjectFooter";

const ProjectsLayout = ({ children }) => {
  // GTA-STYLE AMBIENT DUST (TOP + BOTTOM) — slightly increased intensity
  const dustParticles = useMemo(
    () =>
      Array.from({ length: 44 }, () => ({
        size: Math.random() * 3.5 + 2.5,
        left: Math.random() * 100,
        direction: Math.random() > 0.5 ? "top" : "bottom",
        duration: Math.random() * 24 + 26,
        delay: Math.random() * 14,
      })),
    [],
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-black font-hud text-white">
      {/* BASE DEPTH */}
      <div className="absolute inset-0 bg-linear-to-b from-neutral-950 via-black to-neutral-950 z-0" />

      {/* SUBTLE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.08] z-1"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              rgba(255,255,255,0.06) 0px,
              rgba(255,255,255,0.06) 1px,
              transparent 1px,
              transparent 14px
            )
          `,
        }}
      />

      {/* DARK CONTRAST */}
      <div className="absolute inset-0 bg-black/28 z-2" />

      {/* VIGNETTE */}
      <div
        className="absolute inset-0 z-3"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* SOFT HUD GLOW */}
      <div className="absolute inset-0 bg-linear-to-b from-red-600/7 via-transparent to-blue-600/12 z-4" />

      {/* 🌫️ GTA AMBIENT DUST (TOP + BOTTOM, SLIGHTLY STRONGER) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {dustParticles.map((d, i) => {
          const fromTop = d.direction === "top";

          return (
            <motion.span
              key={`dust-${i}`}
              className="absolute rounded-full bg-white/45"
              style={{
                width: d.size,
                height: d.size,
                left: `${d.left}%`,
                top: fromTop ? "-12vh" : "auto",
                bottom: fromTop ? "auto" : "-12vh",
                filter: "drop-shadow(0 0 6px rgba(255,255,255,0.3))",
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: fromTop ? "120vh" : "-120vh",
                opacity: [0, 0.5, 0.5, 0],
              }}
              transition={{
                duration: d.duration,
                delay: d.delay,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          );
        })}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        {children}
        <ProjectFooter /> {/* ✅ THIS IS NOW CORRECT */}
      </div>
    </div>
  );
};

export default ProjectsLayout;
