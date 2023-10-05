import Image from "next/image";
import Link from "next/link";

const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <nav className="bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <Image
              src={`/assets/umai.svg`}
              width={300}
              height={64}
              alt={`Logo`}
            />
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 -lg hover:bg-gray-100"
          ></button>
          <div className=" hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700  bg-transparent hover:text-blue-700 p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700  bg-transparent hover:text-blue-700 p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700  bg-transparent hover:text-blue-700 p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>{show.name}</h2>
      <div className="pl-14 pb-10 flex items-center space-x-60 justify-center">
        {show.image && (
          <Image
            className="pr-10"
            src={show.image?.original}
            width={500}
            height={800}
            alt={show.name}
          />
        )}
        <div>
          {" "}
          <div className="font-sans text-2xl font-light p-10">
            <p>Genres: {show.genres}</p>
            <p>Status: {show.status}</p>
            <p>Date of Premiere: {show.premiered}</p>
            <p>Date of Ending: {show.ended}</p>
          </div>
          <p className="font-sans font-light w-1/2 p-10">{show.summary}</p>
        </div>
      </div>
      <section class="bg-gray-900">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-white"
              >
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-white"
              >
                Contact
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-white"
              >
                Terms
              </a>
            </div>
          </nav>
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2023 TheBestShows, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ShowSingleCard;
