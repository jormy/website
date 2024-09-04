import Tooltip from "@/components/Tooltip";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled, TbBrandTwitterFilled } from "react-icons/tb";

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
    <a
      href={href}
      target="_blank"
      className="group transition-colors hover:text-black-50"
    >
      <Tooltip text={tooltip} />
      {children}
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="mt-3 flex gap-5 space-x-2 text-2xl">
      <SocialLink href="https://github.com/jormy" tooltip="@jormy">
        <TbBrandGithubFilled />
      </SocialLink>
      <SocialLink
        href="https://discordapp.com/users/743010360340250725"
        tooltip="@jormers"
      >
        <FaDiscord />
      </SocialLink>
      <SocialLink href="https://twitter.com/sirjorm" tooltip="@sirjorm">
        <TbBrandTwitterFilled />
      </SocialLink>
      <SocialLink href="/contact" tooltip="contact">
        <IoMail />
      </SocialLink>
    </div>
  );
}
export default SocialLinks;
