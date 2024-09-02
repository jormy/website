"use client";

import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Tooltip from "@/components/Tooltip";
import styles from "@/app/projects/projectCard/ProjectCard.module.css";
import { useEffect, useRef } from "react";
import clsx from "clsx";

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

  return (
    <div
      ref={cardRef}
      className={clsx(
        styles.card,
        img ? "h-[17rem] sm:h-44" : "h-36",
        "flex items-center justify-center rounded-lg bg-black-300/[0.3] text-black-300 backdrop-blur-sm transition ease-in"
      )}
    >
      <div className={styles["card-border"]}></div>
      <div
        className={clsx(
          styles["card-content"],
          "flex flex-col sm:flex-row rounded-[inherit] bg-black-950/[0.95]"
        )}
      >
        <div
          className={clsx(
            img ? "sm:w-1/2 w-full" : "w-full",
            "order-2 sm:order-1 p-5"
          )}
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-lg font-bold text-black-100 transition hover:text-black-50"
          >
            <h1 className="text-xl mb-1">
              {name}
              <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-black-300 transition group-hover:text-black-100" />
            </h1>
          </a>
          <p>{descr}</p>
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
          <div className="order-1 sm:order-2 w-full sm:w-1/2">
            <img
              src={img}
              className="max-h-24 sm:max-h-none sm:m-0 h-full w-full rounded-t-md sm:rounded-r-md sm:rounded-l-none object-cover"
              alt={`${name} project image`}
              // FIX ROUNDING CORNER ISSUE
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
