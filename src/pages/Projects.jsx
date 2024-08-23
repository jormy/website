import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../projects";
import { useTitle } from "../utils";

function Projects() {
  useTitle("projects");
  return (
    <>
      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            descr={project.descr}
            link={project.link}
            repo={project.repo}
            img={project.img}
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
