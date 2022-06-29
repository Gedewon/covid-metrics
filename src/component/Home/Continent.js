import React from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import ContinentLists from './ContinentIcons/ContinentLists';

const Continent = () => (
  <div className="flex flex-wrap flex-1 bg-black sm:px-48 ">
    {ContinentLists.map(({ ISO, ICON }) => (
      <div key={`index${ISO}`} className="flex w-1/2 h-[200px] bg-redBackground last:w-full drop-shadow-2xl hover:-translate-x-6 transition-all cursor-pointer">
        <ICON className="w-full" width="50%" height="80%" />
        <ArrowCircleRightIcon className="h-5 w-5 text-white" />
        {JSON.stringify(ISO)}
      </div>
    ))}
  </div>
);

export default Continent;
