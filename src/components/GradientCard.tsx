import styles from "@/components/projects/projectCard/ProjectCard.module.css";
import clsx from "clsx";
import React, { useEffect, useRef } from "react";

export default function GradientCard({
  children,
}: {
  children?: React.ReactNode;
}) {
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
    <>
      <div
        ref={cardRef}
        className="card flex items-center justify-center rounded-lg bg-gradient-to-b from-black-800/[0.7] to-black-900/[0.3] text-black-300 backdrop-blur-sm"
      >
        <div className={styles["card-border"]}></div>
        <div
          className={clsx(
            styles["card-content"],
            "rounded-[inherit] bg-black-950/[0.95] p-4",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}
