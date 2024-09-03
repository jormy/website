"use client";
import Image from "next/image";
import { useRef } from "react";
import pfp from "../../../public/images/pfp.png";

const ImgHover = () => {
  const boundingRef = useRef<DOMRect | null>(null);

  return (
    <div className="[perspective:1000px]">
      <div
        onMouseLeave={() => {
          boundingRef.current = null;
        }}
        onMouseEnter={(e) => {
          boundingRef.current = e.currentTarget.getBoundingClientRect();
        }}
        onMouseMove={(e) => {
          if (!boundingRef.current) return;
          const x = e.clientX - boundingRef.current.left;
          const y = e.clientY - boundingRef.current.top;
          const xPercentage = x / boundingRef.current.width;
          const yPercentage = y / boundingRef.current.height;
          const xRotation = (xPercentage - 0.5) * 20;
          const yRotation = (0.5 - yPercentage) * 20;

          e.currentTarget.style.setProperty("--xRotation", `${yRotation}deg`); //3d rotation is weird af man
          e.currentTarget.style.setProperty("--yRotation", `${xRotation}deg`);
        }}
        className="hidden size-60 transition-transform ease-out hover:[transform:rotateX(var(--xRotation))_rotateY(var(--yRotation))_scale(1.05)] md:block"
      >
        <Image
          src={pfp}
          alt="Profile Picture"
          className="rounded-2xl"
          placeholder="blur"
          priority
        />
      </div>
    </div>
  );
};

export default ImgHover;
