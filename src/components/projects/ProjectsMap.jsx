import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { projects } from "../../constants/projects/data.js";

/* ================= GTA LOCATIONS ================= */
const gtaLocations = [
  "DOWNTOWN CABRITA",
  "MISSION ROW",
  "DEL PERRO BEACH",
  "VESPUCCI CANALS",
  "PILLBOX HILL",
  "ROCKFORD HILLS",
  "SANDY SHORES",
  "GRAPESEED",
  "PALETO BAY",
];
const mapProjects = projects.slice(0, 8);

const ProjectsMap = () => {
  return (
    <div className="hidden lg:block relative h-[600px] mb-16 rounded-xl border border-red-500/30 bg-black">
      {/* ================= GTA TERMINAL HUD ================= */}
      <div className="absolute font-terminal inset-0 z-30 pointer-events-none font-mono text-red-400 text-[11px] tracking-widest">
        {/* ───────── TOP TERMINAL BAR ───────── */}
        <div
          className="absolute top-0 left-0 w-full h-10
    bg-gradient-to-b from-black/90 to-black/40
    border-b border-red-500/30
    backdrop-blur-sm"
        />

        {/* TOP BAR CONTENT */}
        <div className="absolute top-3 left-4 flex items-center gap-2">
          <motion.span
            className="inline-block w-3 h-3 bg-red-600 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span>SYSTEM ONLINE</span>
        </div>

        <div className="absolute top-3 left-1/2 -translate-x-1/2 opacity-80">
          [ LOS_SANTOS_NETWORK // MISSION_DATABASE v2.1 ]
        </div>
        <div className="absolute top-3 right-4 flex items-center gap-2 text-red-400 tracking-widest">
          <span className="opacity-50">SEC</span>

          <span className="relative leading-none">
            ENC
            {/* active mode underline */}
            <span className="absolute left-0 -bottom-1 w-full h-px bg-red-400/30" />
          </span>

          <span className="text-[9px] opacity-50 leading-none">256</span>

          {/* subtle heartbeat — RED ONLY */}
          <motion.span
            className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-red-400/70"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* ───────── BOTTOM TERMINAL BAR ───────── */}
        <div className="absolute bottom-0 left-0 w-full h-12" />

        {/* BOTTOM BAR CONTENT */}
        <div className="absolute z-5  bottom-4 left-4 opacity-70">
          SYS://LOS_SANTOS_NET
        </div>

        <div className="absolute bottom-4 right-4 opacity-70">
          LAT: 34.0522 | LNG: -118.2437
        </div>
        {/* ───────── ENHANCED MISSION STATS HUD ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute font-oxa bottom-14 left-4
    border border-red-500/40
    bg-black/85
    backdrop-blur-md
    px-4 py-3 rounded-sm
    text-red-400
    overflow-hidden
    shadow-[0_0_25px_rgba(239,68,68,0.15)]
  "
        >
          {/* animated scanline sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)",
            }}
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* static scanline texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* HUD corners */}
          <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-500/60" />
          <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-500/60" />
          <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-500/60" />
          <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-500/60" />

          {/* header */}
          <div className="relative text-[10px] tracking-[0.25em] text-red-500 mb-2">
            MISSION STATUS
          </div>

          {/* divider */}
          <div className="relative mb-2 h-px bg-gradient-to-r from-red-500/0 via-red-500/40 to-red-500/0" />

          {/* stats grid */}
          <div className="relative grid grid-cols-2 gap-x-10 gap-y-2 text-[11px] leading-tight">
            <span className="opacity-60 tracking-wider">TOTAL</span>
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-right font-semibold text-red-300"
            >
              {mapProjects.length}
            </motion.span>

            <span className="opacity-60 tracking-wider">HARD</span>
            <span className="text-right font-semibold text-red-500">
              {mapProjects.filter((p) => p.difficulty === "HARD").length}
            </span>

            <span className="opacity-60 tracking-wider">MEDIUM</span>
            <span className="text-right font-semibold text-yellow-400">
              {mapProjects.filter((p) => p.difficulty === "MEDIUM").length}
            </span>

            <span className="opacity-60 tracking-wider">EASY</span>
            <span className="text-right font-semibold text-green-400">
              {mapProjects.filter((p) => p.difficulty === "EASY").length}
            </span>
          </div>

          {/* bottom micro signal line */}
          <motion.div
            className="mt-2 h-px bg-red-500/20"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      {/* ================= CLIPPED AREA (BACKGROUND + LINES ONLY) ================= */}
      <div className="absolute inset-0 overflow-hidden rounded-xl z-10">
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #050505 0%, #0f0f0f 45%, #070707 100%)",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(239,68,68,0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(239,68,68,0.5) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(239,68,68,0.6) 0px, rgba(239,68,68,0.6) 1px, transparent 1px, transparent 20px)",
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
            style={{
              backgroundImage:
                "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
            }}
          />
        </div>

        {/* ================= CONNECTION LINES ================= */}
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {mapProjects.slice(0, -1).map((p, i) => {
            const n = projects[i + 1];
            return (
              <g key={i}>
                <motion.line
                  x1={`${p.x + 2}%`}
                  y1={`${p.y + 2}%`}
                  x2={`${n.x + 2}%`}
                  y2={`${n.y + 2}%`}
                  stroke="rgba(148,163,184,0.12)"
                  strokeWidth="6"
                  filter="blur(6px)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
                <motion.line
                  x1={`${p.x + 2}%`}
                  y1={`${p.y + 2}%`}
                  x2={`${n.x + 2}%`}
                  y2={`${n.y + 2}%`}
                  stroke="rgba(148,163,184,0.28)"
                  strokeWidth="2"
                  strokeDasharray="10 6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: i * 0.2 }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* ================= MAP NODES (ALWAYS ON TOP) ================= */}
      {mapProjects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
          className="absolute group z-20"
          style={{
            left: `${project.x}%`,
            top: `${project.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* ================= RADAR PULSE EFFECT ================= */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Soft glow core */}
            <motion.div
              className="absolute w-6 h-6 rounded-full bg-red-500/80 blur-md"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Pulse ring 1 */}
            <motion.div
              className="absolute w-8 h-8 rounded-full border border-red-500/70"
              animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Pulse ring 2 (delayed) */}
            <motion.div
              className="absolute w-8 h-8 rounded-full border border-red-500/40"
              animate={{ scale: [1, 3.2], opacity: [0.5, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.9,
              }}
            />

            {/* Pulse ring 3 (outer faint wave) */}
            <motion.div
              className="absolute w-8 h-8 rounded-full border border-red-500/20 blur-sm"
              animate={{ scale: [1, 4], opacity: [0.4, 0] }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.8,
              }}
            />
          </div>

          <div className="relative z-20">
            {/* Pin */}
            <div className="w-12 h-12 rounded-full bg-black border-2 border-red-500 flex items-center justify-center ">
              <MapPin className="text-red-500 w-6 h-6" />
            </div>
            {/* Project title label */}
            <div
              className="
    absolute
    mt-3
    left-1/2
    -translate-x-1/2
    text-[10px]
    tracking-widest
    text-red-400
    uppercase
    font-semibold
    whitespace-nowrap
    opacity-60
    group-hover:opacity-100
    transition
  "
            >
              {project.title}
            </div>
          </div>

          {/* Heist Brief Tooltip */}
          <div
            className="
    absolute left-1/2 top-1/2
    bottom-full mb-4
    -translate-x-1/2 -translate-y-16
    w-72
    opacity-0 group-hover:opacity-100
    transition duration-300
    pointer-events-none
    z-50
  "
          >
            <div
              className="
      relative
      bg-black/90
      border border-red-500/50
      rounded-md
      p-4
      backdrop-blur-md
      shadow-[0_0_35px_rgba(239,68,68,0.25)]
    "
            >
              {/* HUD CORNERS */}
              <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-red-500/70" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-red-500/70" />
              <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-red-500/70" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-red-500/70" />

              {/* HEADER */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] tracking-[0.35em] uppercase text-red-500">
                  Mission Brief
                </span>

                <span className="text-[9px] tracking-widest text-red-400/60">
                  ID #{project.id}
                </span>
              </div>

              {/* DIVIDER */}
              <div className="h-px mb-3 bg-linear-to-r from-red-500/0 via-red-500/50 to-red-500/0" />

              {/* DESCRIPTION */}
              <p className="text-[11px] text-gray-300 leading-relaxed">
                {project.description}
              </p>

              {/* FOOTER STATUS */}
              <div className="mt-4 flex items-center justify-between text-[9px] tracking-widest uppercase">
                <span className="text-red-400/70">
                  Status: <span className="text-red-300">Ready</span>
                </span>

                <motion.span
                  animate={{ opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-red-500"
                >
                  ● LIVE
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsMap;
