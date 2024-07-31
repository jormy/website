import { NavLink } from "react-router-dom";
import NowPlaying from "../spotify/NowPlaying";
import NavLinkWrapper from "./NavLinkWrapper";

//TODO: replace links with hamburger menu for mobile
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between max-w-4xl ">
        <nav className="flex-1 flex gap-5 text-denim-300 text-lg">
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
