const Hero = () => {
  return (
    <div class="flex flex-wrap md items-center h-screen">
      <div class="bg-white w-full md:w-1/2 h-screen flex justify-center items-center">
        <div class="mx-32">
          <h1 class="text-6xl font-bold mt-16">Shows</h1>
          <div class="flex mt-16 font-light text-gray-500">
            <div class="pr-4">
              <p class="text-2xl text-gray-900 font-semibold pt-2">The</p>
            </div>
            <div class="pr-4">
              <p class="text-2xl text-gray-900 font-semibold pt-2">Best</p>
            </div>
            <div class="pr-4">
              <p class="text-2xl text-gray-900 font-semibold pt-2">Shows</p>
            </div>
          </div>
          <div class="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm">
            Tokyo, Japan’s busy capital, mixes the ultramodern and the
            traditional, from neon-lit skyscrapers to historic temples. The
            opulent Meiji Shinto Shrine is known for its towering gate and
            surrounding woods. The Imperial Palace sits amid large public
            gardens
          </div>
        </div>
      </div>
      <div class="bg-red-600 w-full md:w-1/2 h-screen bg-[url('/assets/dc1.png')]"></div>
    </div>

    /*bg-[rgba(0,0,0,.6)] w-full h-full flex justify-center items-center bg-[url('/assets/fondo_dc.webp')]*/
  );
};

export default Hero;
