"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/utils/projects";
import { motion as m } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";

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
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

function Projects() {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-6xl font-semibold tracking-tight text-black-50 sm:text-7xl">
            projects<span className="text-black-400"> / code</span>
          </h1>
          <p className="text-xl">
            making things in{" "}
            <span className="drop-shadow-blue-400 inline-flex items-center gap-1 font-bold text-teal-400 drop-shadow-xl">
              code <FaCode />
            </span>{" "}
            and{" "}
            <span className="inline-flex items-center gap-1 font-bold text-amber-400">
              CAD <IoIosCube />
            </span>
          </p>
        </div>
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          {projects.map((project, index) => (
            <m.div key={index} variants={cardVariants}>
              <ProjectCard
                key={index}
                name={project.name}
                descr={project.descr}
                img={project.img}
                link={project.link}
                repo={project.repo}
              />
            </m.div>
          ))}
        </m.div>
      </div>
    </>
  );
}

export default Projects;
