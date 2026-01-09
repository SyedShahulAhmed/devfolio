import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CYBERPUNK_QUOTES = [
  "THE FUTURE IS NOW",
  "WELCOME TO THE GRID",
  "SYSTEM INITIALIZED",
  "READY PLAYER ONE",
  "CORE SYSTEMS ONLINE",
  "BEGIN EXECUTION",
];

export const LandingPage = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!showContent) return;
    const i = setInterval(
      () => setCurrentQuote((p) => (p + 1) % CYBERPUNK_QUOTES.length),
      3000
    );
    return () => clearInterval(i);
  }, [showContent]);

  const handleStart = () => {
    setIsPressed(true);
    setTimeout(() => navigate("/boot"), 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B10] text-[#EAFBFF]">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-18"
        style={{
          backgroundImage: `
      linear-gradient(rgba(0,229,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,229,255,0.1) 1px, transparent 1px)
    `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* SCANLINES */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_2px,transparent_4px)]" />

      {/* PARTICLES */}
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-[2] h-1 w-1 rounded-full bg-cyan-400/60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <AnimatePresence>
          {showContent && (
            <>
              {/* HUD LEFT */}
              <motion.div
                className="absolute left-4 top-4 sm:left-6 sm:top-6 font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                SYS.STATUS: <span className="text-green-400">ONLINE</span>
                <br />
                VER: 2.0.26
              </motion.div>

              {/* HUD RIGHT */}
              <motion.div
                className="absolute right-4 top-4 sm:right-6 sm:top-6 text-right font-mono text-[10px] sm:text-xs text-[#7A9AA5]"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                NETWORK: <span className="text-cyan-400">CONNECTED</span>
                <br />
                LATENCY: 12ms
              </motion.div>

              {/* QUOTES */}
              <motion.div
                className="absolute top-[22%] sm:top-1/4 font-mono text-[10px] sm:text-sm tracking-[0.35em] sm:tracking-[0.5em] text-cyan-300/70 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      duration: 1,
                      ease: "easeInOut",
                    }}
                  >
                    {CYBERPUNK_QUOTES[currentQuote]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              {/* TITLE */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-orbitron font-bold text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 flex items-baseline justify-center">
                  {/* DEV */}
                  <span className="relative text-[#EAFBFF]">
                    DEV
                    {/* UNDERSCORE BAR (NOT "_" TEXT) */}
                    <motion.span
                      className="
        absolute
        -right-[0.10em]
        bottom-[0.11em]
        h-[0.18em]
        w-[0.7em]
        bg-cyan-400
      "
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2.2, repeat: Infinity }}
                    />
                  </span>

                  {/* 001 */}
                  <span className="relative ml-2.5 text-cyan-400">
                    {/* BASE */}
                    <span>001</span>

                    {/* GLITCH LAYER 1 */}
                    <motion.span
                      className="absolute inset-0 text-cyan-300"
                      animate={{
                        x: [-2, 2, -1, 1, 0],
                        clipPath: [
                          "inset(0 0 70% 0)",
                          "inset(30% 0 30% 0)",
                          "inset(60% 0 10% 0)",
                          "inset(0 0 0 0)",
                        ],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.18,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "steps(2)",
                      }}
                    >
                      001
                    </motion.span>

                    {/* GLITCH LAYER 2 */}
                    <motion.span
                      className="absolute inset-0 text-cyan-500"
                      animate={{
                        x: [2, -2, 1, -1, 0],
                        clipPath: [
                          "inset(65% 0 5% 0)",
                          "inset(10% 0 60% 0)",
                          "inset(40% 0 20% 0)",
                          "inset(0 0 0 0)",
                        ],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 0.18,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "steps(2)",
                      }}
                    >
                      001
                    </motion.span>
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p
                  className="
    mt-4
    font-rajdhani
    text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]
    tracking-[0.45em]
    text-[#7A9AA5]
    uppercase
  "
                >
                  SOFTWARE ENGINEER
                </p>
              </motion.div>

              {/* BUTTON */}
              <motion.button
                onClick={handleStart}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="
    relative mt-12 sm:mt-16
    font-orbitron
    tracking-[3px] sm:tracking-[4px]
    text-cyan-400 text-sm sm:text-base
    cursor-pointer
  "
              >
                {/* OUTER PULSE FRAME */}
                <motion.span
                  className="
    absolute inset-[-10px] sm:inset-[-14px]
    border border-cyan-400/40
    rounded-md
  "
                  animate={
                    !isPressed
                      ? {
                          opacity: [0.35, 0.75, 0.35],
                          scale: [1, 1.04, 1],
                        }
                      : {}
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* MAIN BUTTON */}
                <div
                  className={`
      relative
      px-10 sm:px-14 py-3 sm:py-4
      border-2 border-cyan-400
      bg-cyan-400/5
      transition-all duration-300
      ${isPressed ? "bg-cyan-400/25" : "hover:bg-cyan-400/10"}
    `}
                >
                  {isPressed ? "LOADING..." : "PRESS START"}

                  {/* CORNER ACCENTS (SUBTLE, NOT LOUD) */}
                  <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400" />
                  <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400" />
                  <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />
                </div>
              </motion.button>

              {/* FOOTER */}
              <motion.div
                className="
    absolute bottom-6 sm:bottom-10
    left-1/2 -translate-x-1/2
    flex items-center gap-4
    font-mono
  "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {/* LEFT LINE */}
                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-cyan-400/40" />

                {/* TEXT */}
                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#7A9AA5]">
                  2026
                </span>

                {/* RIGHT LINE */}
                <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-cyan-400/40" />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* FLASH */}
      <AnimatePresence>
        {isPressed && (
          <motion.div
            className="absolute inset-0 z-50 bg-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
