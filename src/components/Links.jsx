import { Link } from "react-router-dom";
import { TbBrandGithub } from "react-icons/tb";
import { RiDiscordLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import Tooltip from "./Tooltip";

function Links() {
  return (
    <>
      <div className="flex gap-5 text-2xl space-x-2 mt-3">
        <a
          href="https://github.com/jormy"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@jormy" />
          <TbBrandGithub />
        </a>

        <a
          href="https://discordapp.com/users/743010360340250725"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@jormers" />
          <RiDiscordLine />
        </a>
        <a
          href="https://twitter.com/sirjorm"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@sirjorm" />
          <TbBrandTwitter />
        </a>
        <Link
          to="/contact"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="contact" />
          <TbMail />
        </Link>
      </div>
    </>
  );
}

export default Links;
