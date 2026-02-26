import { motion } from "framer-motion";

const CARD_STYLE =
  "relative bg-gradient-to-br from-[#0b141c] via-[#0F1C26] to-[#0b141c] border border-white/10 rounded-2xl overflow-hidden";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function MilestoneCard({
  icon,
  title,
  subtitle,
  date,
  description,
  skills,
  impact,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`${CARD_STYLE} 
                  p-5 sm:p-6 md:p-8 
                  group transition-all duration-300 
                  hover:border-[#3B82F6]/40`}
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 relative z-10">
        
        {/* ================= ICON ================= */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.08 }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                     rounded-xl sm:rounded-2xl
                     bg-linear-to-br from-[#16212c] to-[#0f172a]
                     flex items-center justify-center
                     text-[#3B82F6]
                     border border-[#3B82F6]/30"
        >
          <div className="text-lg sm:text-xl md:text-2xl">
            {icon}
          </div>
        </motion.div>

        {/* ================= CONTENT ================= */}
        <div className="flex-1">

          {/* Title */}
          <motion.h3
            variants={itemVariants}
            className="font-display 
                       text-xl sm:text-2xl 
                       font-bold tracking-wide text-white"
          >
            {title}
          </motion.h3>

          {/* Subtitle + Date */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm 
                       text-[#94A3B8] 
                       mt-1 sm:mt-2 
                       uppercase tracking-[0.15em] sm:tracking-wider"
          >
            {subtitle}
            {date && (
              <span className="block sm:inline sm:ml-2">
                · {date}
              </span>
            )}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px w-12 sm:w-14 bg-[#3B82F6]/30 mt-3 sm:mt-4 mb-3 sm:mb-4"
          />

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-[15px] 
                       text-[#E5E5E5]/85 
                       leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Impact Badge */}
          {impact && (
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 
                         mt-4 sm:mt-5 
                         px-3 sm:px-4 
                         py-1.5
                         bg-[#3B82F6]/10
                         border border-[#3B82F6]/30
                         rounded-md text-[11px] sm:text-xs
                         text-[#93C5FD]
                         font-medium"
            >
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full" />
              {impact}
            </motion.div>
          )}

          {/* Skills */}
          {skills && (
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 sm:gap-3 mt-4 sm:mt-5"
            >
              {skills.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ scale: 1.05 }}
                  className="text-[10px] sm:text-xs 
                             px-2.5 sm:px-3 
                             py-1.5 
                             rounded-md
                             bg-[#111827]
                             border border-[#3B82F6]/20
                             text-[#cbd5e1]
                             hover:border-[#3B82F6]/40
                             transition duration-300"
                >
                  {s}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom Line */}
      <motion.div
        variants={itemVariants}
        className="absolute bottom-0 left-0 h-0.5 w-full bg-[#3B82F6]/40"
      />
    </motion.div>
  );
}