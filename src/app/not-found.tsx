import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Error() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-9xl font-extrabold text-black-50">404</h1>
          <p className="mb-7 mt-5 text-xl">the page requested was not found</p>
          <span>
            <Link
              href="/"
              className="rounded-full border border-black-800 bg-black-300/[0.1] px-4 py-2 text-xl transition ease-in hover:bg-black-300/[0.2]"
            >
              go back home
              <IoIosArrowForward className="inline" />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Error;
