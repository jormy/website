import { NavLink } from "react-router-dom";
import NowPlaying from "../spotify/NowPlaying";
import NavLinkWrapper from "./NavLinkWrapper";

//TODO: replace links with hamburger menu for mobile
const Navbar = () => {
  return (
    <>
      <div className="flex max-w-4xl justify-between">
        <nav className="flex flex-1 gap-5 text-lg text-denim-300">
          <NavLink to="/">
            <NavLinkWrapper title="/" />
          </NavLink>
          <NavLink to="/projects">
            <NavLinkWrapper title="projects" />
          </NavLink>
          <NavLink to="/contact">
            <NavLinkWrapper title="contact" />
          </NavLink>
        </nav>
        <NowPlaying />
      </div>
    </>
  );
};

export default Navbar;
