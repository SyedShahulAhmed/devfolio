import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projects/data.js";
import ProjectFooter from "./ProjectFooter.jsx";

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={i}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;
