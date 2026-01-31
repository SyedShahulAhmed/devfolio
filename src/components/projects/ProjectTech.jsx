import { motion } from "framer-motion";

const ProjectTech = ({ tech }) => (
  <div className="flex flex-wrap font-terminal gap-2 mb-4">
    {tech.map((t) => (
      <span
        key={t}
        className="text-[10px] px-2 py-1 font-terminal rounded bg-white/5 border border-white/10 text-gray-300"
      >
        {t}
      </span>
    ))}
  </div>
);

export default ProjectTech;
