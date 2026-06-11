import Tooltip from "@/components/Tooltip";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import MakerWorldIcon from "@/../public/icons/MakerWorldIcon";

function SocialLink({
  children,
  href,
  tooltip,
}: {
  children: React.ReactNode;
  href: string;
  tooltip: string;
}) {
  return (
    <Tooltip text={tooltip}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors hover:text-black-50"
      >
        {children}
      </a>
    </Tooltip>
  );
}

function SocialLinks() {
  return (
    <div className="mt-3 flex gap-5 space-x-2 text-2xl">
      <SocialLink href="https://github.com/jormy" tooltip="github">
        <TbBrandGithubFilled />
      </SocialLink>
      <SocialLink href="https://makerworld.com/@jormy" tooltip="makerworld">
        <MakerWorldIcon className="size-6" />
      </SocialLink>
      <SocialLink
        href="https://discordapp.com/users/743010360340250725"
        tooltip="discord"
      >
        <FaDiscord />
      </SocialLink>
      <SocialLink href="/contact" tooltip="contact">
        <IoMail />
      </SocialLink>
    </div>
  );
}
export default SocialLinks;
