import { motion } from "framer-motion";
import HUDCorners from "./HUDCorners";

const ChapterCard = ({ chapter, index }) => {
  const isSpecial =
    chapter.variant === "prologue" || chapter.variant === "epilogue";

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, ease: "easeOut" }}
      className="relative w-full pt-14 px-8 pb-8 bg-linear-to-br from-[#0f141a] via-[#0a0d11] to-[#050608] border border-orange-500/30 shadow-[inset_0_0_40px_rgba(0,0,0,0.9),0_0_60px_rgba(0,0,0,0.6)]"
    >
      {/* HUD CORNERS */}
      <HUDCorners />

      {/* RDR2 PLATE TAB */}
      <div className="absolute top-0 left-10 z-10">
        <div className="relative bg-[#0b0f14] px-1.5 pb-1">
          <div className="px-6 py-1 text-[11px] tracking-[0.25em] font-bold uppercase text-orange-500 bg-[#1a1f26] border border-orange-500/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_2px_6px_rgba(0,0,0,0.6)]">
            {chapter.chapter}
          </div>
        </div>
      </div>

      {/* TITLE ROW */}
      <div className="flex items-center gap-4 mt-2">
        <motion.div
  animate={{ scale: [1, 1.05, 1] }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="flex items-center justify-center w-10 h-10 rounded-full border border-orange-500/60 text-orange-400"
>
  <chapter.icon className="w-5 h-5" />
</motion.div>


        <h3 className="text-2xl font-bold tracking-wide text-white">
          {chapter.title}
        </h3>
      </div>

      {/* CONTENT */}
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-400 whitespace-pre-line">
        {chapter.content}
      </p>

      {/* QUOTE (PROLOGUE / EPILOGUE ONLY) */}
      {isSpecial && chapter.quote && (
        <div className="mt-6 max-w-3xl border-l-2 border-orange-500/60 pl-4">
          <p className="text-sm italic text-gray-300">“{chapter.quote}”</p>
          {chapter.quoteAuthor && (
            <p className="mt-1 text-xs tracking-wider text-orange-400 uppercase">
              {chapter.quoteAuthor}
            </p>
          )}
        </div>
      )}

      {/* DECORATIVE DOTS */}
      <div className="flex gap-2 mt-6">
        <span className="w-2 h-2 bg-orange-500/80 rotate-45" />
        <span className="w-2 h-2 bg-orange-500/60 rotate-45" />
        <span className="w-2 h-2 bg-orange-500/40 rotate-45" />
      </div>
    </motion.section>
  );
};

export default ChapterCard;
