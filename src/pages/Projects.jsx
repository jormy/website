import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <>
            <div className="grid grid-cols-1 gap-4">
                <ProjectCard
                    name="this page is still a work in progress"
                    descr="i will update this as i make more projects."
                    link="https://github.com/jormy"
                />
            </div>
        </>
    )
}

export default Projects;