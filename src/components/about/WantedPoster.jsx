import { motion } from "framer-motion";
import HUDCorners from "./HUDCorners";
import wantedImg from "../../assets/About/wanted.png";
import { crimes, stats, interests } from "../../constants/about/data.js";

/* ================= RDR2 MOTION VARIANTS ================= */

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

const idleFloat = {
  y: [0, -2, 0],
  rotate: [0, 0.15, 0],
  transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
};


const glowPulse = {
  textShadow: [
    "0 0 4px rgba(249,115,22,0.25)",
    "0 0 10px rgba(249,115,22,0.4)",
    "0 0 4px rgba(249,115,22,0.25)",
  ],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
};

const WantedPoster = () => (
  <motion.div
    variants={cardVariant}
    initial="hidden"
    animate="show"
    className="gaming-card w-full max-w-75 sm:max-w-85 md:max-w-90 mx-auto px-4 py-5 relative overflow-hidden"
  >
    {/* Ambient Dust */}
    <motion.div
      className="absolute inset-0 bg-linear-to-b from-black/25 via-transparent to-black/35 pointer-events-none"
      animate={{ opacity: [0.3, 0.45, 0.3] }}
      transition={{ duration: 8, repeat: Infinity }}
    />

    {/* ================= HEADER ================= */}
    <motion.h2
      animate={glowPulse}
      className="text-center text-4xl sm:text-5xl mb-1 tracking-[0.22em] text-white font-wanted"
    >
      WANTED
    </motion.h2>

    {/* Star divider */}
    <div className="flex justify-center gap-2 mb-2">
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className="text-orange-500/70 text-lg sm:text-xl tracking-widest"
        >
          ★
        </span>
      ))}
    </div>

    {/* ================= NAME ================= */}
    <motion.p
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center font-bold text-xl sm:text-3xl tracking-[0.15em] uppercase text-white mb-3 font-rdr"
    >
      SHAHUL AHMED
    </motion.p>

    {/* ================= IMAGE ================= */}
    <motion.div
      animate={idleFloat}
      className="relative w-full aspect-3/4 mb-4 overflow-hidden border border-orange-500/40"
    >
      <img
        src={wantedImg}
        alt="Wanted Poster"
        className="w-full h-full object-cover contrast-110 brightness-90 sepia-[0.15]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/40" />
      <HUDCorners />
    </motion.div>

    {/* ================= BOUNTY ================= */}
    <motion.p
      animate={glowPulse}
      className="text-center font-black tracking-[0.3em] text-3xl text-orange-500 mb-2 font-wanted"
    >
      $100,101
    </motion.p>

    <p className="text-center text-sm sm:text-xl tracking-[0.35em] mb-4 uppercase font-medium font-wanted">
      <span className="text-white/70">DEAD</span>
      <span className="mx-2 text-white/40">OR</span>
      <span className="text-orange-500 relative top-px">
        ALIVE
      </span>
    </p>

    {/* ================= CRIMES ================= */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="mb-4 max-w-[85%] mx-auto text-center text-[12px] sm:text-[13px] tracking-[0.12em] text-white/60 uppercase leading-loose"
    >
      {crimes.join(" • ")}
    </motion.p>

    {/* ================= STATS ================= */}
    <div className="grid grid-cols-2 gap-3 mb-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + i * 0.12 }}
          whileHover={{ y: -2 }}
          className="border border-orange-500/25 bg-black/30 py-4 text-center transition-all duration-200 hover:border-orange-500/40 hover:bg-black/40"
        >
          <div className="text-orange-500 font-bold text-lg sm:text-xl">
            {stat.value}
          </div>
          <div className="text-[10px] sm:text-xs tracking-widest text-gray-400 mt-1">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>

    {/* ================= FOOTER ================= */}
    <div className="border-t border-white/10 pt-4 flex justify-between">
      {interests.map((item, i) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="flex flex-col items-center gap-1.5">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                delay: 1 + i * 0.12,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500/80" />
            </motion.div>

            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/60">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default WantedPoster;
