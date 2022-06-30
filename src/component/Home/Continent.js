import React, { useCallback, useState, useRef } from 'react';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ContinentLists from '../../data/ContinentIcons/ContinentLists';
import { numberWithCommas } from './Map';
import Error404 from '../commonComponent/404';

const Continent = () => {
  const content = useSelector((state) => state.Continent);
  const [continentList, setContinentList] = useState(ContinentLists);

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
  const refValue = useRef(null);
  function filterCallback(content) {
    return content.name.toLowerCase().includes(refValue.current.value.toLowerCase());
  }
  const handleFilter = (event) => {
    setContinentList(
      !event.target.value
        ? ContinentLists
        : continentList.filter(filterCallback),
    );
  };
  return (
    <div className="flex flex-wrap flex-1 bg-black sm:px-48 ">
      <input type="text" ref={refValue} placeholder="Search for Continent" onChange={handleFilter} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

      {
      continentList.length > 0
        ? continentList.map(({ ISO, ICON, name }) => (
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
        ))
        : (
          <span className="bg-white pb-8 w-full">
            <Error404 />
          </span>
        )
    }
    </div>
  );
};

export default Continent;
