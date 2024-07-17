import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
    return (
        <a href={props.link} target="_blank" className="border-denim-300/[0.5] bg-denim-300/[0.05] text-denim-300 backdrop-blur-sm border border-1 rounded-lg p-4 h-32 max-w-auto hover:-translate-y-[2px] transition ease-in hover:bg-denim-300/[0.1]">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="float-end" />
                <h2 className="text-denim-200 font-bold mb-1">
                    {props.name}
                </h2>
                <p>{props.descr}</p>
        </a>
    );
}

export default ProjectCard;