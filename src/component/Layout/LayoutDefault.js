import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Header from './Header';

function LayoutDefault({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
LayoutDefault.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LayoutDefault;
