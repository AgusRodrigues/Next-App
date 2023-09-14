import Image from "next/image";

const Hero = () => {
  return (
    <div class="flex flex-wrap md items-center h-screen">
      <div class="bg-white w-full md:w-1/2 h-screen">
        <div class="mx-32">
          <h1 class="text-6xl font-bold mt-16">Tokyo</h1>

          <div class="flex mt-16 font-light text-gray-500">
            <div class="pr-4">
              <span class="uppercase">Country</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Japan</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">Region</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Kanto</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">island</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Honshu</p>
            </div>
          </div>
          <div class="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
          Your Ultimate Destination for TV Show Insights! Dive into a world of
            captivating television with us. Discover in-depth details, reviews,
            and the latest updates on a wide range of TV shows, from timeless
            classics to cutting-edge series. Whether you&apos;re a binge-watcher, a
            die-hard fan, or just seeking your next obsession, we&apos;ve got you
            covered. Explore, discuss, and stay tuned for all things TV!&apos;
          </div>

          <button class="uppercase mt-5 text-sm font-semibold hover:underline">
            read more
          </button>
        </div>
      </div>
      <div class=" w-full md:w-1/2 h-screen bg-[url('/assets/dc1.png')]">
      </div>
    </div>
  );
};

export default Hero;
