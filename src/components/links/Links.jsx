import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaDiscord } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { IoMail } from "react-icons/io5";
import Tooltip from "../Tooltip";

function Links() {
  return (
    <>
      <div className="flex gap-5 text-2xl space-x-2 mt-3">
        <SocialLink
          link="https://github.com/jormy"
          icon={<TbBrandGithubFilled />}
          tooltip="@jormy"
        />

        <SocialLink
          link="https://discordapp.com/users/743010360340250725"
          icon={<FaDiscord />}
          tooltip="@jormers"
        />
        <SocialLink
          link="https://twitter.com/sirjorm"
          icon={<TbBrandTwitterFilled />}
          tooltip="@sirjorm"
        />
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
