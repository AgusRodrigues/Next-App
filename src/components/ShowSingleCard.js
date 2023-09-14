import Image from 'next/image';

const ShowSingleCard = ({ show }) => {
  return (
    <div>
      <nav className='bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Image
            src={`/assets/umai.svg`}
            width={300}
            height={64}
            alt={`Logo`}
          />
          <button
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100'
          ></button>
          <div className=' w-full block w-auto'>
            <ul className='font-medium flex flex-row p-4 p-0 mt-4 border border-gray-100 bg-gray-50 flex-row space-x-8 mt-0 border-0 bg-gray-900 '>
              <li>
                <a
                  href='#'
                  className='block p-0 text-white bg-blue-700 bg-transparent text-blue-700'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block p-0 text-gray-900 border-0 hover:text-blue-700 text-white '
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block p-0 text-gray-900 border-0 hover:text-blue-700 text-white '
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2>{show.name}</h2>
      <div className='flex items-center space-x-60 justify-center'>
        {show.image && (
          <Image
            className=''
            src={show.image?.original}
            width={680}
            height={1000}
            alt={show.name}
          />
        )}
        <div className='font-sans text-2xl font-light'>
          <p>Genres: {show.genres}</p>
          <p>Status: {show.status}</p>
          <p>Date of Premiere: {show.premiered}</p>
          <p>Date of Ending: {show.ended}</p>
        </div>
        <p className='font-sans font-light w-1/3'>{show.summary}</p>
      </div>
      <section class='bg-gray-900'>
      <div class='max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden'>
        <nav class='flex flex-wrap justify-center -mx-5 -my-2'>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-white'
            >
              About
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-white'
            >
              Contact
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-white'
            >
              Terms
            </a>
          </div>
        </nav>
        <p class='mt-8 text-base leading-6 text-center text-gray-400'>
          © 2023 TheBestShows, Inc. All rights reserved.
        </p>
      </div>
    </section>
    </div>
  );
};

export default ShowSingleCard;
