import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-gray-900 sticky top-0 z-50 flex items-center justify-between bg-app-semi-dark-blue p-5 md:mx-6 md:mt-6 md:mb-[33px] md:rounded-[10px] lg:fixed lg:left-0 lg:mr-0 lg:h-3/6 lg:flex-col lg:py-9">
      <div className="">
        <Image src={`/assets/umai.svg`} width={200} height={64} alt={`Logo`} />
        <div className="">
          <ul className="pt-10 flex w-1/2 items-center justify-between lg:h-[200px] lg:flex-col 2xs:w-2/5">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded bg-transparent hover:text-blue-700 p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/AboutContainer"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded bg-transparent hover:text-blue-700 p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded bg-transparent hover:text-blue-700 p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
