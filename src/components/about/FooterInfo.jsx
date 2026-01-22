import { motion } from "framer-motion";
import { MapPin, Calendar, Skull, Star } from "lucide-react";

const iconPulse = {
  scale: [1, 1.08, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const FooterInfo = () => (
  <div className="gaming-card p-6 flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-orange-500/20">

    {/* LOCATION */}
    <div className="flex items-center gap-3">
      <motion.div
        animate={iconPulse}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-orange-500/40 text-orange-500"
      >
        <MapPin className="w-4 h-4" />
      </motion.div>

      <div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">
          Location
        </div>
        <div className="font-semibold tracking-wide text-white">
          India
        </div>
      </div>
    </div>

    {/* ACTIVE SINCE */}
    <div className="flex items-center gap-3">
      <motion.div
        animate={iconPulse}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-orange-500/40 text-orange-500"
      >
        <Calendar className="w-4 h-4" />
      </motion.div>

      <div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">
          Active Since
        </div>
        <div className="font-semibold tracking-wide text-white">
          2019
        </div>
      </div>
    </div>

    {/* STATUS */}
    <div className="flex items-center gap-3">
      <motion.div
        animate={iconPulse}
        transition={{ delay: 0.8 }}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-orange-500/40 text-orange-500"
      >
        <Skull className="w-4 h-4" />
      </motion.div>

      <div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">
          Status
        </div>
        <div className="font-semibold tracking-wide text-white">
          Active & Building
        </div>
      </div>
    </div>

    {/* REPUTATION */}
    <div className="flex items-center gap-3">
      <motion.div
        animate={iconPulse}
        transition={{ delay: 1.2 }}
        className="flex items-center justify-center w-9 h-9 rounded-full border border-orange-500/40 text-orange-500"
      >
        <Star className="w-4 h-4" />
      </motion.div>

      <div>
        <div className="text-xs text-gray-400 uppercase tracking-widest">
          Reputation
        </div>
        <div className="font-semibold tracking-wide text-white">
          Rising
        </div>
      </div>
    </div>

  </div>
);

export default FooterInfo;
