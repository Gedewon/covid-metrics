import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Continent from './Continent';
import Map, { numberWithCommas } from './Map';
import { loadContent } from '../../redux/continent/continent';

const Home = () => {
  const content = useSelector((state) => state.Continent);
  const dispatch = useDispatch();

  useEffect(() => {
    let isDispose = false;

    if (!isDispose && !localStorage.getItem('content')) dispatch(loadContent());

    return () => { isDispose = true; };
  }, []);

  return (

    <section>
      <div className="w-auto  my-12 mx-auto text-lg md:text-5xl text-center">
        <h1 className="text-xlg">
          There is
          <span className="font-primary font-bold text-redBackground">
            {' '}
            {numberWithCommas(content.Global.All.confirmed)}
          </span>
          {' '}
          confirmed cases of Coronavirus around the world today.
        </h1>
      </div>
      <Map />
      <div className="bg-black bg-blend-multiply">
        <HeadLine headingText="CONTINENT" />
      </div>
      <Continent />
    </section>
  );
};

export const HeadLine = ({ headingText }) => <h1 className="pl-2 font-control bg-redBackground font-semibold text-white bg-blend-multiply">{headingText}</h1>;

HeadLine.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Home;
