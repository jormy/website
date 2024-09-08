"use client";

import GradientCard from "@/components/gradientCard/GradientCard";
import About from "@/components/home/about/About";
import { Clock } from "@/components/home/Clock";
import Discord from "@/components/home/Discord";
import ImgHover from "@/components/home/ImgHover";
import Projects from "@/components/home/projects/Projects";
import SocialLinks from "@/components/home/SocialLinks";
import { motion as m } from "framer-motion";

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
      delay: 0.4,
    },
  },
};

export default function Home() {
  return (
    <>
      <div className="mb-10 flex justify-between">
        <div>
          <h1 className="relative mb-1 w-min text-7xl font-semibold tracking-tight text-black-50">
            jorm
            <Discord />
          </h1>
          <p className="max-w-96 py-3 text-lg">
            rookie dev, currently struggling to program this website.
          </p>
          <SocialLinks />
          <p className="flex items-center py-6 text-black-300">
            <Clock />
          </p>
        </div>
        <ImgHover />
      </div>

      <div className="grid grid-cols-6 gap-4">
        <About />
        <Projects />
        <m.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="col-span-2"
        >
          <GradientCard>
            <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
              Under Construction
            </h2>
            <p>check back later when I think of what to put here</p>
          </GradientCard>
        </m.div>
      </div>
    </>
  );
}
