import { motion } from "framer-motion";

const Section = ({ title, icon, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="space-y-8"
  >
    {/* Header */}
    <div className="flex items-center gap-4">
      {/* Icon */}
      {icon && (
        <div className="text-orange-400 text-xl sm:text-2xl md:text-3xl">
          {icon}
        </div>
      )}

      {/* Title */}
      <h2
        className="
          text-base sm:text-lg md:text-xl
          font-semibold
          tracking-[0.35em]
          uppercase
          text-orange-400
          whitespace-nowrap
        "
      >
        {title}
      </h2>

      {/* Divider */}
      <div className="flex-1 h-0.5 bg-linear-to-r from-orange-400/70 to-transparent" />
    </div>

    {/* Content */}
    <div className="pl-1 sm:pl-2 md:pl-4">
      {children}
    </div>
  </motion.section>
);

export default Section;