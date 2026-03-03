import React from "react";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B1117] font-hud">

      {/* Gradient Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F1C26] via-[#0B1117] to-black opacity-90" />

      {/* Subtle Scan Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Animated Lock Core */}
        <div className="relative mb-8">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl"
          />
          <div className="relative p-8 rounded-full border border-white/10 bg-[#0F1C26]/70 backdrop-blur-xl">
            <Lock className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-[0.6em] uppercase text-slate-200">
          Blogs
        </h1>

        {/* Status Badge */}
        <div className="mt-6 px-4 py-1 border border-cyan-400/30 text-[11px] tracking-[0.4em] uppercase text-cyan-400">
          Locked Module
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-base tracking-[0.45em] uppercase text-slate-400">
          Coming Soon
        </p>

        {/* System Message */}
        <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-slate-600">
          Requires Future Update • XP Level Pending
        </p>

        {/* Divider Line */}
        <div className="mt-10 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Blogs;