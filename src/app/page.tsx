import ImgHover from "@/components/ImgHover";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/app/projects/projectCard/ProjectCard";
import Discord from "@/components/Discord";
import { projects } from "@/utils/projects";
import { benzin } from "../utils/fonts";

export default function Home() {
  return (
    <>
      <div className="mb-10 flex justify-between">
        <div>
          <h1
            className={`${benzin.className} relative w-min text-8xl font-bold text-denim-200`}
          >
            jorm
            <Discord />
          </h1>
          <p className="mt-5 max-w-96 py-3 text-xl sm:text-2xl">
            rookie dev, currently struggling to program this website.
          </p>
          <SocialLinks />
        </div>
        <ImgHover />
      </div>
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
