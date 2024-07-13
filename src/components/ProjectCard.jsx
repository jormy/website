import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
        
    return (
        <a href={props.link} target="_blank" className="">
            <div className="border-blue-body/[0.5] bg-blue-body/[0.07] text-blue-body backdrop-blur-sm border border-1 rounded-lg p-4 h-32 ">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="float-end" />
                <h2 className="text-blue-main font-bold mb-1">{props.name}</h2>
                <p>{props.descr}</p>
            </div>
        </a>
    );
}

export default ProjectCard;