import { motion } from "framer-motion";
import avatar from "../../assets/Home/Avatar.png";

const CharacterCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="
      relative
      w-full
      max-w-[320px]
      aspect-2/3
      mx-auto
      overflow-hidden 
      border border-cyan-400/40
      bg-linear-to-b
      from-[#0b1416]
      via-[#060c0e]
      to-black
      shadow-[0_0_30px_rgba(0,255,255,0.12)]
    "
  >
    {/* ================= HUD BACKGROUND LAYER ================= */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-transparent" />

 
    </div>

    {/* ================= AVATAR (CLEAN, NO GLOW) ================= */}
    <motion.img
      src={avatar}
      alt="Avatar"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        pl-2
        translate-y-[6%]
        opacity-95
        pointer-events-none
        select-none
      "
    />

    {/* ================= BOTTOM FADE ================= */}
    <div
      className="
        absolute
        bottom-0
        w-full
        h-36
        bg-linear-to-t
        from-black
        to-transparent
      "
    />

    {/* ================= GLOBAL SCANLINE ================= */}
    <motion.div
      className="
        absolute
        left-0
        right-0
        h-px
        bg-linear-to-r
        from-transparent
        via-cyan-400/70
        to-transparent
      "
      initial={{ top: "-5%" }}
      animate={{ top: ["-5%", "105%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />

    {/* ================= HUD TEXT ================= */}
    <div className="absolute top-3 left-3 text-[10px] text-cyan-400 tracking-widest">
      ID: DEV-001
    </div>

    <div className="absolute top-3 right-3 text-[10px] text-emerald-400 tracking-widest">
      ● ACTIVE
    </div>

    {/* ================= FOOTER ================= */}
    <div className="absolute bottom-4 left-4">
      <div className="text-[10px] text-gray-400 tracking-widest">
        CLASS:
      </div>
      <div className="text-xs tracking-[0.35em] text-white">
        FULL STACK
      </div>
    </div>

    {/* ================= HUD CORNERS (OPTIONAL, IMAGE-LIKE) ================= */}
    <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-cyan-400/40" />
    <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-cyan-400/40" />
    <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-cyan-400/40" />
    <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-cyan-400/40" />
  </motion.div>
);

export default CharacterCard;
