import { motion } from "framer-motion";
import { MapPin, Mail, Sword, Wind } from "lucide-react";

const PresencePanel = () => (
  <div className="relative z-10">
    <style>{`
      .presence-border {
        padding: 1px;
        background: rgba(90, 100, 95, 0.45);
        clip-path: polygon(
          12% 0%,
          88% 0%,
          100% 7%,
          100% 100%,
          0% 100%,
          0% 7%
        );
      }

      .presence-shape {
        clip-path: polygon(
          12% 0%,
          88% 0%,
          100% 7%,
          100% 100%,
          0% 100%,
          0% 7%
        );
      }
    `}</style>

    {/* Blood Knot — Symbol of Resolve */}
    <span
      className="
        absolute -top-4 left-1/2 -translate-x-1/2
        h-4 w-4 rounded-full
        bg-linear-to-b from-[#7c2a2a] to-[#3a1414]
        ring-1 ring-[#7c2a2a]/40
      "
    />

    {/* ===== BORDER LAYER ===== */}
    <div className="presence-border">
      {/* ===== CONTENT LAYER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="
          presence-shape
          relative
          overflow-hidden
          bg-linear-to-b from-[#0f1411]/95 to-[#080a09]/98
          px-6 pt-11 pb-8
          backdrop-blur-md
        "
      >
        {/* Ink Wash Grain */}
        <div
          className="
            absolute inset-0
            bg-[url('/noise.png')]
            opacity-[0.035]
            pointer-events-none
          "
        />

        {/* Floating Mist */}
        <motion.div
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="
            absolute inset-0
            bg-linear-to-t from-transparent via-[#5f6f64]/10 to-transparent
            pointer-events-none
          "
        />

        {/* Whispered Kanji — Presence */}
        <span
          className="
            absolute inset-0
            flex items-center justify-center
            text-[128px] font-serif
            text-[#5f6f64]/6
            tracking-widest
            select-none
          "
        >
          誉
        </span>

        {/* Title */}
        <p className="text-[11px] tracking-[0.5em] text-[#8c8f88] mb-4 relative z-10">
          PRESENCE
        </p>

        {/* Status Line */}
        <div className="flex items-center gap-4 mb-4 relative z-10">
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="
              flex items-center justify-center
              w-8 h-8 rounded-full
              border border-[#5f6f64]/50
              bg-[#0b0f0d]
            "
          >
            <Sword className="w-4 h-4 text-[#7c2a2a]" />
          </motion.span>

          <p className="text-sm text-[#e5e7e3] tracking-wide">
            Open to Opportunities
          </p>
        </div>

        {/* Katana Spine Divider */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1.4, ease: "easeOut" }}
          className="
            block h-px w-full
            origin-left
            bg-linear-to-r
            from-transparent
            via-[#7c2a2a]/50
            to-transparent
            mb-2
            relative z-10
          "
        />

        {/* Philosophy Line */}
        <p className="text-[11px] text-[#6f726c] italic tracking-wide mb-4 relative z-10">
          Discipline. Clarity. Long-Term Thinking.
        </p>

        {/* Details */}
        <div className="space-y-3 text-xs text-[#8c8f88] relative z-10">
          <div className="flex items-center gap-3">
            <span
              className="
                flex items-center justify-center
                w-6 h-6 rounded-full
                border border-[#5f6f64]/40
                bg-[#0b0f0d]
              "
            >
              <Wind className="w-3.5 h-3.5 text-[#5f6f64]" />
            </span>
            Remote • Open to Global Teams
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
                flex items-center justify-center
                w-6 h-6 rounded-full
                border border-[#7c2a2a]/40
                bg-[#0b0f0d]
              "
            >
              <Mail className="w-3.5 h-3.5 text-[#7c2a2a]" />
            </span>
            contact@yourdomain.com 
          </div>
        </div>
      </motion.div>
    </div>

    {/* Grounding Line */}
    <span
      className="
        absolute -bottom-8 left-1/2 -translate-x-1/2
        h-8 w-px
        bg-linear-to-b
        from-[#5f6f64]/40
        to-transparent
      "
    />
  </div>
);

export default PresencePanel;
