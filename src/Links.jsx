import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
function Links() {
    return (
        <>  
                <a href="https://github.com/jormy" target="_blank" className="pr-3"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://discordapp.com/users/743010360340250725" target="_blank" ><FontAwesomeIcon icon={faDiscord} /></a>
            
        </>
    )
}

export default Links