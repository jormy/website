"use client";

import GradientCard from "@/components/gradientCard/GradientCard";
import Tooltip from "@/components/Tooltip";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Modal from "./modal/Modal";

interface ProjectCardProps {
  name: string;
  descr: string;
  link: string;
  repo?: string;
  img?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  descr,
  link,
  repo,
  img,
}) => {
  const [showModal, setShowModal] = useState(false);
  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  return (
    <>
      <GradientCard>
        <div
          className={clsx(
            img ? "h-60 sm:h-[11rem]" : "h-28",
            "flex flex-col sm:flex-row",
          )}
        >
          <div
            className={clsx(
              img ? "w-full sm:h-48 sm:w-1/2" : "w-full",
              "order-2 w-full pr-4 pt-4 sm:order-1 sm:pt-1",
            )}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-lg font-bold text-black-100 transition hover:text-black-50"
            >
              <h1 className="mb-2 text-xl tracking-tight">
                {name}
                <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-black-300 transition group-hover:text-black-100" />
              </h1>
            </a>
            <p className="text-black-400">{descr}</p>
            {img && repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute bottom-5 left-5 text-xl text-black-300/[0.7] transition hover:text-black-200"
              >
                <Tooltip text="view repo" />
                <FaGithub />
              </a>
            )}
          </div>
          {img && (
            <div className="order-1 max-h-20 w-full sm:order-2 sm:max-h-44 sm:w-1/2">
              <img
                src={img}
                onClick={() => (showModal ? close() : open())}
                className="h-full w-full cursor-pointer rounded-md object-cover sm:m-0"
                alt={`${name} project image`}
              />
            </div>
          )}
        </div>
      </GradientCard>
      <AnimatePresence initial={false} mode="wait">
        {showModal && (
          <Modal handleClose={close} image={img || ""} text={name} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
