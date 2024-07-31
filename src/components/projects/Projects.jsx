import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      name: "song-search",
      descr: "a basic song search app using react",
      link: "https://songsearch.vercel.app/",
      repo: "https://github.com/jormy/song-search",
    },
    {
      name: "website-v2",
      descr:
        "attempt at creating a website using reactjs. I hate js so idk why i did this",
      link: "https://jorm.vercel.app/",
    },
    {
      name: "old-website",
      descr:
        "First site i made using html and css. Never got around to finishing it.",
      link: "https://jormy.github.io/",
    },
  ];

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

export default Projects;
