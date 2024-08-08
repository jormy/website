import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Tooltip from "./Tooltip";

function ProjectCard({ name, descr, link, repo, img, showImg = true }) {
  return (
    <div
      className={`flex ${showImg ? "h-44" : "h-36"} justify-between rounded-lg border-[1px] border-denim-300/[0.5] bg-denim-300/[0.05] text-denim-300 backdrop-blur-sm transition ease-in hover:-translate-y-[2px] hover:bg-denim-300/[0.1]`}
    >
      <div className={`p-5 ${showImg ? "w-1/2" : "w-full"}`}>
        <a
          href={link}
          target="_blank"
          className="group mb-1 text-lg font-bold text-denim-200 transition hover:text-denim-100"
        >
          {name}
          <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-denim-300 transition group-hover:text-denim-100" />
        </a>
        <p>{descr}</p>
        <a
          href={repo}
          className="group absolute bottom-5 left-5 text-xl text-denim-300/[0.7] transition hover:text-denim-200"
        >
          <Tooltip text="view repo" />
          <FaGithub />
        </a>
      </div>
      {showImg && (
        <div className="w-1/2">
          <img
            src={img}
            className="h-full w-full rounded-r-md object-cover"
            alt="Project Image"
          />
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
