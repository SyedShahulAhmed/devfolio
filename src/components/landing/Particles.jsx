import { motion } from "framer-motion";
import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 250 }).map(() => {
      const twinkle = Math.random() < 0.25; // only some particles glow

      return {
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        duration: 8 + Math.random() * 10,
        delay: Math.random() * 6,
        xMove: Math.random() * 60 - 30,
        yMove: Math.random() * 60 - 30,
        rotate: Math.random() * 360,
        layer: Math.random(),
        twinkle,
        twinkleDelay: Math.random() * 10,
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background:
              "radial-gradient(circle, rgba(34,211,238,0.9) 0%, rgba(34,211,238,0.2) 40%, transparent 70%)",
            filter: "drop-shadow(0 0 6px rgba(34,211,238,0.6))",
            transform: `scale(${0.6 + p.layer})`,
          }}
          animate={{
            x: [0, p.xMove, -p.xMove, 0],
            y: [0, p.yMove, -p.yMove, 0],
            rotate: [0, p.rotate, 0],
            opacity: p.twinkle
              ? [0.2, 0.5, 1, 0.4] // glowing particles
              : [0.2, 0.6, 0.3],
            scale: p.twinkle ? [1, 2.2, 1] : [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;

// ------------------------------------------------------------

// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const PARTICLE_COUNT = 80;

// const Particles = () => {
//   const particles = useMemo(() => {
//     const cols = Math.ceil(Math.sqrt(PARTICLE_COUNT));
//     const rows = Math.ceil(PARTICLE_COUNT / cols);

//     return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
//       const col = i % cols;
//       const row = Math.floor(i / cols);

//       return {
//         id: i,
//         size: Math.random() * 2.5 + 1.5,
//         x: (col / cols) * 100 + Math.random() * (100 / cols),
//         y: (row / rows) * 100 + Math.random() * (100 / rows),
//         floatX: Math.random() * 30 - 15,
//         floatY: Math.random() * 60 + 30,
//         duration: Math.random() * 6 + 6,
//         delay: Math.random() * 3,
//       };
//     });
//   }, []);

//   return (
//     <>
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute z-2 rounded-full bg-cyan-400 blur-[1.5px]"
//           style={{
//             width: p.size,
//             height: p.size,
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//           }}
//           animate={{
//             x: [0, p.floatX, 0],
//             y: [0, -p.floatY, 0],
//             opacity: [0.4, 1, 0.4], // 🔥 increased opacity
//             scale: [1, 1.4, 1],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </>
//   );
// };

// export default Particles;

// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const PARTICLE_COUNT = 70;

// const Particles = () => {
//   const particles = useMemo(() => {
//     const cols = Math.ceil(Math.sqrt(PARTICLE_COUNT));
//     const rows = Math.ceil(PARTICLE_COUNT / cols);

//     return Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
//       const col = i % cols;
//       const row = Math.floor(i / cols);

//       return {
//         id: i,
//         size: Math.random() * 1.6 + 1.2,
//         x: (col / cols) * 100 + Math.random() * (100 / cols),
//         y: (row / rows) * 100 + Math.random() * (100 / rows),
//         floatX: Math.random() * 18 - 9,
//         floatY: Math.random() * 40 + 20,
//         duration: Math.random() * 6 + 7,
//         delay: Math.random() * 4,
//         depth: Math.random(), // depth layer
//         links: Math.floor(Math.random() * 3) + 1,
//       };
//     });
//   }, []);

//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {particles.map((p) => (
//         <motion.div
//           key={p.id}
//           className="absolute"
//           style={{
//             left: `${p.x}%`,
//             top: `${p.y}%`,
//             opacity: 0.35 + p.depth * 0.5,
//             transform: `scale(${0.8 + p.depth * 0.6})`,
//           }}
//           animate={{
//             x: [0, p.floatX, 0],
//             y: [0, -p.floatY, 0],
//           }}
//           transition={{
//             duration: p.duration,
//             delay: p.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           {/* ================= NEURON CORE ================= */}
//           <motion.div
//             className="relative rounded-full bg-cyan-300/80"
//             style={{
//               width: p.size,
//               height: p.size,
//             }}
//             animate={{
//               opacity: [0.6, 1, 0.6],
//               scale: [1, 1.4, 1],
//             }}
//             transition={{
//               duration: 3 + p.depth * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           {/* ================= NEURON HALO ================= */}
//           <motion.div
//             className="absolute inset-[-6px] rounded-full border border-cyan-400/20"
//             animate={{
//               opacity: [0.05, 0.25, 0.05],
//             }}
//             transition={{
//               duration: 4 + p.depth * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           {/* ================= AXON CONNECTIONS ================= */}
//           {Array.from({ length: p.links }).map((_, j) => (
//             <motion.span
//               key={j}
//               className="absolute left-1/2 top-1/2 origin-left"
//               style={{
//                 width: Math.random() * 60 + 40,
//                 height: "1px",
//                 transform: `rotate(${Math.random() * 360}deg)`,
//                 background:
//                   "linear-gradient(to right, rgba(56,189,248,0.45), rgba(56,189,248,0.05), transparent)",
//               }}
//               animate={{
//                 opacity: [0.1, 0.6, 0.1],
//               }}
//               transition={{
//                 duration: Math.random() * 3 + 3,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               {/* ================= DATA PULSE ================= */}
//               <motion.span
//                 className="absolute top-0 left-0 h-full w-2 bg-cyan-200/70"
//                 animate={{
//                   x: ["0%", "100%"],
//                   opacity: [0, 1, 0],
//                 }}
//                 transition={{
//                   duration: Math.random() * 2 + 2,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               />
//             </motion.span>
//           ))}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Particles;
