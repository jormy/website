import Links from "../links/Links";
import Pfp from "./Pfp";
import Discord from "./Discord";

function Header() {
  return (
    <>
      <div className="mb-10 flex justify-between">
        <div>
          <h1 className="relative w-min font-header text-8xl font-bold text-denim-200">
            jorm
            <Discord />
          </h1>
          <p className="mt-5 max-w-96 py-3 text-xl sm:text-2xl">
            rookie dev, currently struggling to program this website.
          </p>
          <Links />
        </div>
        <Pfp />
      </div>
    </>
  );
}

export default Header;
