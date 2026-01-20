import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const AboutHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center mb-8 sm:mb-12 lg:mb-16 px-4"
  >
    {/* Journal Tag */}
    <div className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 px-5 sm:px-7 py-1.5 sm:py-2 border border-orange-500/40 bg-[#14110d]">
      <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />

      <span className="uppercase text-orange-400 text-[9px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.3em]">
        Character Journal
      </span>
    </div>

    {/* Main Heading */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-[#e5e1d8]">
      ABOUT{" "}
      <span className="block sm:inline tracking-wider text-orange-500">
        THE DEVELOPER
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-gray-400 mt-3 sm:mt-4 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
      A record of survival, skill, and stubborn persistence.
    </p>
  </motion.div>
);

export default AboutHeader;
