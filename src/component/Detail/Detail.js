import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ContinentLists from '../../data/ContinentIcons/ContinentLists';
// import { loadCountry } from '../../redux/country/country';
import { HeadLine } from '../Home/Home';
import 'flag-icons';
// import Error404 from './component/commonComponent/404';
import Error404 from '../commonComponent/404';
import { numberWithCommas } from '../Home/Map';

const Detail = () => {
  const { continent } = useParams();
  const { ICON } = ContinentLists.filter((continents) => continents.name === continent)[0];

  const continentList = useSelector((state) => state.Continent);

  // UN COMMENT THIS WHEN API IS OPEN AGAIN
  // const country = useSelector((state) => state.Country);
  /**
   * useEffect(() => {
    let isDispose = false;

    if (!isDispose && !localStorage.getItem(`${continent}`)) {
      dispatch(loadCountry(continent));
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }
    if (localStorage.getItem('content')) {
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }

    return () => { isDispose = true; };
  }, [continent]);
   */

  // Note: I am going to manually filter from cache since the API blocked my request

  const listOfCountry = useMemo(() => {
    if (!continentList) return [];
    const listOfCountry = [];
    Object.keys(continentList).forEach((countryInContent) => {
      if (continentList[countryInContent]?.All?.continent === continent) {
        listOfCountry.push({ [`${countryInContent}`]: continentList[countryInContent] });
      }
    });

    return listOfCountry;
  }, [continentList]);

  return (

    <section className="bg-black">

      <div className="flex  w-full h-[200px] bg-redBackground drop-shadow-2xl brightness-50 items-center justify-around p-12">
        <ICON className="w-auto h-min" />
        <p className="text-white font-primary font-semibold text-lg text-center">{continent}</p>
      </div>
      <span className="brightness-49">
        {' '}
        <HeadLine headingText="COUNTRY" />
        {' '}
      </span>
      {listOfCountry.length > 0
        ? listOfCountry.map((country) => (
          <div key={`${Object.values(country)[0].All.abbreviation}_`} className="flex items-center justify-evenly  bg-redBackground   font-control  last:w-full drop-shadow-2xl hover:-translate-x-6 transition-all cursor-pointer last:pb-6">
            <span className={`p-20  px-auto fi fi-${Object.values(country)[0].All.abbreviation?.toLowerCase()}`} />
            <p className="text-black font-bold text-center">{Object.values(country)[0].All.country }</p>
            <div className="flex flex-col">

              <p className="text-white text-center font-semibold">
                confirmed :
                {numberWithCommas(Object.values(country)[0].All.confirmed) }
              </p>
              <p className="text-white text-center font-semibold">
                Deaths:
                {numberWithCommas(Object.values(country)[0].All.deaths) }
              </p>
            </div>
          </div>
        ))
        : (
          <div className="bg-white">

            <Error404 />
          </div>
        )}
    </section>
  );
};

export default Detail;
