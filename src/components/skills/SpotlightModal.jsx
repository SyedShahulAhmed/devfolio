import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ===================== COLOR SYSTEM (PRODUCTION SAFE) ===================== */
const SPOTLIGHT_THEME = {
  "CORE POWERS": {
    main: "#ef4444",
    soft: "rgba(239,68,68,0.35)",
    glow: "rgba(239,68,68,0.6)",
    dim: "rgba(239,68,68,0.25)",
  },
  "TECH SUIT MODULES": {
    main: "#22d3ee",
    soft: "rgba(34,211,238,0.35)",
    glow: "rgba(34,211,238,0.6)",
    dim: "rgba(34,211,238,0.25)",
  },
  "VISUAL SYSTEMS": {
    main: "#a855f7",
    soft: "rgba(168,85,247,0.35)",
    glow: "rgba(168,85,247,0.6)",
    dim: "rgba(168,85,247,0.25)",
  },
  "GADGETS & TOOLS": {
    main: "#f59e0b",
    soft: "rgba(245,158,11,0.35)",
    glow: "rgba(245,158,11,0.6)",
    dim: "rgba(245,158,11,0.25)",
  },
};

const SpotlightModal = ({ spotlight, setSpotlight }) => {
  if (!spotlight) return null;

  const Icon = spotlight.icon;
  const theme =
    SPOTLIGHT_THEME[spotlight.category] ||
    SPOTLIGHT_THEME["CORE POWERS"];

  return (
    <AnimatePresence>
      {/* ===================== BACKDROP (CLICK TO CLOSE) ===================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setSpotlight(null)}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
      >
        {/* ===================== CORE (STOP CLICK PROPAGATION) ===================== */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex items-center justify-center"
          style={{
            width: "clamp(280px, 80vw, 420px)",
            height: "clamp(280px, 80vw, 420px)",
          }}
        >
          {/* ===================== RADAR RINGS ===================== */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                inset: `${i * 8}%`,
                border: `1px solid ${theme.soft}`,
              }}
              animate={{ opacity: [0.6, 0.25, 0.6] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* ===================== AMBIENT GLOW ===================== */}
          <div
            className="absolute rounded-full blur-2xl"
            style={{
              width: "40%",
              height: "40%",
              background: theme.dim,
            }}
          />

          {/* ===================== INNER CORE ===================== */}
          <div
            className="relative rounded-full bg-black flex items-center justify-center"
            style={{
              width: "35%",
              height: "35%",
              border: `1px solid ${theme.main}`,
              boxShadow: `0 0 60px ${theme.glow}`,
            }}
          >
            {/* ICON — GLOWING & PULSING */}
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                filter: [
                  `drop-shadow(0 0 10px ${theme.glow})`,
                  `drop-shadow(0 0 22px ${theme.glow})`,
                  `drop-shadow(0 0 10px ${theme.glow})`,
                ],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon
                style={{
                  width: "clamp(36px, 6vw, 48px)",
                  height: "clamp(36px, 6vw, 48px)",
                  color: theme.main,
                }}
              />
            </motion.div>
          </div>

          {/* ===================== CLOSE BUTTON ===================== */}
          <button
            onClick={() => setSpotlight(null)}
            className="absolute flex items-center justify-center rounded-full transition hover:text-white"
            style={{
              top: "14%",
              right: "18%",
              width: 32,
              height: 32,
              border: `1px solid ${theme.soft}`,
              color: theme.main,
            }}
          >
            <X size={16} />
          </button>

          {/* ===================== TEXT ===================== */}
          <div className="absolute bottom-[6%] text-center px-4">
            <h3
              className="tracking-widest text-gray-200"
              style={{ fontSize: "clamp(20px, 5vw, 28px)" }}
            >
              {spotlight.name}
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              {spotlight.hud || "The foundation of all powers"}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SpotlightModal;
