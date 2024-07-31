import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Error() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="items-center flex flex-col">
          <h1 className="font-header text-denim-200 text-9xl">404</h1>
          <p className="text-xl mt-5 mb-7">the page requested was not found</p>
          <span>
            <Link
              to="/"
              className="text-xl py-2 px-4 rounded-full bg-denim-300/[0.1] hover:bg-denim-300/[0.2] transition ease-in"
            >
              go back home <IoIosArrowForward className="inline" />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Error;
