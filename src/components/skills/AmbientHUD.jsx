import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 28 });

const AmbientHUD = () => {
  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">

      {/* ================= GRID ================= */}
      {/* MAIN GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,255,0.045) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgba(0,255,255,0.045) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "clamp(36px, 5vw, 52px) clamp(36px, 5vw, 52px)",
        }}
      />

      {/* MICRO GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,255,255,0.018) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgba(0,255,255,0.018) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "clamp(8px, 1.5vw, 10px) clamp(8px, 1.5vw, 10px)",
        }}
      />

      {/* ================= HUD SCAN LINE ================= */}
      <div className="absolute top-16 bottom-16 left-6 right-6 sm:top-12 sm:bottom-12 sm:left-8 sm:right-8">
        <motion.div
          className="absolute top-0 bottom-0 w-px bg-cyan-400/30"
          initial={{ x: 0 }}
          animate={{ x: "calc(100vw - 6rem)" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* ================= CORNERS ================= */}
      <div className="absolute top-10 left-10 w-12 h-12 sm:top-12 sm:left-12 sm:w-16 sm:h-16 border-l border-t border-cyan-400/30" />
      <div className="absolute top-10 right-10 w-12 h-12 sm:top-12 sm:right-12 sm:w-16 sm:h-16 border-r border-t border-cyan-400/30" />
      <div className="absolute bottom-10 left-10 w-12 h-12 sm:bottom-12 sm:left-12 sm:w-16 sm:h-16 border-l border-b border-cyan-400/30" />
      <div className="absolute bottom-10 right-10 w-12 h-12 sm:bottom-12 sm:right-12 sm:w-16 sm:h-16 border-r border-b border-cyan-400/30" />

      {/* ================= PARTICLES ================= */}
      {PARTICLES.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-cyan-300/70"
          style={{
            width: "clamp(2px, 0.6vw, 3px)",
            height: "clamp(2px, 0.6vw, 3px)",
            left: `${(i * 19) % 100}%`,
            top: `${(i * 31) % 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* ================= STATUS ================= */}
      <div className="absolute bottom-16 sm:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 font-mono text-[10px] sm:text-[11px] text-cyan-300">
        <motion.div
          className="flex items-center gap-2"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span>SYS ONLINE</span>
        </motion.div>

        <span className="opacity-50">|</span>
        <span className="text-cyan-300/80">ABILITY MATRIX v2.0</span>
      </div>

      {/* ================= READOUT ================= */}
      <div className="absolute top-24 sm:top-16 right-6 sm:right-24 text-right font-mono text-[10px] sm:text-[11px] text-cyan-300">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          PWR: 100%
        </motion.div>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
        >
          SYNC: ACTIVE
        </motion.div>
      </div>
    </div>
  );
};

export default AmbientHUD;
