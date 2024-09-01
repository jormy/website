"use client";

import ImgHover from "@/components/ImgHover";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/app/projects/projectCard/ProjectCard";
import Discord from "@/components/Discord";
import { projects } from "@/utils/projects";
import { benzin } from "../utils/fonts";
import { motion as m } from "framer-motion";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <m.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              key={index}
              name={project.name}
              descr={project.descr}
              link={project.link}
              repo={project.repo}
            />
          </m.div>
        ))}
      </div>
    </>
  );
}
