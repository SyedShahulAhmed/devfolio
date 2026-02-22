import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { FolderOpen, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      
      {/* Top Divider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
      >
        <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 45 }}
          transition={{ duration: 0.6 }}
          className="w-2 h-2 rotate-45 bg-[#3B82F6]/70"
        />
        <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide mb-4 sm:mb-6 leading-snug"
      >
        The journey has just begun.
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-[#9CA3AF] text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 px-2"
      >
        Ready to bring discipline, curiosity, and craft to your team.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto"
      >
        {/* View Projects */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto"
        >
          <Link to="/projects" className="block w-full">
            <CTAButton
              icon={<FolderOpen size={18} />}
              text="View Projects"
              primary
              className="w-full sm:w-auto"
            />
          </Link>
        </motion.div>

        {/* Resume Page Link */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto"
        >
          <Link to="/resume" className="block w-full">
            <CTAButton
              icon={<FileText size={18} />}
              text="View Resume"
              className="w-full sm:w-auto"
            />
          </Link>
        </motion.div>

        {/* Contact Me */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="w-full sm:w-auto"
        >
          <Link to="/contact" className="block w-full">
            <CTAButton
              icon={<Mail size={18} />}
              text="Contact Me"
              className="w-full sm:w-auto"
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-20 md:mt-24"
      >
        <div className="relative h-px w-32 sm:w-48 mx-auto mb-4 sm:mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
          <div className="absolute inset-0 bg-[#3B82F6] blur-md opacity-60" />
        </div>

        <p className="text-xs sm:text-sm md:text-md tracking-[0.25em] sm:tracking-[0.35em] text-[#9CA3AF]/60 uppercase">
          FORGED WITH DISCIPLINE
        </p>
      </motion.div>
    </section>
  );
}