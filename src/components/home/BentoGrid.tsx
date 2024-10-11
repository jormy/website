import NowPlaying from "@/components/home/cards/NowPlaying";
import Projects from "@/components/home/cards/Projects";
import Socials from "@/components/home/cards/Socials";
import TechStack from "@/components/home/cards/TechStack";
import Tools from "@/components/home/cards/Tools";
import { motion as m } from "framer-motion";

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

const bottomContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
      delayChildren: 0.4,
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

export default function BentoGrid() {
  return (
    <div className="grid w-full grid-cols-6 gap-4">
      <m.div className="col-span-6 grid w-full gap-4 md:grid-cols-2">
        <m.div
          variants={leftContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          <m.div variants={cardVariants}>
            <Socials />
          </m.div>

          <m.div variants={cardVariants}>
            <Tools />
          </m.div>
        </m.div>

        <m.div
          variants={rightContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-4"
        >
          <m.div variants={cardVariants}>
            <NowPlaying />
          </m.div>

          <m.div variants={cardVariants}>
            <TechStack />
          </m.div>
        </m.div>
      </m.div>

      <m.div
        variants={bottomContainer}
        initial="hidden"
        animate="visible"
        className="col-span-6 flex w-full flex-col gap-4 md:flex-row"
      >
        <m.div variants={cardVariants}>
          <Projects />
        </m.div>

        {/* <m.div variants={cardVariants}>
          <Weather />
        </m.div> */}
      </m.div>
    </div>
  );
}
