import GradientCard from "@/components/gradientCard/GradientCard";
import { FaDiscord } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
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
    <GradientCard>
      <h2 className="mb-3 flex items-center gap-2 text-base text-black-100">
        <IoIosLink />
        Socials
      </h2>
      <div className="ml-2">
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
      </div>
    </GradientCard>
  );
}
export default SocialLinks;
