import { motion } from "framer-motion";
import AmbientHUD from "./AmbientHUD";
const SkillsLayout = ({ children }) => {
  return (
   <div className="relative min-h-screen bg-black text-white font-hud">


      <AmbientHUD />

      {/* ================= PAGE CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {children}
      </div>
    </div>
  );
};

export default SkillsLayout;
