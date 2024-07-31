import { Link } from "react-router-dom";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
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
          <TbBrandGithubFilled />
        </a>

        <a
          href="https://discordapp.com/users/743010360340250725"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@jormers" />
          <FaDiscord />
        </a>
        <a
          href="https://twitter.com/sirjorm"
          target="_blank"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="@sirjorm" />
          <TbBrandTwitterFilled />
        </a>
        <Link
          to="/contact"
          className="has-tooltip hover:text-denim-200 transition-colors"
        >
          <Tooltip text="contact" />
          <IoMail />
        </Link>
      </div>
    </>
  );
}

export default Links;
