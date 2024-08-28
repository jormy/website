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

  const showImg = Boolean(img);

  return (
    <div
      ref={cardRef}
      className={clsx(
        styles.card,
        showImg ? "h-44" : "h-36",
        "flex items-center justify-center rounded-lg bg-denim-300/[0.3] text-denim-300 backdrop-blur-sm transition ease-in"
      )}
    >
      <div className={styles["card-border"]}></div>
      <div
        className={clsx(
          styles["card-content"],
          "flex justify-between rounded-[inherit] bg-denim-950/[0.95]"
        )}
      >
        <div className={clsx(showImg ? "w-1/2" : "w-full", "p-5")}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-1 text-lg font-bold text-denim-200 transition hover:text-denim-100"
          >
            {name}
            <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-denim-300 transition group-hover:text-denim-100" />
          </a>
          <p>{descr}</p>
          {showImg && repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute bottom-5 left-5 text-xl text-denim-300/[0.7] transition hover:text-denim-200"
            >
              <Tooltip text="view repo" />
              <FaGithub />
            </a>
          )}
        </div>
        {showImg && (
          <div className="w-1/2">
            <img
              src={img}
              className="h-full w-full rounded-r-md object-cover"
              alt={`${name} project image`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
