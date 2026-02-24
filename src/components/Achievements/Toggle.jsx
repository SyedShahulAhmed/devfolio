import { motion } from "framer-motion";

export default function Toggle({ view, setView }) {
  const options = ["grid", "timeline"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10  flex justify-end">
      <div className="relative flex w-full sm:w-auto bg-[#0f1115] border border-[#1f2937] rounded-xl p-1 shadow-lg">
        
        {options.map((v) => (
          <motion.button
            key={v}
            onClick={() => setView(v)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex-1 sm:flex-none px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold tracking-wide rounded-lg transition-all duration-300 ${
              view === v
                ? "text-[#3B82F6]"
                : "text-[#9CA3AF] hover:text-[#3B82F6]"
            }`}
          >
            {/* Active Background */}
            {view === v && (
              <motion.div
                layoutId="activeToggle"
                className="absolute inset-0 rounded-lg bg-[#3B82F6]/20"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}

            <span className="relative z-10">
              {v === "grid" ? "Grid View" : "Timeline View"}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}