"use client";

import { Clock } from "@/components/home/Clock";
import Discord from "@/components/home/Discord";
import ImgHover from "@/components/home/ImgHover";
import SocialLinks from "@/components/home/SocialLinks";
import ProjectCard from "@/components/projects/projectCard/ProjectCard";
import { projects } from "@/utils/projects";
import { motion as m } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-44">
        <div className="mb-10 flex justify-between">
          <div>
            <h1 className="relative mb-1 w-min text-7xl font-semibold tracking-tight text-black-50">
              jorm
              <Discord />
            </h1>
            <p className="max-w-96 py-3 text-lg">
              rookie dev, currently struggling to program this website.
            </p>

            <SocialLinks />
            <p className="flex items-center py-6 text-black-300">
              <Clock />
            </p>
          </div>
          <ImgHover />
        </div>

        {/* <div>
          <h2 className="text-4xl font-semibold text-black-50 text-center">
            About Me
          </h2>
        </div> */}

        <div className="space-y-6">
          <h2 className="text-center text-4xl font-semibold text-black-50">
            Selected Projects
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                className="rounded-lg border border-black-800 px-3 py-2 text-center text-sm text-black-50"
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
