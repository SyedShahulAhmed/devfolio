import { motion } from "framer-motion";
import { MapPin, Calendar, Skull, Star } from "lucide-react";

const iconPulse = {
  scale: [1, 1.06, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ================= DATA ================= */

const footerData = [
  { label: "Location", value: "India", icon: MapPin, delay: 0 },
  { label: "Active Since", value: "2019", icon: Calendar, delay: 0.3 },
  { label: "Status", value: "Active & Building", icon: Skull, delay: 0.6 },
  { label: "Reputation", value: "Rising", icon: Star, delay: 0.9 },
];

/* ================= COMPONENT ================= */

const FooterInfo = () => (
  <div
    className="
    relative
    gaming-card
    px-10
    py-7
    flex
    flex-col
    sm:flex-row
    items-center
    justify-between
    gap-10
    border-t
    border-orange-500/25
  "
  >
    {/* TOP DIVIDER */}
    <div className="absolute top-0 left-0 w-full flex items-center justify-center">
      <div className="flex items-center gap-3 w-[70%]">
        <div className="flex-1 h-[1px] bg-orange-500/30" />
        <span className="text-orange-500 text-xs tracking-widest">◆</span>
        <div className="flex-1 h-[1px] bg-orange-500/30" />
      </div>
    </div>

    {footerData.map((item, index) => {
      const Icon = item.icon;

      return (
        <div key={index} className="flex items-center gap-4 relative">

          {/* STRONGER DIVIDER */}
          {index !== 0 && (
            <div className="hidden sm:block absolute -left-7 h-8 w-[1px] bg-orange-500/25" />
          )}

          {/* ICON BADGE */}
          <motion.div
            animate={iconPulse}
            transition={{ delay: item.delay }}
            className="
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-full
            border
            border-orange-500/50
            bg-black/40
            text-orange-500
          "
          >
            <Icon className="w-4 h-4" />
          </motion.div>

          {/* TEXT */}
          <div className="leading-tight">
            <div className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
              {item.label}
            </div>
            <div className="font-semibold tracking-wide text-white text-sm">
              {item.value}
            </div>
          </div>
        </div>
      );
    })}

    {/* BOTTOM DIVIDER */}
    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center">
      <div className="flex items-center gap-3 w-[70%]">
        <div className="flex-1 h-[1px] bg-orange-500/30" />
        <span className="text-orange-500 text-xs tracking-widest">◆</span>
        <div className="flex-1 h-[1px] bg-orange-500/30" />
      </div>
    </div>
  </div>
);

export default FooterInfo;