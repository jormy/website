import Tooltip from "../Tooltip";

export default function SocialLink(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="group transition-colors hover:text-denim-200"
    >
      <Tooltip text={props.tooltip} />
      {props.icon}
    </a>
  );
}
