import NowPlaying from "@/components/home/cards/NowPlaying";
import Projects from "@/components/home/cards/Projects";
import TechStack from "@/components/home/cards/Music";
import Tools from "@/components/home/cards/Tools";
import { motion as m } from "framer-motion";
import MakerWorld from "./cards/MakerWorld";

const leftContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.3,
      staggerChildren: 0.2,
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
      staggerChildren: 0.3,
      delayChildren: 0.1,
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
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function BentoGrid() {
  return (
    <div className="grid w-full min-w-0 grid-cols-6 gap-4">
      <m.div className="col-span-6 grid w-full min-w-0 gap-4 md:grid-cols-2">
        <m.div
          variants={leftContainer}
          initial="hidden"
          animate="visible"
          className="grid min-w-0 gap-4"
        >
          <m.div variants={cardVariants} className="min-w-0">
            <MakerWorld />
          </m.div>

          <m.div variants={cardVariants} className="min-w-0">
            <Tools />
          </m.div>
        </m.div>

        <m.div
          variants={rightContainer}
          initial="hidden"
          animate="visible"
          className="grid min-w-0 gap-4"
        >
          <m.div variants={cardVariants} className="min-w-0">
            <NowPlaying />
          </m.div>

          <m.div variants={cardVariants} className="min-w-0">
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
