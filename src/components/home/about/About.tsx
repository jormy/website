import GradientCard from "@/components/gradientCard/GradientCard";
import Socials from "@/components/home/about/Socials";
import NowPlaying from "@/components/NowPlaying";
import { BsStack } from "react-icons/bs";
import { FaSpotify } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { MdDevices } from "react-icons/md";
import TechStack from "./TechStack";
import Tools from "./Tools";

export default function About() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="grid gap-4">
        <GradientCard>
          <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
            <IoIosLink />
            Socials
          </h2>
          <div className="ml-2">
            <Socials />
          </div>
        </GradientCard>

        <GradientCard>
          <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
            <MdDevices />
            Tools
          </h2>
          <div className="ml-2">
            <Tools />
          </div>
        </GradientCard>
      </div>

      <div className="grid gap-4">
        <GradientCard>
          <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
            <FaSpotify />
            Spotify
          </h2>
          <div className="ml-2">
            <NowPlaying fill={true} />
          </div>
        </GradientCard>

        <GradientCard>
          <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
            <BsStack />
            Tech Stack
          </h2>
          <div>
            <TechStack />
          </div>
        </GradientCard>
      </div>
    </div>
  );
}
