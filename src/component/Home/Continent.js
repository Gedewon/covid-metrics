import React, { useCallback } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContinentLists from '../../data/ContinentIcons/ContinentLists';
import { numberWithCommas } from './Map';

const Continent = () => {
  const content = useSelector((state) => state.Continent);

  const getContentConfirmedCase = useCallback((contentName) => {
    if (!content) return 0;
    let totalAmount = 0;

    Object.keys(content).forEach((countryInContent) => {
      if (content[countryInContent]?.All?.continent === contentName) {
        totalAmount += content[countryInContent]?.All?.confirmed;
      }
    });

    return numberWithCommas(totalAmount);
  }, [content]);

  return (
    <div className="flex flex-wrap flex-1 bg-black sm:px-48 ">
      {ContinentLists.map(({ ISO, ICON, name }) => (
        <div key={`index${ISO}`} className="flex flex-col w-1/2 bg-redBackground last:w-full drop-shadow-2xl hover:-translate-x-6 transition-all cursor-pointer last:pb-6">
          <Link to={`detail/${name}`}>
            <div className="flex">
              <ICON className="w-full" width="50%" height="80%" />
              <ArrowCircleRightIcon className="h-5 w-5 text-white " />
            </div>
            <div>
              <p className="text-white text-center">{name.toUpperCase()}</p>
              <p className="text-white mx-4 text-center">{getContentConfirmedCase(name)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Continent;
