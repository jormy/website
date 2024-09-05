"use client";

import About from "@/components/home/about/About";
import { Clock } from "@/components/home/Clock";
import Discord from "@/components/home/Discord";
import ImgHover from "@/components/home/ImgHover";
import SocialLinks from "@/components/home/SocialLinks";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/utils/projects";
import { motion as m } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="space-y-32">
        <div className="flex justify-between">
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

        <m.div className="space-y-6">
          <m.h2
            initial={{ opacity: 0, filter: "blur(10px" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="text-center text-4xl font-semibold text-black-50"
          >
            About
          </m.h2>
          <About />
        </m.div>

        <m.div className="space-y-6">
          <m.h2
            initial={{ opacity: 0, filter: "blur(10px" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="text-center text-4xl font-semibold text-black-50"
          >
            Selected Projects
          </m.h2>
          <m.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {projects.slice(0, 2).map((project, index) => (
              <m.div key={index} variants={cardVariants}>
                <ProjectCard
                  name={project.name}
                  descr={project.descr}
                  link={project.link}
                  repo={project.repo}
                />
              </m.div>
            ))}
          </m.div>
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
        </m.div>
      </div>
    </>
  );
}
