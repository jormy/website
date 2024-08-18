import Header from "../components/hero/Header";
import ProjectCard from "../components/projectCard/ProjectCard";

function Home() {
  const projects = [
    {
      name: "btd6-viewer",
      descr:
        "React site to display btd6 information such as events, player data and challenges. Still under construction",
      link: "https://songsearch.vercel.app/",
      repo: "https://github.com/jormy/song-search",
      showImg: false,
    },
    {
      name: "song-search",
      descr: "a basic song search app using react",
      link: "https://songsearch.vercel.app/",
      repo: "https://github.com/jormy/song-search",
      showImg: false,
    },
    {
      name: "website",
      descr:
        "attempt at creating a website using reactjs. Still a work in progress",
      link: "https://jorm.vercel.app/",
      showImg: false,
    },
    {
      name: "old-website",
      descr:
        "First site i made using html and css. Never got around to finishing it.",
      link: "https://jormy.github.io/",
      showImg: false,
    },
  ];

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
            img={project.img}
            showImg={project.showImg}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
