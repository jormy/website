import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ name, descr, link, img, showImg = true }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`flex ${showImg ? "h-44" : "h-36"} justify-between rounded-lg border-[1px] border-denim-300/[0.5] bg-denim-300/[0.05] text-denim-300 backdrop-blur-sm transition ease-in hover:-translate-y-[2px] hover:bg-denim-300/[0.1]`}
    >
      <div className={`p-5 ${showImg ? "w-1/2" : "w-full"}`}>
        <h2 className="mb-1 text-lg font-bold text-denim-200">
          {name}
          <FaArrowUpRightFromSquare className="ml-2 inline translate-y-[-0.1em] text-sm text-denim-300" />
        </h2>
        <p>{descr}</p>
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
    </a>
  );
}

export default ProjectCard;
