"use client";

import ImgHover from "@/components/ImgHover";
import SocialLinks from "@/components/SocialLinks";
import ProjectCard from "@/app/projects/projectCard/ProjectCard";
import Discord from "@/components/Discord";
import { projects } from "@/utils/projects";
import { motion as m } from "framer-motion";
import { TbMoonFilled } from "react-icons/tb";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-44">
        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="w-min relative text-7xl font-semibold tracking-tight text-black-50 mb-1">
              jorm
              <Discord />
            </h1>
            <p className="max-w-96 py-3 text-lg">
              rookie dev, currently struggling to program this website.
            </p>

            <SocialLinks />
          </div>
          <ImgHover />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-semibold text-black-50 text-center">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
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
          <div className="flex justify-center">
            <Link href="/projects">
              <m.button
                initial={{ scale: 1, backgroundColor: "#050505" }}
                whileHover={{ scale: 1.05, backgroundColor: "#3d3d3d" }}
                whileTap={{ scale: 0.9 }}
                className="text-black-50 border border-black-800 px-3 py-2 rounded-lg text-center text-sm"
              >
                See all projects
              </m.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
