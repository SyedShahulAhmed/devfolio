import { motion } from "framer-motion";
import PresencePanel from "./PresencePanel";
import PathsPanel from "./PathsPanel";
import ResponsePanel from "./ResponsePanel";

const ContactSidePanel = () => (
  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="relative flex justify-center"
  >
    <div className="relative w-75 space-y-4">
      {/* ===== RITUAL AXIS (VISIBLE WHITE THREAD) ===== */}
      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 pointer-events-none">
        {/* Dark edge (contrast against dark bg) */}
        <span
          className="
      absolute inset-y-0 left-1/2 -translate-x-1/2
      w-0.75
      bg-linear-to-b
      from-transparent
      via-black/70
      to-transparent
    "
        />

        {/* White thread core (ACTUAL thread) */}
        <span
          className="
      absolute inset-y-0 left-1/2 -translate-x-1/2
      w-px
      bg-white/30
      opacity-100
    "
        />
      </div>

      {/* ===== OMAMORI CHARM (NO GLOW) ===== */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="relative mx-auto flex flex-col items-center mt-5"
      >
        {/* Cord */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-px h-10 bg-white/50" />

        {/* Knot */}
        <span
          className="
            absolute -top-2 left-1/2 -translate-x-1/2
            w-2 h-2 rounded-full
            bg-[#7c2a2a]
          "
        />

        {/* Charm body */}
        <div
          className="
            relative
            w-12 h-18
            rounded-md
            bg-linear-to-b
            from-[#1c221e]
            to-[#0b0e0d]
            border border-[#5f6f64]/40
            overflow-hidden
          "
        >
          {/* Fabric depth (static, no glow) */}
          <span className="absolute inset-0 shadow-inner shadow-black/50" />

          {/* Inner stitch */}
          <span
            className="
              absolute inset-0.75
              rounded-sm
              border border-[#5f6f64]/20
            "
          />

          {/* Seal */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="
                text-[20px]
                pl-1
                tracking-[0.35em]
                font-serif
                text-[#c9a24d]
              "
            >
              影
            </span>
          </div>
        </div>
      </motion.div>

      {/* ===== PANELS (UPLIFTED, NO EFFECTS) ===== */}
      <div className="space-y-12">
        <PresencePanel />
        <PathsPanel />
        <ResponsePanel />
      </div>
    </div>
  </motion.div>
);

export default ContactSidePanel;
