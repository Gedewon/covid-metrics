import React from 'react';
import PropTypes from 'prop-types';
import Continent from './Continent';
import Map from './Map';

const Home = () => (
  <section>
    <Map />
    <div className="bg-black bg-blend-multiply">
      <HeadLine headingText="CONTINENT" />
    </div>
    <Continent />
  </section>
);

export const HeadLine = ({ headingText }) => <h1 className="pl-2 font-control bg-redBackground font-semibold text-white bg-blend-multiply">{headingText}</h1>;

HeadLine.propTypes = {
  headingText: PropTypes.string.isRequired,
};

export default Home;
