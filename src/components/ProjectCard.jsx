import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
        
    return (
        <a href={props.link} target="_blank" className="">
            <div className="border-denim-300/[0.5] bg-denim-300/[0.07] text-denim-300 backdrop-blur-sm border border-1 rounded-lg p-4 h-32 ">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="float-end" />
                <h2 className="text-denim-200 font-bold mb-1">{props.name}</h2>
                <p>{props.descr}</p>
            </div>
        </a>
    );
}

export default ProjectCard;