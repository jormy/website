import GradientCard from "@/components/gradientCard/GradientCard";
import { projects } from "@/utils/projects";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPencil } from "react-icons/fa6";

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
      delay: 0.3,
    },
  },
};

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <m.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="relative col-span-6 grid gap-4 md:col-span-4"
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <Link href="/projects">
            <m.button
              initial={{
                scale: 1,
                backgroundColor: "#050505",
                translateX: "-50%",
                translateY: "-50%",
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3d3d3d",
                translateX: "-50%",
                translateY: "-50%",
              }}
              whileTap={{ scale: 0.9 }}
              className={clsx([
                isHovered ? `opacity-100` : `opacity-0`,
                `absolute left-1/2 top-1/2 z-10 rounded-lg border border-black-800 px-3 py-2 text-center text-sm text-black-50 transition-opacity duration-500 ease-out`,
              ])}
            >
              All projects
            </m.button>
          </Link>
          <GradientCard>
            <div className="flex w-full justify-between">
              <h2 className="mb-4 flex items-center gap-2 text-base text-black-100">
                <FaPencil />
                Projects
              </h2>
              <div className="space-x-3">
                <m.button
                  onClick={scrollPrev}
                  initial={{ scale: 1, backgroundColor: "#050505" }}
                  whileHover={{ scale: 1.05, backgroundColor: "#3d3d3d" }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border border-black-800 p-2 text-center text-sm text-black-50"
                >
                  <FaChevronLeft />
                </m.button>
                <m.button
                  onClick={scrollNext}
                  initial={{ scale: 1, backgroundColor: "#050505" }}
                  whileHover={{ scale: 1.05, backgroundColor: "#3d3d3d" }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border border-black-800 p-2 text-center text-sm text-black-50"
                >
                  <FaChevronRight />
                </m.button>
              </div>
            </div>

            <div
              className={`overflow-hidden transition duration-300 ${
                isHovered ? "blur-sm" : "blur-none"
              }`}
              ref={emblaRef}
            >
              <div className="flex">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="relative min-w-0 flex-[0_0_100%] px-2"
                  >
                    <div className="ease-gradient absolute bottom-0 w-full px-4 pb-4 pt-16">
                      <h3 className="text-lg font-semibold text-black-100">
                        {project.name}
                      </h3>
                      <p>{project.descr}</p>
                    </div>

                    <Image
                      src={project.img}
                      alt={`${project.name} project image`}
                      width={1000}
                      height={300}
                      className="max-h-44 rounded-md object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </GradientCard>
        </div>
      </m.div>
    </>
  );
}
