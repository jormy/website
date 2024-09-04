import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled, TbBrandTwitterFilled } from "react-icons/tb";

function SocialLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
  tooltip: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 transition-colors hover:text-black-200"
    >
      {children}
    </a>
  );
}

function SocialLinks() {
  return (
    <ul className="space-y-3 text-black-400">
      <li>
        <SocialLink href="https://github.com/jormy" tooltip="@jormy">
          <TbBrandGithubFilled /> Github
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://discordapp.com/users/743010360340250725"
          tooltip="@jormers"
        >
          <FaDiscord /> Discord
        </SocialLink>
      </li>
      <li>
        <SocialLink href="https://twitter.com/sirjorm" tooltip="@sirjorm">
          <TbBrandTwitterFilled /> Twitter
        </SocialLink>
      </li>
    </ul>
  );
}
export default SocialLinks;
