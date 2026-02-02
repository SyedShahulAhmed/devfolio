import ProjectsLayout from "../components/projects/ProjectsLayout";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import ProjectsMap from "../components/projects/ProjectsMap";
import ProjectsGrid from "../components/projects/ProjectsGrid";

export default function Projects() {
  return (
    <ProjectsLayout>
      <ProjectsHeader />
      <ProjectsMap />
      <ProjectsGrid />
    </ProjectsLayout>
    
  );
}
