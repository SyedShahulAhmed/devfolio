import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  User,
  Zap,
  FolderGit2,
  BarChart3,
  FileText,
  Mail,
  ChevronRight,
  Trophy,
} from "lucide-react";

const menuItems = [
  { name: "ABOUT", path: "/about", icon: User, desc: "Character Profile" },
  { name: "SKILLS", path: "/skills", icon: Zap, desc: "Ability Loadout" },
  { name: "PROJECTS", path: "/projects", icon: FolderGit2, desc: "Mission Archive" },
  { name: "STATS", path: "/stats", icon: BarChart3, desc: "Progress Data" },
  { name: "RESUME", path: "/resume", icon: FileText, desc: "Mission Briefing" },
  { name: "CONTACT", path: "/contact", icon: Mail, desc: "Open Channel" },
  {
    name: "ACHIEVEMENTS",
    path: "/achievements",
    icon: Trophy,
    desc: "Unlocked Milestones",
    wide: true, // 👈 width only
  },
];

const MenuGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 max-w-xl mx-auto lg:mx-0">
    {menuItems.map((item, index) => {
      const isRightColumn = index % 2 === 1;

      return (
        <Link
          key={item.path}
          to={item.path}
          className={item.wide ? "col-span-2 sm:col-span-2" : ""}
        >
          <motion.div
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 24px rgba(0,255,255,0.15)",
              borderColor: "rgba(34,211,238,0.7)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              transformOrigin: isRightColumn ? "left center" : "right center",
            }}
            className="
              relative
              h-full
              p-4
              border border-white/15
              bg-transparent
              
              rounded-sm
              cursor-pointer
              transition-colors
            "
          >
            {/* HEADER */}
            <div className="flex items-center gap-2 text-xs tracking-widest text-white">
              <item.icon size={14} className="text-cyan-400 shrink-0" />
              <span className="whitespace-nowrap">{item.name}</span>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-1 text-[10px] leading-relaxed text-[#8faab3]">
              {item.desc}
            </div>

            {/* CHEVRON */}
            <ChevronRight
              size={14}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
            />
          </motion.div>
        </Link>
      );
    })}
  </div>
);

export default MenuGrid;
