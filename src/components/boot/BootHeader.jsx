import { motion } from "framer-motion";

const BootHeader = () => {
  return (
    <div className="mb-6 w-full">

      {/* Top Row */}
      <div className="flex items-center  text-xs text-[#7A9AA5] font-terminal tracking-widest">

        {/* Window Controls */}
        <div className="flex items-center gap-2 mr-5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
        </div>

        {/* Boot Title */}
        <div className="flex items-center gap-2">
          <span className="text-[#9FE8FF]">SYSTEM://BOOT_SEQUENCE</span>

          {/* Blinking Status */}
          <motion.span
            className="text-[#22D3EE]"
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ●
          </motion.span>
        </div>

      </div>

      {/* Divider Line */}
      <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent" />

    </div>
  );
};

export default BootHeader;