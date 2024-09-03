"use client";

import styles from "@/app/projects/projectCard/ProjectCard.module.css";
import Tooltip from "@/components/Tooltip";
import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Modal from "../modal/Modal";

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
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      cardRef.current.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    const throttledMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => handleMouseMove(e));
    };

    document.body.addEventListener("mousemove", throttledMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  const [showModal, setShowModal] = useState(false);
  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  return (
    <>
      <div
        ref={cardRef}
        className={clsx(
          styles.card,
          img ? "h-[18rem] sm:h-48" : "h-36",
          "flex items-center justify-center rounded-lg bg-black-300/[0.3] text-black-300 backdrop-blur-sm transition ease-in",
        )}
      >
        <div className={styles["card-border"]}></div>
        <div
          className={clsx(
            styles["card-content"],
            "flex flex-col rounded-[inherit] bg-black-950/[0.95] sm:flex-row",
          )}
        >
          <div
            className={clsx(
              img ? "w-full sm:w-1/2" : "w-full",
              "order-2 p-5 sm:order-1",
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
            <div className="order-1 w-full sm:order-2 sm:w-1/2">
              <img
                src={img}
                onClick={() => (showModal ? close() : open())}
                className="h-full max-h-24 w-full cursor-pointer rounded-t-md object-cover sm:m-0 sm:max-h-none sm:rounded-l-none sm:rounded-r-md"
                alt={`${name} project image`}
              />
            </div>
          )}
        </div>
      </div>
      <AnimatePresence initial={false} mode="wait">
        {showModal && (
          <Modal handleClose={close} image={img || ""} text={name} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
