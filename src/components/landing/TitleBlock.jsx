import { motion } from "framer-motion";

const TitleBlock = () => (
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
        {/* UNDERSCORE BAR */}
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
);

export default TitleBlock;
