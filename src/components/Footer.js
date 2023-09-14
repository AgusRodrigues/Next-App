import React from 'react';

const Footer = () => {
  return (
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
  );
};
export default Footer;
