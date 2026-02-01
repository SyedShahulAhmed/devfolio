import { motion } from "framer-motion";

const ProjectFooter = () => {
  return (
    <div className="w-full mt-20 sm:mt-28 lg:mt-32 mb-12 sm:mb-16 flex justify-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="
          relative
          w-full
          max-w-6xl
          px-4 sm:px-8 md:px-10
          overflow-hidden
        "
      >
        {/* CITY LINE */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-6">
          <span className="h-px w-10 sm:w-16 md:w-20 bg-sky-400/40" />
          <span className="
            mx-3 sm:mx-4
            text-[9px] sm:text-[10px] md:text-[11px]
            tracking-[0.45em] sm:tracking-[0.6em]
            uppercase
            text-sky-400/70
          ">
            LOS SANTOS
          </span>
          <span className="h-px w-10 sm:w-16 md:w-20 bg-sky-400/40" />
        </div>

        {/* QUOTE */}
        <motion.p
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="
            relative
            text-center
            text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
            leading-relaxed
            sm:leading-loose
            text-gray-200
            font-light
            max-w-[90%] sm:max-w-3xl
            mx-auto
          "
        >
          “You forget a thousand things every day. Make sure this isn’t one of
          ’em.”
        </motion.p>

        {/* AUTHOR */}
        <div className="relative mt-4 sm:mt-6 text-center">
          <span className="
            text-[9px] sm:text-[10px] md:text-[11px]
            tracking-[0.35em] sm:tracking-[0.4em]
            uppercase
            text-gray-400
          ">
            — Michael De Santa
          </span>
        </div>

        {/* FILM GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(180deg, rgba(255,255,255,0.25) 0px, rgba(255,255,255,0.25) 1px, transparent 1px, transparent 5px)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default ProjectFooter;
