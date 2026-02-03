"use client";

import React from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                               FX COMPONENTS                                */
/* -------------------------------------------------------------------------- */

// const ChiralCrystal = ({ delay, x, y }) => (
//   <motion.div
//     className="absolute pointer-events-none"
//     style={{ left: `${x}%`, top: `${y}%` }}
//     initial={{ opacity: 0, scale: 0, rotate: 0 }}
//     animate={{
//       opacity: [0, 0.6, 0.3, 0.6, 0],
//       scale: [0, 1, 0.85, 1.2, 0],
//       rotate: [0, 180, 360],
//       y: [0, -120, -240],
//     }}
//     transition={{
//       duration: 8,
//       delay,
//       repeat: Infinity,
//       ease: "easeInOut",
//     }}
//   >
//     <div className="relative">
//       <div className="w-3 h-6 bg-gradient-to-b from-orange-500/80 to-transparent rotate-45 blur-[1px]" />
//       <div className="absolute inset-0 w-3 h-6 bg-gradient-to-b from-orange-500/40 to-transparent -rotate-45 blur-[1px]" />
//     </div>
//   </motion.div>
// );

const BTHandprint = ({ delay, x, y }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ opacity: 0, scale: 0.85, filter: "blur(2px)" }}
    animate={{
      opacity: [0, 0.22, 0.18, 0],
      scale: [0.85, 1.05, 1, 0.95],
      y: [0, -4, 0],
      filter: ["blur(2px)", "blur(0.5px)", "blur(1.5px)"],
    }}
    transition={{
      duration: 7,
      delay,
      repeat: Infinity,
      repeatDelay: 12,
      ease: "easeInOut",
    }}
  >
    <svg
      width="42"
      height="54"
      viewBox="0 0 40 50"
      className="fill-orange-500/40"
    >
      <ellipse cx="20" cy="40" rx="15" ry="8" />
      <ellipse cx="8" cy="25" rx="4" ry="10" />
      <ellipse cx="16" cy="18" rx="4" ry="12" />
      <ellipse cx="24" cy="18" rx="4" ry="12" />
      <ellipse cx="32" cy="25" rx="4" ry="10" />
    </svg>
  </motion.div>
);
const randomBTHands = Array.from({
  length: Math.floor(Math.random() * 3) + 2,
}).map(() => ({
  x: Math.random() * 80 + 10,
  y: Math.random() * 35 + 40,
  delay: Math.random() * 10,
}));
const TimefallDrop = ({ x, delay, duration, opacity, drift }) => (
  <motion.div
    className="absolute top-0 pointer-events-none"
    style={{ left: `${x}%` }}
    initial={{ y: "-10vh", opacity: 0 }}
    animate={{
      y: "110vh",
      x: drift,
      opacity: [0, opacity, opacity, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div
      className="bg-linear-to-b from-transparent via-orange-400/60 to-transparent"
      style={{
        width: "1px",
        height: `${Math.random() * 16 + 10}px`, // varied drop length
      }}
    />
  </motion.div>
);

/* -------------------------------------------------------------------------- */
/*                                 BACKGROUND                                 */
/* -------------------------------------------------------------------------- */

const Background = () => {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      {/* Ambient glow */}
      {/* <div className="
  absolute inset-0
  bg-[radial-gradient(ellipse_140%_80%_at_-20%_0%,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.85)_30%,rgba(255,140,60,0.2)_45%,transparent_70%),radial-gradient(ellipse_160%_70%_at_100%_0%,rgba(255,140,60,0.15)_0%,transparent_60%)]
" /> */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_160%_90%_at_-35%_-10%,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.9)_28%,rgba(255,140,60,0.22)_46%,transparent_72%),radial-gradient(ellipse_180%_80%_at_120%_-15%,rgba(255,140,60,0.18)_0%,rgba(255,140,60,0.08)_32%,transparent_65%),linear-gradient(to_bottom,rgba(0,0,0,0.55),transparent_45%)]" />
      {/* Timefall rain */}
      {/* FAR rain (slow, faint) */}
      {Array.from({ length: 25 }).map((_, i) => (
        <TimefallDrop
          key={`far-${i}`}
          x={Math.random() * 100}
          delay={Math.random() * 6}
          duration={Math.random() * 2 + 3}
          opacity={0.15}
          drift={Math.random() * 4 - 2}
        />
      ))}

      {/* NEAR rain (fast, bright) */}
      {Array.from({ length: 35 }).map((_, i) => (
        <TimefallDrop
          key={`near-${i}`}
          x={Math.random() * 100}
          delay={Math.random() * 4}
          duration={Math.random() * 1.2 + 1.4}
          opacity={0.35}
          drift={Math.random() * 10 - 5}
        />
      ))}
      {/* 
      {/* Chiral crystals */}
      {/* {[15, 35, 55, 75].map((x, i) => (
        <ChiralCrystal key={i} delay={i * 2} x={x} y={75} />
      ))}  */}

      {/* BT handprints */}
      {/* BT handprints (random, stable) */}
      {randomBTHands.map((hand, i) => (
        <BTHandprint key={i} x={hand.x} y={hand.y} delay={hand.delay} />
      ))}
    </div>
  );
};

export default Background;
