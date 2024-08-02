import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="border-1 max-w-auto h-32 rounded-lg border border-denim-300/[0.5] bg-denim-300/[0.05] p-4 text-denim-300 backdrop-blur-sm transition ease-in hover:-translate-y-[2px] hover:bg-denim-300/[0.1]"
    >
      <FaArrowUpRightFromSquare className="float-end" />
      <h2 className="mb-1 font-bold text-denim-200">{props.name}</h2>
      <p>{props.descr}</p>
    </a>
  );
}

export default ProjectCard;
