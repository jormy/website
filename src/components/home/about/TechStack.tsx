import Marquee from "react-fast-marquee";
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

  return (
    <div className="max-w-[23rem] space-y-6 overflow-x-hidden text-4xl text-black-300">
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
  );
}
