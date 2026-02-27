import { motion } from "framer-motion";

export default function TimelineItem({
  icon,
  title,
  subtitle,
  date,
  description,
  impact,
  isLast,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex gap-6 group"
    >
      {/* LEFT SIDE (Node + Energy Line) */}
      <div className="flex flex-col items-center relative">
        
        {/* Animated Node */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#3B82F6]/20 blur-md group-hover:blur-lg transition-all duration-500" />
          
          <div className="w-12 h-12 rounded-full 
            bg-gradient-to-br from-[#0F1C26] to-[#162635]
            border border-[#3B82F6]/40 
            flex items-center justify-center 
            text-[#3B82F6]
            transition-all duration-500
            group-hover:scale-110
          ">
            {icon}
          </div>
        </div>

        {/* Energy Line */}
        {!isLast && (
          <div className="relative flex-1 w-px mt-3">
            <div className="absolute inset-0 bg-gradient-to-b from-[#3B82F6]/60 via-[#3B82F6]/30 to-transparent" />
          </div>
        )}
      </div>

      {/* RIGHT SIDE (Content Card) */}
      <div
        className="
          flex-1
          bg-[#0F1C26]/60 backdrop-blur-xl
          border border-white/10
          rounded-xl
          p-5
          transition-all duration-500
          group-hover:border-[#3B82F6]/40
          group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-display text-lg tracking-wide font-semibold text-white">
            {title}
          </h3>

          {date && (
            <span className="text-xs tracking-widest uppercase text-[#3B82F6]/70">
              {date}
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p className="text-sm text-[#9CA3AF] mt-1 tracking-wide">
          {subtitle}
        </p>

        {/* Description */}
        <p className="text-sm mt-3 text-[#E5E5E5]/80 leading-relaxed">
          {description}
        </p>

        {/* Impact Achievement */}
        {impact && (
          <div className="mt-4 inline-flex items-center gap-2 
            text-xs tracking-wider uppercase 
            text-[#3B82F6]
            bg-[#3B82F6]/10 
            border border-[#3B82F6]/30 
            px-3 py-1 rounded-full
          ">
            ⚡ {impact}
          </div>
        )}
      </div>
    </motion.div>
  );
}