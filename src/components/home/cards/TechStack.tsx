import GradientCard from "@/components/gradientCard/GradientCard";
import { useEffect, useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import { BsStack } from "react-icons/bs";
import {
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiVite,
} from "react-icons/si";

export default function TechStack() {
  const icons = [
    { icon: <FaCss3Alt /> },
    { icon: <FaFigma /> },
    { icon: <SiGit /> },
    { icon: <FaHtml5 /> },
    { icon: <FaJs /> },
    { icon: <FaNodeJs /> },
    { icon: <FaPython /> },
    { icon: <FaReact /> },
    { icon: <SiNextdotjs /> },
    { icon: <SiTailwindcss /> },
    { icon: <SiTypescript /> },
    { icon: <SiVisualstudiocode /> },
    { icon: <SiVite /> },
    { icon: <SiVercel /> },
  ];

  let shuffledIcons = icons
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  const parentRef = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState<number | null>(null);

  useEffect(() => {
    if (parentRef.current) {
      setParentWidth(parentRef.current.offsetWidth);
    }
  }, []);

  return (
    <GradientCard>
      <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
        <BsStack />
        Tech Stack
      </h2>
      <div ref={parentRef} className="w-full text-4xl text-black-300">
        <div
          className="mx-auto space-y-4"
          style={{ maxWidth: parentWidth ? `${parentWidth}px` : "100%" }}
        >
          <Marquee
            direction="left"
            gradient
            gradientColor="#050505"
            gradientWidth={70}
          >
            {icons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[calc(23rem/14)] px-2 transition-colors hover:text-black-50"
                >
                  {icon.icon}
                </div>
              );
            })}
          </Marquee>
          <Marquee
            direction="right"
            gradient
            gradientColor="#050505"
            gradientWidth={70}
          >
            {shuffledIcons.map((icon, index) => {
              return (
                <div
                  key={index}
                  className="min-w-[calc(23rem/14)] px-2 transition-colors hover:text-black-50"
                >
                  {icon.icon}
                </div>
              );
            })}
          </Marquee>
        </div>
      </div>
    </GradientCard>
  );
}
