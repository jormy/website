import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <div className="flex items-center mb-2">
        <Link
          to="/projects"
          className="hover:text-denim-200 ease-in-out duration-200"
        >
          See more
        </Link>
        <div className="ml-3 border-b-[1px] flex-grow border-denim-300/[0.5]"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProjectCard
          name="website-v2"
          descr="attempt at creating a website using reactjs. I hate js so idk why i did this"
          link="https://github.com/jormy/website-v2"
        />

        <ProjectCard
          name="old-website"
          descr="My first site ever (as you can probably tell from the code)"
          link="https://github.com/jormy/jormy.github.io"
        />

        <ProjectCard
          name="future-project"
          descr="ill add more projects here as i make them"
          link="https://github.com/jormy"
        />

        <ProjectCard
          name="future-project"
          descr="i swear ill do something soon i promise"
          link="https://github.com/jormy"
        />
      </div>
    </>
  );
}

export default Projects;
