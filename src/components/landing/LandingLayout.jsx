import { AnimatePresence, motion } from "framer-motion";
import GridBackground from "./GridBackground";
import Scanlines from "./Scanlines";
import Particles from "./Particles";

const LandingLayout = ({ children, isPressed }) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050B10] text-[#EAFBFF]">
      <GridBackground />
      <Scanlines />
      <Particles />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {children}
      </div>

      <AnimatePresence>
        {isPressed && (
          <motion.div
            className="absolute inset-0 z-50 bg-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingLayout;
