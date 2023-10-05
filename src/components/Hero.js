import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex col py-10 justify-center">
      <div class="da relative flex flex-col justify-center overflow-hidden bg-gray-50">
        <div class="absolute inset-0 bg-gray-800"></div>
        <div class="group relative m-0 flex h-72 w-80 rounded-xl shadow-xl ring-gray-900/5 p-4 sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-50 transition duration-300 ease-in-out group-hover:opacity-100">
            <Image
              className="hover:bg-cover"
              src={"https://static.tvmaze.com/uploads/images/medium_portrait/405/1013952.jpg"}
              width={680}
              height={1000}
              alt={"Imagen 1"}
            />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
              Top Trending
            </h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl">
            </h1>
          </div>
        </div>
      </div>
      <div class="da relative flex flex-col justify-center overflow-hidden bg-gray-50">
        <div class="absolute inset-0 bg-gray-800"></div>
        <div class="group relative m-0 flex h-72 w-80 rounded-xl shadow-xl ring-gray-900/5 p-4 sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-50 transition duration-300 ease-in-out group-hover:opacity-100 ">
          <Image
              className="hover:bg-cover"
              src={"https://static.tvmaze.com/uploads/images/medium_portrait/162/405053.jpg"}
              width={680}
              height={1000}
              alt={"Imagen 2"}
            />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
              Top View
            </h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl">
            </h1>
          </div>
        </div>
      </div>
      <div class="da relative flex flex-col justify-center overflow-hidden bg-gray-50">
        <div class="absolute inset-0 bg-gray-800"></div>
        <div class="group relative m-0 flex h-72 w-80 rounded-xl shadow-xl ring-gray-900/5 p-4 sm:max-w-lg">
          <div class="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-800 opacity-50 transition duration-300 ease-in-out group-hover:opacity-100">
          <Image
              className="hover:bg-cover"
              src={"https://static.tvmaze.com/uploads/images/medium_portrait/137/344032.jpg"}
              width={680}
              height={1000}
              alt={"Imagen 3"}
            />
          </div>
          <div class="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
            <h1 class="font-serif text-2xl font-bold text-white shadow-xl">
              Top Rating
            </h1>
            <h1 class="text-sm font-light text-gray-200 shadow-xl">
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
