import { motion } from "framer-motion";
import { statsData } from "../../constants/achievements/data.jsx";
import { useEffect, useState } from "react";
import { Axe, BowArrow, Shield } from "lucide-react";
import { GiThorHammer } from "react-icons/gi";

function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let duration = 2000;
    let incrementTime = Math.floor(duration / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}+</>;
}

export default function StatsSection() {
  return (
    <section className="relative -mt-6 sm:-mt-8 md:-mt-12 z-20 px-4 sm:px-6 pt-12 sm:pt-16 md:pt-24">
      <div className="relative max-w-6xl mx-auto">
        <div
          className="relative 
          bg-gradient-to-b from-[#111827]/80 to-[#0B0F14]/90 
          backdrop-blur-xl border border-[#3B82F6]/20 
          rounded-2xl p-6 sm:p-10 md:p-12"
        >
          {/* Frost Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)] pointer-events-none" />

          {/* ================= WEAPONS ================= */}

          {/* Top Left Axe */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute 
              -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8 
              text-[#3B82F6]/60"
          >
            <Axe className="w-10 h-10 sm:w-14 sm:h-14 md:w-[75px] md:h-[75px]" />
          </motion.div>

          {/* Top Right Hammer */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute 
              -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-8 md:-right-8 
              text-[#FACC15]/60"
          >
            <GiThorHammer className="w-10 h-10 sm:w-14 sm:h-14 md:w-[75px] md:h-[75px]" />
          </motion.div>

          {/* Bottom Left Shield */}
          <motion.div
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.06, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute 
              -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 
              text-[#FACC15]/60"
          >
            <Shield className="w-12 h-12 sm:w-16 sm:h-16 md:w-[85px] md:h-[85px]" />
          </motion.div>

          {/* Bottom Right Bow */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute 
              -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 
              text-[#3B82F6]/60"
          >
            <BowArrow className="w-12 h-12 sm:w-16 sm:h-16 md:w-[85px] md:h-[85px]" />
          </motion.div>

          {/* ================= STATS GRID ================= */}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-center relative z-10">
            {statsData.map((stat, i) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group flex flex-col items-center space-y-2 sm:space-y-3"
                >
                  <div className="relative">
                    <div className="absolute inset-0 blur-xl bg-[#3B82F6]/30 group-hover:bg-[#FACC15]/40 transition-all duration-500 rounded-full" />
                    <div className="relative text-[#3B82F6] group-hover:text-[#FACC15] transition-all duration-500">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px]" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                    <Counter value={stat.value.replace("+", "")} />
                  </h3>

                  <p className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-gray-400 group-hover:text-gray-200 transition-all duration-300">
                    {stat.label}
                  </p>

                  <div className="w-8 sm:w-10 h-[2px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}