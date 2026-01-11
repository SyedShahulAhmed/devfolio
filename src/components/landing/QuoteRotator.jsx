import { motion, AnimatePresence } from "framer-motion";

const QuoteRotator = ({ quotes, currentQuote }) => (
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
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {quotes[currentQuote]}
      </motion.p>
    </AnimatePresence>
  </motion.div>
);

export default QuoteRotator;
