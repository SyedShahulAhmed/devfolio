import { motion } from "framer-motion";

export default function LevelHeader({ level, title, subtitle, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mb-12 sm:mb-14 md:mb-16 px-2 sm:px-0"
    >
      {/* Background Glow */}
      <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#3B82F6]/5 blur-2xl pointer-events-none" />

      {/* ================= LEVEL LABEL ================= */}
      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#3B82F6] text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.35em] uppercase opacity-80"
        >
          Level {level}
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-px bg-gradient-to-r from-[#3B82F6] to-transparent"
        />
      </div>

      {/* ================= TITLE SECTION ================= */}

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 group">
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative 
                     w-12 h-12 sm:w-14 sm:h-14 
                     rounded-xl 
                     bg-gradient-to-br from-[#0f172a] to-[#111827]
                     flex items-center justify-center 
                     border border-[#3B82F6]/30 
                     text-[#3B82F6]"
        >
          <div className="absolute inset-0 rounded-xl border border-[#3B82F6]/20 blur-sm" />
          <div className="text-lg sm:text-xl">
            {icon}
          </div>
        </motion.div>

        {/* Title + Subtitle */}
        <div className="text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display 
                       text-2xl sm:text-3xl md:text-4xl 
                       font-bold 
                       tracking-wide sm:tracking-wider
                       bg-gradient-to-r from-white via-[#cbd5e1] to-white
                       bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#94A3B8] 
                       text-xs sm:text-sm md:text-base 
                       mt-1 sm:mt-2 
                       tracking-normal sm:tracking-wide"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      {/* ================= ENERGY DIVIDER ================= */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="origin-left h-[2px] 
                   mt-6 sm:mt-8
                   bg-gradient-to-r 
                   from-transparent 
                   via-[#3B82F6]/60 
                   to-transparent"
      />
    </motion.div>
  );
}