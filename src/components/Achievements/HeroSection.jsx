import { motion } from "framer-motion";
import mountainsBg from "../../assets/Achievements/bg.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-8 overflow-hidden">
      
      {/* BACKGROUND */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={mountainsBg}
          alt="Mountains Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b 
                        from-[#040B14]/60 
                        via-[#050E18]/80 
                        to-[#06121F]"
        />

        <div
          className="absolute inset-0 
                     bg-[radial-gradient(circle_at_top,#0B1D2D_0%,transparent_60%)] 
                     opacity-60"
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="relative z-10 w-full max-w-3xl px-2 sm:px-4"
      >
        {/* STATUS BADGE */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="relative inline-flex flex-wrap items-center justify-center gap-3 
                     px-5 py-2 sm:px-6 sm:py-2.5 rounded-full
                     bg-gradient-to-r from-[#0f172a] via-[#111827] to-[#0f172a]
                     border border-[#3B82F6]/40
                     backdrop-blur-md overflow-hidden group"
        >
          <div
            className="absolute inset-0 rounded-full
                       bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent
                       opacity-0 group-hover:opacity-100
                       animate-pulse transition-opacity duration-500"
          />

          <div className="relative flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full bg-[#3B82F6]/40 animate-ping" />
            <span className="relative w-2 h-2 rounded-full bg-[#3B82F6]" />
          </div>

          <span
            className="relative text-[10px] sm:text-xs tracking-[0.35em] uppercase
                       text-[#60A5FA] font-semibold font-inter
                       transition-colors duration-300
                       group-hover:text-white"
          >
            Journey In Progress
          </span>
        </motion.div>

        {/* MAIN HEADING */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          className="mt-8 font-display bg-gradient-to-b from-white via-[#93C5FD] to-[#3B82F6]
                     bg-clip-text text-transparent 
                     drop-shadow-[0_10px_25px_rgba(59,130,246,0.35)]
                     font-bold tracking-[0.11em]
                     text-7xl lg:text-8xl xl:text-9xl"
        >
          Path To Mastery
        </motion.h1>

        {/* GOD OF WAR – FORGED STEEL DIVIDER */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scaleX: 0.6 },
            visible: { opacity: 1, scaleX: 1 },
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center mt-10 sm:mt-14"
        >
          <div
            className="relative h-[4px] w-2/3 sm:w-1/2 md:w-[28rem]
                       bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
          />

          <div
            className="absolute h-[1px] w-1/2 md:w-[24rem]
                       bg-zinc-800 top-1/2 -translate-y-[6px]"
          />

          <div
            className="absolute h-[1px] w-1/2 md:w-[24rem]
                       bg-zinc-400/40 top-1/2 translate-y-[6px]"
          />

          <div
            className="absolute w-5 h-5 sm:w-6 sm:h-6
                       bg-zinc-700 border-2 border-zinc-500
                       rotate-45 flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-zinc-400 rotate-45" />
          </div>
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto
                     text-zinc-400 text-base sm:text-lg md:text-xl
                     tracking-wide leading-relaxed font-medium text-center"
        >
          Every expert was once a beginner.
        </motion.p>
      </motion.div>
    </section>
  );
}