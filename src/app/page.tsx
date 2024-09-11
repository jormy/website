"use client";

import BentoGrid from "@/components/home/BentoGrid";
import { Clock } from "@/components/home/Clock";
import Discord from "@/components/home/Discord";
import ImgHover from "@/components/home/ImgHover";
import SocialLinks from "@/components/home/SocialLinks";

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

      <BentoGrid />
    </>
  );
}
