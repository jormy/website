import Header from "../components/hero/Header";
import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../projects";
import { useTitle } from "../utils";

function Home() {
  useTitle("");
  return (
    <>
      <Header />
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            descr={project.descr}
            link={project.link}
            repo={project.repo}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
