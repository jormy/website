import ProjectCard from "../components/ProjectCard";
import songsearch from "../images/projects/songsearch.png";
import website from "../images/projects/website.png";
import oldwebsite from "../images/projects/old-website.png";

function Projects() {
  const projects = [
    {
      name: "song-search",
      descr: "a basic song search app using react",
      link: "https://songsearch.vercel.app/",
      repo: "https://github.com/jormy/song-search",
      img: songsearch,
    },
    {
      name: "website",
      descr:
        "attempt at creating a website using reactjs. Still a work in progress",
      link: "https://jorm.vercel.app/",
      repo: "https://github.com/jormy/website-v2",
      img: website,
    },
    {
      name: "old-website",
      descr:
        "First site i made using html and css. Never got around to finishing it.",
      link: "https://jormy.github.io/",
      repo: "https://github.com/jormy/jormy.github.io",
      img: oldwebsite,
    },
  ];

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
