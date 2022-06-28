import React from 'react'
import {ChevronLeftIcon,CogIcon,MicrophoneIcon} from '@heroicons/react/solid';
function Header() {
  return (
    <header className='flex justify-between sticky font-control py-2 bg-redBackground items-center'>
        <ChevronLeftIcon  className="h-6 w-6 text-white"/>
        <section >
          <p className='text-white'>most views </p>
        </section>
        <section className='flex justify-evenly items-center'>
          <MicrophoneIcon  className="h-4 w-4 text-white"/>
          <CogIcon  className="h-4 mx-4 w-4 text-white"/>
        </section>
    </header>
  )
}

export default Header  