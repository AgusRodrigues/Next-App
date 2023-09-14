const Hero = () => {
  return (
    <div class='flex flex-wrap items-center h-screen'>
      <div class='bg-white w-full w-1/2 h-screen flex justify-center items-center'>
        <div class='mx-32'>
          <h1 class='text-6xl font-bold mt-16'>Shows</h1>
          <div class='flex mt-16 font-light text-gray-500'>
            <div class='pr-4'>
              <p class='text-2xl text-gray-900 font-semibold pt-2'>The</p>
            </div>
            <div class='pr-4'>
              <p class='text-2xl text-gray-900 font-semibold pt-2'>Best</p>
            </div>
            <div class='pr-4'>
              <p class='text-2xl text-gray-900 font-semibold pt-2'>Show</p>
            </div>
          </div>
          <div class='description w-full w-2/3 mt-16 text-gray-500 text-sm'>
            Your Ultimate Destination for TV Show Insights! Dive into a world of
            captivating television with us. Discover in-depth details, reviews,
            and the latest updates on a wide range of TV shows, from timeless
            classics to cutting-edge series. Whether you're a binge-watcher, a
            die-hard fan, or just seeking your next obsession, we've got you
            covered. Explore, discuss, and stay tuned for all things TV!'
          </div>
        </div>
      </div>
      <div class=' w-full w-1/2 h-screen bg-[url(`/assets/dc1.png`)]'></div>
    </div>
  );
};

export default Hero;
