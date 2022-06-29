import React from 'react';
import { ChevronLeftIcon, CogIcon, MicrophoneIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="flex justify-between sticky font-control py-2 sm:p-6 bg-redBackground items-center">
      <ChevronLeftIcon className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
      <section>
        <p className="text-white sm:text-lg sm:text-bold">most views </p>
      </section>
      <section className="flex justify-evenly items-center">
        <MicrophoneIcon className="h-4 w-4 sm:h-8 sm:w-8 text-white" />
        <CogIcon className="h-4 mx-4 w-4  sm:h-8 sm:w-8 text-white" />
      </section>
    </header>
  );
}

export default Header;
