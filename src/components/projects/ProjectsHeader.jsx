import { motion } from "framer-motion";

const ProjectsHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <div className="inline-block px-4 py-1 border border-red-500/30 rounded bg-red-500/10 mb-4">
        <span className="text-[10px] tracking-widest text-red-400">
          MISSION SELECT
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold">
        PROJECT <span className="text-red-500">MISSIONS</span>
      </h1>

      <p className="text-gray-400 max-w-xl mx-auto mt-4">
        Navigate through completed and ongoing development missions
      </p>
    </motion.div>
  );
};

export default ProjectsHeader;
