"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import { projects, type Category } from "@/utils/projects";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import { FaCode } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";

type Direction = 1 | -1;

const easing = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  enter: (direction: Direction) => ({
    x: direction * 64,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: easing,
      staggerChildren: 0.08,
    },
  },
  exit: (direction: Direction) => ({
    x: direction * -64,
    opacity: 0,
    filter: "blur(4px)",
    transition: {
      duration: 0.3,
      ease: easing,
    },
  }),
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
  const [activeCategory, setActiveCategory] = useState<Category>("code");
  const [direction, setDirection] = useState<Direction>(1);

  function selectCategory(category: Category) {
    if (category !== activeCategory) {
      setDirection(category === "cad" ? 1 : -1);
      setActiveCategory(category);
    }
  }

  const activeProjects = projects[activeCategory];

  return (
    <>
      <div className="space-y-10">
        <div className="space-y-6">
          <h1 className="text-black-50 text-6xl font-semibold tracking-tight sm:text-7xl">
            projects{" "}
            <span className="text-black-400 inline-block min-w-[5.5ch]">
              <AnimatePresence mode="wait" initial={false}>
                <m.span
                  key={activeCategory}
                  initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
                  transition={{ duration: 0.2, ease: easing }}
                  className="inline-block"
                >
                  / {activeCategory}
                </m.span>
              </AnimatePresence>
            </span>
          </h1>
          <p className="text-xl">
            making things in{" "}
            <button
              type="button"
              onClick={() => selectCategory("code")}
              aria-pressed={activeCategory === "code"}
              className={`inline-flex cursor-pointer items-center gap-1 font-bold transition duration-200 focus-visible:outline-none ${
                activeCategory === "code"
                  ? "text-teal-400 drop-shadow-xl drop-shadow-teal-400"
                  : "text-black-400 hover:text-teal-400 hover:drop-shadow-xl hover:drop-shadow-teal-400"
              }`}
            >
              code <FaCode aria-hidden="true" />
            </button>{" "}
            and{" "}
            <button
              type="button"
              onClick={() => selectCategory("cad")}
              aria-pressed={activeCategory === "cad"}
              className={`inline-flex cursor-pointer items-center gap-1 font-bold transition duration-200 focus-visible:outline-none ${
                activeCategory === "cad"
                  ? "text-amber-400 drop-shadow-xl drop-shadow-amber-400"
                  : "text-black-400 hover:text-amber-400 hover:drop-shadow-xl hover:drop-shadow-amber-400"
              }`}
            >
              CAD <IoIosCube aria-hidden="true" />
            </button>
          </p>
        </div>
        <div id="projects-panel" className="overflow-x-clip">
          <AnimatePresence mode="wait" custom={direction}>
            <m.div
              key={activeCategory}
              custom={direction}
              variants={listVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid gap-4"
            >
              {activeProjects.map((project) => (
                <m.div key={project.name} variants={cardVariants}>
                  <ProjectCard
                    category={activeCategory}
                    name={project.name}
                    descr={project.descr}
                    img={project.img}
                    link={project.link}
                    repo={project.repo}
                  />
                </m.div>
              ))}
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default Projects;
