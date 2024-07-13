import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import Tooltip from './Tooltip'

function Links() {
    return (
        <>  <div className='text-blue-body text-3xl space-x-2 mt-3 mb-10'>
                <a href="https://github.com/jormy" 
                    target="_blank" 
                    className="has-tooltip pr-3 hover:text-blue-light transition-colors">
                        <Tooltip text="@jormy" />
                        <FontAwesomeIcon icon={faGithub} 
                    />
                </a>

                <a href="https://discordapp.com/users/743010360340250725" 
                    target="_blank" 
                    className="has-tooltip hover:text-blue-light transition-colors">
                        <Tooltip text="@jormers" />
                        <FontAwesomeIcon icon={faDiscord} 
                    />
                </a>
                
            </div>
        </>
    )
}

export default Links