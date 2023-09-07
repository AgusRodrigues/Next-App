import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src={`/assets/umai.svg`} width={300} height={64} alt={`Logo`} />
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100"
        ></button>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 flex-row space-x-8 mt-0 border-0 bg-gray-900 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 bg-transparent md:text-blue-700 md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-0 pl-0 pr-0 text-gray-900 border-0 hover:text-blue-700 text-white "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-0 pl-0 pr-0 text-gray-900 border-0 hover:text-blue-700 text-white "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
