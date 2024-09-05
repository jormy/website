import GradientCard from "@/components/gradientCard/GradientCard";
import Socials from "@/components/home/about/Socials";
import NowPlaying from "@/components/NowPlaying";
import { motion as m } from "framer-motion";
import { BsStack } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import TechStack from "./TechStack";
import Tools from "./Tools";

const leftContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const rightContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function About() {
  return (
    <m.div className="grid gap-4 md:grid-cols-2">
      <m.div
        variants={leftContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-4"
      >
        <m.div variants={cardVariants}>
          <GradientCard>
            <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
              <IoIosLink />
              Socials
            </h2>
            <div className="ml-2">
              <Socials />
            </div>
          </GradientCard>
        </m.div>

        <m.div variants={cardVariants}>
          <GradientCard>
            <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
              <MdDevices />
              Tools
            </h2>
            <div className="ml-2">
              <Tools />
            </div>
          </GradientCard>
        </m.div>
      </m.div>

      <m.div
        variants={rightContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-4"
      >
        <m.div variants={cardVariants}>
          <GradientCard>
            <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
              <FaSpotify />
              Spotify
            </h2>
            <div className="ml-2">
              <NowPlaying fill={true} />
            </div>
          </GradientCard>
        </m.div>

        <m.div variants={cardVariants}>
          <GradientCard>
            <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
              <BsStack />
              Tech Stack
            </h2>
            <div>
              <TechStack />
            </div>
          </GradientCard>
        </m.div>
      </m.div>
    </m.div>
  );
}
