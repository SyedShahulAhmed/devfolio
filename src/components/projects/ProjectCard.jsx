import { useState } from "react";
import { motion } from "framer-motion";
import HUDCorners from "./HUDCorners";
import ProjectTech from "./ProjectTech";
import ProjectActions from "./ProjectActions";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, index }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 + index * 0.1 }}
        whileHover={{ y: -8 }}
        className="group h-full"
      >
        {/* CARD CONTAINER */}
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            border border-white/10
            bg-[#070B14]
            flex flex-col
            h-full
            min-h-96
          "
        >
          {/* TOP RED STRIP */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-red-500 via-red-400 to-red-500" />

          {/* IMAGE (FIXED HEIGHT) */}
          <div className="relative h-40 shrink-0 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#070B14]/95 via-[#070B14]/70 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="p-5 flex flex-col flex-1">
            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-200 mb-2 group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>

            {/* DESCRIPTION (CLAMPED) */}
            <p className="text-sm font-oxa text-gray-400 mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* TECH STACK */}
            <ProjectTech tech={project.tech} />

            {/* PUSH ACTIONS TO BOTTOM */}
            <div className="mt-auto">
              <ProjectActions
                demo={project.demo}
                github={project.github}
                onInfo={() => setShowInfo(true)}
              />
            </div>
          </div>

          {/* HUD CORNERS */}
          <HUDCorners />
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
            <HUDCorners hover />
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
      {showInfo && (
        <ProjectModal
          project={project}
          onClose={() => setShowInfo(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
