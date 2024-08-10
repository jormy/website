import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import Tooltip from "../Tooltip";
import "./ProjectCard.css";

function ProjectCard({ name, descr, link, repo, img, showImg = true }) {
  document.body.onmousemove = (e) => {
    for (const date of document.getElementsByClassName("card")) {
      const rect = date.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      date.style.setProperty("--mouse-x", `${x}px`);
      date.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      className={`card ${showImg ? "h-44" : "h-36"} flex items-center justify-center rounded-lg bg-denim-300/[0.3] text-denim-300 backdrop-blur-sm transition ease-in`}
    >
      <div className="card-border"></div>
      <div className="card-content flex justify-between rounded-[inherit] bg-denim-950/[0.95]">
        <div className={`${showImg ? "w-1/2" : "w-full"} p-5`}>
          <a
            href={link}
            target="_blank"
            className="group mb-1 text-lg font-bold text-denim-200 transition hover:text-denim-100"
          >
            {name}
            <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-denim-300 transition group-hover:text-denim-100" />
          </a>
          <p>{descr}</p>
          {showImg && (
            <a
              href={repo}
              target="_blank"
              className="group absolute bottom-5 left-5 text-xl text-denim-300/[0.7] transition hover:text-denim-200"
            >
              <Tooltip text="view repo" />
              <FaGithub />
            </a>
          )}
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
    </div>
  );
}

export default ProjectCard;
