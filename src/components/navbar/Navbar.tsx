import NavLink from "@/components/navbar/NavLink";
import NowPlaying from "@/components/NowPlaying";

function Navbar() {
  return (
    <div className="flex max-w-4xl justify-between">
      <nav className="flex flex-1 gap-5 text-lg text-denim-300">
        <NavLink href="/">/</NavLink>
        <NavLink href="projects">projects</NavLink>
        <NavLink href="contact">contact</NavLink>
      </nav>
      <NowPlaying />
    </div>
  );
}
export default Navbar;
