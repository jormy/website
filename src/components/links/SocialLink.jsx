import Tooltip from "../Tooltip";

export default function SocialLink(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      className="has-tooltip hover:text-denim-200 transition-colors"
    >
      <Tooltip text={props.tooltip} />
      {props.icon}
    </a>
  );
}
