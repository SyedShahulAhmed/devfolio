import { Github, ExternalLink, Zap } from "lucide-react";

const ProjectActions = ({ demo, github, onInfo }) => (
  <div className="flex gap-3 mt-auto">
    <a
      href={demo}
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
      href={github}
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

    <button
      onClick={onInfo}
      className="
        w-10 h-10 flex items-center justify-center
        rounded-md
        bg-white/5
        border border-white/10
        hover:bg-white/10 hover:border-white/30
        transition
      "
    >
      <ExternalLink className="w-4 h-4 text-gray-300" />
    </button>
  </div>
);

export default ProjectActions;
