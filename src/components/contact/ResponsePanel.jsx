import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const ResponsePanel = () => (
  <div className="relative z-10 top-5">
    <style>{`
      .response-border {
        padding: 1px; /* border thickness */
        background: rgba(90, 100, 95, 0.45);
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 93%,
          88% 100%,
          12% 100%,
          0% 93%
        );
      }

      .response-shape {
        clip-path: polygon(
          0% 0%,
          100% 0%,
          100% 93%,
          88% 100%,
          12% 100%,
          0% 93%
        );
      }
    `}</style>

    {/* ===== BORDER LAYER ===== */}
    <div className="response-border">
      {/* ===== CONTENT LAYER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="
          response-shape
          relative
          bg-linear-to-b from-[#0e1210]/90 to-[#090b0a]/95
          px-6 pt-8 pb-6
          backdrop-blur-sm
        "
      >
        {/* Watermark Kanji */}
        <span
          className="
            absolute inset-0
            flex items-center justify-center
            text-[110px]
            font-serif
            text-[#5f6f64]/5
            select-none
          "
        >
         義
        </span>

        {/* Title */}
        <p className="text-[11px] tracking-[0.45em] text-[#8c8f88] mb-4 uppercase relative z-10">
          RESPONSE
        </p>

        {/* Status */}
        <div className="flex items-center gap-3 relative z-10">
          {/* Icon Seal */}
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              flex items-center justify-center
              w-8 h-8
              rounded-full
              border border-[#5f6f64]/60
            "
          >
            <Clock className="w-4 h-4 text-[#7c2a2a]" />
          </motion.span>

          <div>
            <p className="text-sm text-[#e5e7e3] tracking-wide">
              Bound by Discipline
            </p>
     <p className="text-xs text-[#8c8f88] mt-0.5">
  Replies within <span className="text-[#7c2a2a] font-bold ">24 hours</span>
</p>

          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default ResponsePanel;
