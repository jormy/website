import styles from "@/components/gradientCard/GradientCard.module.css";
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
        className={clsx(
          styles["card"],
          "flex h-full min-w-0 items-center justify-center rounded-lg bg-linear-to-b from-black-800/70 to-black-900/30 text-black-300 backdrop-blur-xs",
        )}
      >
        <div className={styles["card-border"]}></div>
        <div
          className={clsx(
            styles["card-content"],
            "min-w-0 rounded-[inherit] bg-black-950/95 px-4 py-3",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
}
