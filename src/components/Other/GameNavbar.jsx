import { useState, useEffect } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Home,
  User,
  Zap,
  Briefcase,
  Trophy,
  FileText,
  Mail,
  Gamepad2,
  X,
} from "lucide-react";
import { useRef } from "react";

const navItems = [
  { icon: Home, label: "HOME", path: "/home" },
  { icon: User, label: "ABOUT", path: "/about" },
  { icon: Zap, label: "SKILLS", path: "/skills" },
  { icon: Briefcase, label: "PROJECTS", path: "/projects" },
  { icon: Trophy, label: "ACHIEVEMENTS", path: "/achievements" },
  { icon: FileText, label: "RESUME", path: "/resume" },
  { icon: Mail, label: "CONTACT", path: "/contact" },
];

export const GameNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);

    setTimeout(() => {
      window.location.reload();
    }, 50);
  };
  const containerRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
      setTimeout(() => {
        window.location.reload();
      }, 50);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  const hideOnRoutes = ["/", "/boot"];
  const shouldHide = hideOnRoutes.includes(location.pathname);

  return (
    <>
      {/* Elden Ring Floating Button - Immersive Version */}
      <motion.button
        type="button"
        className="fixed top-8 right-8 z-100 w-16 h-16 rounded-full
  bg-[#0B0A09]
  border border-[#8C6B2F]
  flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Outer Rotating Rune Border */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full"
          fill="none"
          stroke="#C6A85C"
          strokeWidth="1"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="47" strokeOpacity="0.7" />
          <circle
            cx="50"
            cy="50"
            r="40"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
          />
        </motion.svg>

        {/* Inner Counter Rotation Ring */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full"
          fill="none"
          stroke="#8C6B2F"
          strokeWidth="0.8"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        >
          <circle
            cx="50"
            cy="50"
            r="30"
            strokeDasharray="2 8"
            strokeOpacity="0.6"
          />
        </motion.svg>

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 60, opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.4 }}
              className="relative flex items-center justify-center"
            >
              {/* Subtle Idle Rotation */}
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-7 h-7 text-[#C6A85C]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Blade 1 */}
                  <path d="M20 20 L80 80" />
                  <path d="M30 10 L35 25" />
                  <path d="M65 75 L80 70" />

                  {/* Blade 2 */}
                  <path d="M80 20 L20 80" />
                  <path d="M70 10 L65 25" />
                  <path d="M35 75 L20 70" />

                  {/* Central Rune Core */}
                  <circle cx="50" cy="50" r="10" strokeWidth="4" />
                </svg>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              <svg
                viewBox="0 0 200 260"
                className="w-7 h-7"
                fill="none"
                stroke="#C6A85C"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Vertical Pillar */}
                <line x1="100" y1="10" x2="100" y2="250" />

                {/* Top Crest */}
                <path d="M40 40 Q100 10 160 40" />

                {/* Upper Circle */}
                <circle cx="100" cy="110" r="45" />

                {/* Left Circle */}
                <circle cx="65" cy="145" r="45" />

                {/* Right Circle */}
                <circle cx="135" cy="145" r="45" />

                {/* Bottom Arc */}
                <path d="M40 230 Q100 260 160 230" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Radial Menu */}
      <AnimatePresence mode="wait">
        {isOpen && !shouldHide && (
          <>
            {/* Elden Ring Cinematic Mystic Background */}
            <motion.div
              className="fixed inset-0 z-80 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ pointerEvents: "auto" }}
              onClick={() => setIsOpen(false)}
            >
              {/* Deep Obsidian Base */}
              <div className="absolute inset-0 bg-[#0A0A08]" />

              {/* Faint Golden Mist (Top Glow) */}
              <div
                className="absolute inset-0
    bg-[radial-gradient(circle_at_50%_15%,rgba(198,168,92,0.08),transparent_60%)]"
              />

              {/* Subtle Lower Sacred Aura */}
              <div
                className="absolute inset-0
    bg-[radial-gradient(circle_at_50%_85%,rgba(140,107,47,0.06),transparent_70%)]"
              />

              {/* Moving Shadow Clouds */}
              <motion.div
                className="absolute inset-0 opacity-30
    bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.03),transparent_60%)]"
                animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Faint Vertical Sacred Light Beam */}
              <div
                className="absolute top-0 left-1/2 w-100 h-full
    -translate-x-1/2
    bg-[linear-gradient(to_bottom,rgba(198,168,92,0.05),transparent)]
    blur-3xl opacity-40"
              />

              {/* Heavy Cinematic Vignette */}
              <div
                className="absolute inset-0
    bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.9)_100%)]"
              />

              {/* Subtle Dark Blur */}
              <div className="absolute inset-0 backdrop-blur-xl" />
            </motion.div>
            {/* Elden Ring Immersive Navigate Panel */}
            <motion.div
              className="fixed z-95 mb-5 pointer-events-none w-full flex flex-col items-center font-contact"
              style={{ top: "clamp(60px, 8vh, 120px)" }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Stone Relic Panel */}
              <motion.div
                className="
    relative
    w-fit
    px-10 py-5
    bg-[#0E0D0B]/95
    border border-[#6F5A2A]
    backdrop-blur-lg
    overflow-hidden
    "
              >
                {/* Inner Sacred Frame */}
                <div className="absolute inset-2 border border-[#C6A85A]/50 pointer-events-none" />

                {/* Subtle Gold Shimmer Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(110deg, transparent 40%, rgba(198,168,90,0.08) 50%, transparent 60%)",
                  }}
                  animate={{ x: ["-120%", "120%"] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                />

                {/* Top Rune Divider */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-[#C6A85A]/60" />

                <div className="relative text-center tracking-[0.45em]">
                  {/* Main Title */}
                  <motion.h1
                    className="text-xl md:text-2xl text-[#E6C77B] font-semibold"
                    animate={{ opacity: [0.85, 1, 0.85] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    Path of the Tarnished
                  </motion.h1>

                  {/* Sub Text */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={hoveredItem || "default"}
                      className="mt-2 text-[10px] tracking-[0.55em] text-[#BFA25A]/70"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {(hoveredItem || "CHOOSE YOUR PATH").toUpperCase()}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
            {/* Elden Ring Ritual Circle */}

            {/* Outer Ancient Rune Ring */}
            <motion.div
              className="fixed z-85 pointer-events-none"
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{
                rotate: { duration: 80, repeat: Infinity, ease: "linear" },
                duration: 0.6,
              }}
            >
              <svg
                width="420"
                height="420"
                viewBox="0 0 420 420"
                fill="none"
                stroke="#C6A85A"
                strokeWidth="1.2"
              >
                <circle cx="210" cy="210" r="200" strokeOpacity="0.35" />
                <circle
                  cx="210"
                  cy="210"
                  r="175"
                  strokeDasharray="6 14"
                  strokeOpacity="0.4"
                />
              </svg>
            </motion.div>

            {/* Floating Rune Symbols Around Ring */}
            <motion.div
              className="fixed z-90 pointer-events-none"
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    transform: `
          rotate(${i * (360 / 8)}deg)
          translateY(-200px)
        `,
                  }}
                >
                  <motion.div
                    className="w-3 h-3 border border-[#8C6B2F]/70 rounded-full"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1, rotate: 360 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{
                      rotate: {
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      duration: 0.6,
                    }}
                  />
                </div>
              ))}
            </motion.div>

            {/* Inner Sacred Circle */}
            <motion.div
              className="fixed z-85 pointer-events-none"
              style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.6 }}
            >
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                fill="none"
                stroke="#8C6B2F"
                strokeWidth="1"
              >
                <circle cx="160" cy="160" r="150" strokeOpacity="0.4" />
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  strokeDasharray="3 10"
                  strokeOpacity="0.3"
                />
              </svg>
            </motion.div>
            {/* Sacred Radial Sigil Lines */}
            <motion.div
              ref={containerRef}
              className="fixed inset-0 z-88 flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.4 }}
            >
              <svg
                className="fixed z-88 pointer-events-none"
                width="420"
                height="420"
                viewBox="0 0 420 420"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {navItems.map((_, index) => {
                  const angle = (index * 360) / navItems.length - 90;
                  const radius = 170;

                  const centerX = 210;
                  const centerY = 210;

                  const endX =
                    centerX + Math.cos((angle * Math.PI) / 180) * radius;
                  const endY =
                    centerY + Math.sin((angle * Math.PI) / 180) * radius;

                  const isHovered = hoveredIndex === index;

                  return (
                    <motion.line
                      key={index}
                      x1={centerX}
                      y1={centerY}
                      x2={endX}
                      y2={endY}
                      stroke="#C6A85A"
                      strokeWidth={isHovered ? 2.2 : 1.2}
                      strokeOpacity={isHovered ? 0.8 : 0.25}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: 1,
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.07,
                        opacity: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  );
                })}

                {/* Subtle Inner Seal Circle */}
                <circle
                  cx="210"
                  cy="210"
                  r="18"
                  stroke="#8C6B2F"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  fill="none"
                />
              </svg>
            </motion.div>
            {/* Nav Items */}
            <div className="fixed inset-0 z-90 font-hud flex items-center justify-center pointer-events-none font-contact">
              {navItems.map((item, index) => {
                const angle = (index * 360) / navItems.length - 90;
                const radius = 150;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                const isActive = location.pathname === item.path;
                const isHovered = hoveredIndex === index;

                return (
                  <motion.button
                    key={item.path}
                    className={`
absolute w-24 h-24
flex flex-col items-center justify-center gap-1
pointer-events-auto cursor-pointer
rounded-full
border
backdrop-blur-sm
transition-all duration-300

${
  isActive
    ? `
    bg-[radial-gradient(circle_at_30%_30%,#1a1814,#0c0a08)]
    border-[#C6A85A]
    shadow-[inset_0_0_18px_rgba(0,0,0,0.9)]
    `
    : `
    bg-[radial-gradient(circle_at_30%_30%,#15130f,#080706)]
    border-[#3b2e15]
    shadow-[inset_0_0_16px_rgba(0,0,0,0.8)]
    `
}

hover:border-[#9b8450]
hover:-translate-y-0.5
`}
                    style={{
                      boxShadow: isActive
                        ? "inset 0 0 20px rgba(0,0,0,0.9), inset 0 0 6px rgba(198,168,90,0.2)"
                        : "inset 0 0 16px rgba(0,0,0,0.8)",
                    }}
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      x,
                      y,
                      opacity: 1,
                      scale: isHovered ? 1.06 : 1,
                    }}
                    exit={{
                      x: 0,
                      y: 0,
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => handleNavigate(item.path)}
                    onMouseEnter={() => {
                      setHoveredIndex(index);
                      setHoveredItem(item.label);
                    }}
                    onMouseLeave={() => {
                      setHoveredIndex(null);
                      setHoveredItem(null);
                    }}
                  >
                    {/* Rotating Rune Circle */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#6f5a2c]/40 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Engraved Inner Ring */}
                    <div className="absolute inset-2 rounded-full border border-[#3b2e15]/60 pointer-events-none" />

                    {/* Magical Glow Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(198,168,90,0.15), transparent 70%)",
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                        scale: [0.95, 1.05, 0.95],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Floating Rune Particles */}
                    <motion.div className="absolute inset-0 pointer-events-none">
                      {[...Array(3)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-[#d4b46a] rounded-full"
                          style={{
                            left: `${30 + i * 20}%`,
                            top: `${40 + i * 10}%`,
                          }}
                          animate={{
                            y: [-4, 4, -4],
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 2 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Icon */}
                    <item.icon
                      className={`
w-6 h-6
transition-all duration-300
${isActive ? "text-[#d4b46a]" : "text-[#8a7645]"}
`}
                    />
                  </motion.button>
                );
              })}
            </div>
            {/* PRESS ESC TO CLOSE — Immersive Hint */}
            <motion.div
              className="fixed bottom-10 left-1/2 -translate-x-1/2 z-100 pointer-events-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative px-6 py-3 bg-[#0E0D0B]/90 border border-[#6F5A2A] backdrop-blur-md"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                {/* Inner Frame */}
                <div className="absolute inset-1 border border-[#C6A85A]/40 pointer-events-none" />

                {/* Decorative Lines */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#C6A85A]/60" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px bg-[#C6A85A]/60" />

                <div className="relative flex items-center gap-4 tracking-[0.35em] text-[11px] text-[#C6A85A]/80 font-contact">
                  {/* ESC Key Badge */}
                  <div className="px-3 py-1 border border-[#C6A85A]/60 text-[#E6C77B] bg-[#14120F]">
                    ESC
                  </div>

                  <span>TO CLOSE</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default GameNavBar;
