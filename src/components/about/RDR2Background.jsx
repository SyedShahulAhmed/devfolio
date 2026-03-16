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
      
      {/* 🌄 STRONG BOTTOM GLOW */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2"
        style={{
          background:
            "linear-gradient(to top, rgba(255,120,60,0.65), rgba(255,120,60,0.35) 40%, transparent 100%)",
        }}
        animate={{ opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔥 BIG FLAMES */}
      {Array.from({ length: 18 }).map((_, i) => {
        const startX = Math.random() * width;

        return (
          <motion.div
            key={`flame-${i}`}
            className="absolute bottom-0 rounded-full"
            style={{
              left: startX,
              width: "14px",
              height: "14px",
              background:
                "radial-gradient(circle, #ffb066 0%, #ff5a1f 45%, transparent 80%)",
              boxShadow:
                "0 0 30px rgba(255,120,60,1), 0 0 60px rgba(255,80,20,0.8)",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.6 }}
            animate={{
              y: [-40, -300, -700],
              x: [0, 80, -50],
              opacity: [0, 1, 0],
              scale: [0.8, 1.6, 0.4],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* 🔥 EMBERS FROM BOTTOM */}
      {Array.from({ length: 60 }).map((_, i) => {
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
                "0 0 18px rgba(255,120,60,0.9), 0 0 36px rgba(255,90,30,0.7)",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.6 }}
            animate={{
              y: [-20, -350, -700],
              x: [0, 50, -35],
              opacity: [0, 1, 0],
              scale: [0.6, 1.3, 0.3],
            }}
            transition={{
              duration: 9 + Math.random() * 6,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        );
      })}

      {/* 🔥 EMBERS FROM TOP */}
      {Array.from({ length: 35 }).map((_, i) => {
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
                "0 0 14px rgba(255,160,80,0.9), 0 0 28px rgba(255,120,60,0.6)",
            }}
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{
              y: [0, 300, 650],
              x: [0, -45, 35],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.1, 0.4],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              delay: Math.random() * 6,
              repeat: Infinity,
              ease: "easeIn",
            }}
          />
        );
      })}

      {/* 🌫️ DUST */}
      {Array.from({ length: 80 }).map((_, i) => {
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
              x: [0, 140, 260],
              y: [0, -80, -160],
              opacity: [0, 0.7, 0],
              scale: [0.6, 1, 0.8],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: Math.random() * 10,
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