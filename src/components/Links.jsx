import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";

function Links() {
  return (
    <>
      {" "}
      <div className="flex gap-5 text-2xl space-x-2 mt-3">
        <a
          href="https://github.com/jormy"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@jormy" />
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://discordapp.com/users/743010360340250725"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@jormers" />
          <FontAwesomeIcon icon={faDiscord} />
        </a>
        <a
          href="https://twitter.com/sirjorm"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@sirjorm" />
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <Link
          to="/contact"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="contact" />
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
    </>
  );
}

export default Links;
