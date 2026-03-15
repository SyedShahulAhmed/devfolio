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
      className="
      relative w-full pt-16 px-8 pb-8 overflow-hidden
      bg-gradient-to-br from-[#14100c] via-[#0b0805] to-[#020201]
      border border-orange-600/40
      "
    >
      {/* HUD CORNERS */}
      <HUDCorners />

      {/* PAPER GRAIN */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
        }}
      />

      {/* CHAPTER PLATE */}
      <div className="absolute top-0 left-10 z-10">
        <div className="relative bg-[#060403] px-1 pb-1">
          <div
            className="
            px-6 py-1
            text-[11px]
            tracking-[0.35em]
            font-bold
            uppercase
            text-orange-400
            bg-[#1a130c]
            border border-orange-500/40
          "
          >
            {chapter.chapter}
          </div>
        </div>
      </div>

      {/* TITLE ROW */}
      <div className="flex items-center gap-4 mt-2">
        <div
          className="
          flex items-center justify-center
          w-10 h-10
          rounded-full
          border border-orange-500/60
          text-orange-400
          bg-[#0e0a06]
        "
        >
          <chapter.icon className="w-5 h-5 " />
        </div>

        <h3 className="text-2xl font-semibold tracking-wide text-[#f4e6c9]">
          {chapter.title}
        </h3>
      </div>

      {/* WESTERN DIVIDER */}
      <div className="flex items-center gap-3 mt-4">
        <span className="w-2 h-2 rotate-45 bg-orange-500/80" />
        <div className="h-px flex-1 bg-orange-500/40" />
      </div>

      {/* CONTENT AREA */}
      <div className="relative mt-4 max-w-3xl">

        {/* DARK BACKGROUND ONLY FOR CONTENT */}
        <div className="absolute inset-0 bg-black/40 rounded-sm pointer-events-none" />

        {/* CONTENT */}
        <p className="relative text-sm leading-relaxed text-[#e8dcc5] whitespace-pre-line">
          {chapter.content}
        </p>

        {/* QUOTE */}
        {isSpecial && chapter.quote && (
          <div className="relative mt-6 border-l-2 border-orange-500/50 pl-4">
            <p className="text-sm italic text-[#f0e3c8]">
              “{chapter.quote}”
            </p>

            {chapter.quoteAuthor && (
              <p className="mt-1 text-xs tracking-wider text-orange-300 uppercase">
                {chapter.quoteAuthor}
              </p>
            )}
          </div>
        )}
      </div>

      {/* FOOTER MARK */}
      <div className="flex gap-2 mt-7">
        <span className="w-2 h-2 bg-orange-500 rotate-45" />
        <span className="w-2 h-2 bg-orange-500/60 rotate-45" />
        <span className="w-2 h-2 bg-orange-500/40 rotate-45" />
      </div>
    </motion.section>
  );
};

export default ChapterCard;