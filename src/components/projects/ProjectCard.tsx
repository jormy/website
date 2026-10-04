"use client";

import GradientCard from "@/components/gradientCard/GradientCard";
import Tooltip from "@/components/Tooltip";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Modal from "./modal/Modal";
import { Category } from "@/utils/projects";
import MakerWorldIcon from "@/../public/icons/MakerWorldIcon";

interface ProjectCardProps {
  category: Category;
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
  category,
}) => {
  const [showModal, setShowModal] = useState(false);
  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  return (
    <>
      <GradientCard>
        <div className="flex h-60 flex-col sm:h-44 sm:flex-row">
          <div className="order-2 w-full pt-4 pr-4 sm:order-1 sm:h-48 sm:w-1/2 sm:pt-1">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-black-100 hover:text-black-50 text-lg font-bold transition"
            >
              <h1 className="mb-2 text-xl tracking-tight">
                {name}
                <FaArrowUpRightFromSquare className="text-black-300 group-hover:text-black-100 ml-2 inline translate-y-[-0.1em] text-sm transition" />
              </h1>
            </a>
            <p className="text-black-400">{descr}</p>
            {category === "cad" ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black-300/70 hover:text-black-200 absolute bottom-5 left-5 text-xl transition"
              >
                <Tooltip text="view on MakerWorld" />
                <MakerWorldIcon className="size-4" />
              </a>
            ) : repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-black-300/70 hover:text-black-200 absolute bottom-5 left-5 text-xl transition"
              >
                <Tooltip text="view repo" />
                <FaGithub />
              </a>
            ) : null}
          </div>
          <div className="order-1 max-h-20 w-full sm:order-2 sm:max-h-44 sm:w-1/2">
            <img
              src={img}
              onClick={() => (showModal ? close() : open())}
              className="h-full w-full cursor-pointer rounded-md object-cover sm:m-0"
              alt={`${name} project image`}
            />
          </div>
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
