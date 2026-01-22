import { motion } from "framer-motion";

const RDR2Background = () => {
  const width = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const height = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-[3]">
      {/* 🌄 BOTTOM HALF HORIZONTAL GLOW */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(255,120,60,0.45), rgba(255,120,60,0.25) 40%, transparent 100%)",
        }}
        animate={{ opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 EMBERS FROM BOTTOM */}
      {Array.from({ length: 22 }).map((_, i) => {
        const startX = Math.random() * width;
        return (
          <motion.div
            key={`ember-bottom-${i}`}
            className="absolute bottom-0 rounded-full"
            style={{
              left: startX,
              width: "6px",
              height: "6px",
              background:
                "radial-gradient(circle, #ff9c4a 0%, #ff5a1f 45%, transparent 75%)",
              boxShadow:
                "0 0 14px rgba(255,120,60,0.9), 0 0 28px rgba(255,90,30,0.6)",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.6 }}
            animate={{
              y: [-20, -350, -700],
              x: [0, 40, -30],
              opacity: [0, 1, 0],
              scale: [0.6, 1.2, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* 🔥 EMBERS FROM TOP */}
      {Array.from({ length: 14 }).map((_, i) => {
        const startX = Math.random() * width;
        return (
          <motion.div
            key={`ember-top-${i}`}
            className="absolute top-0 rounded-full"
            style={{
              left: startX,
              width: "5px",
              height: "5px",
              background:
                "radial-gradient(circle, #ffb066 0%, #ff6a2c 50%, transparent 80%)",
              boxShadow:
                "0 0 12px rgba(255,160,80,0.8), 0 0 22px rgba(255,120,60,0.6)",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{
              y: [0, 300, 650],
              x: [0, -35, 25],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.4],
            }}
            transition={{
              duration: 11 + Math.random() * 6,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        );
      })}

      {/* 🌫️ DUST */}
      {Array.from({ length: 30 }).map((_, i) => {
        const startX = Math.random() * width;
        const startY = Math.random() * height;
        return (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full"
            style={{
              left: startX,
              top: startY,
              width: "4px",
              height: "4px",
              background: "rgba(220,200,170,0.35)",
              filter: "blur(0.5px)",
            }}
            animate={{
              x: [0, 120, 220],
              y: [0, -60, -120],
              opacity: [0, 0.6, 0],
              scale: [0.6, 1, 0.8],
            }}
            transition={{
              duration: 16 + Math.random() * 8,
              delay: Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default RDR2Background;
