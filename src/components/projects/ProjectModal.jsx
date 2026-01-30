import { motion, AnimatePresence } from "framer-motion";
import { Github, Zap, X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 40 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="relative w-[92%] max-w-md rounded-xl border border-red-500/40 bg-[#070B14] p-6 overflow-hidden"
        >
          {/* HUD GLOW */}
          <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-red-500/10 via-transparent to-transparent" />

          {/* TOP ACCENT */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-red-400 to-red-500" />

          {/* SCANLINE */}
          <motion.div
            className="absolute inset-0 pointer-events-none
              bg-[linear-gradient(transparent_90%,rgba(255,0,0,0.08)_100%)]"
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-3 right-2 z-10 text-gray-400 hover:text-red-400 transition"
          >
            <X className="w-4 h-4" />
          </button>

          {/* TITLE + DIFFICULTY */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold tracking-wider text-red-400">
              {project.title}
            </h3>

            <span
              className={`
                text-[10px] px-2 py-1 rounded border uppercase tracking-wider
                ${
                  project.difficulty === "HARD"
                    ? "text-red-400 border-red-500/40 bg-red-500/10"
                    : project.difficulty === "MEDIUM"
                    ? "text-yellow-400 border-yellow-500/40 bg-yellow-500/10"
                    : "text-green-400 border-green-500/40 bg-green-500/10"
                }
              `}
            >
              {project.difficulty || "MEDIUM"}
            </span>
          </div>

          {/* IMAGE */}
          <div className="relative h-40 mb-4 rounded-lg overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#070B14]/95 via-transparent to-transparent" />
          </div>

          {/* SUMMARY */}
          <p className="text-xs text-gray-400 leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* ACTIONS */}
          <div className="flex gap-3 mb-5">
            <a
              href={project.demo}
              target="_blank"
              className="
                flex-1 flex items-center justify-center gap-2
                py-2 rounded-md
                text-xs uppercase tracking-wider
                text-red-400
                border border-red-500/30
                bg-red-500/10
                hover:bg-red-500/20
                transition
              "
            >
              <Zap className="w-3 h-3" />
              Launch Mission
            </a>

            <a
              href={project.github}
              target="_blank"
              className="
                w-10 h-10 flex items-center justify-center
                rounded-md
                bg-white/5
                border border-white/10
                hover:bg-white/10 hover:border-white/30
                transition
              "
            >
              <Github className="w-4 h-4 text-gray-300" />
            </a>
          </div>

          {/* TECH STACK */}
          <div>
            <p className="text-[10px] text-red-400 mb-2 uppercase tracking-wider">
              Tech Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.05 * i }}
                  whileHover={{ scale: 1.05 }}
                  className="text-[10px] px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* BOTTOM ACCENT */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-red-400 to-red-500" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
