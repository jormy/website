import { Link } from "react-router-dom";
import NowPlaying from "../spotify/NowPlaying";
import LinkWrapper from "../navbar/LinkWrapper";

//TODO: replace links with hamburger menu for mobile
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between max-w-4xl ">
        <nav className="flex-1 flex gap-5 text-denim-200 text-lg">
          <Link to="/">
            <LinkWrapper title="/" />
          </Link>
          <Link to="/projects">
            <LinkWrapper title="projects" />
          </Link>
          <Link to="/contact">
            <LinkWrapper title="contact" />
          </Link>
        </nav>
        <NowPlaying />
      </div>
    </>
  );
};

export default Navbar;
