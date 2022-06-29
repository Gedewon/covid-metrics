import React from 'react';

const Spinner = () => (
  <div className="w-screen h-screen flex justify-center items-center z-50 bg-black/90 absolute top-0 backdrop-opacity-10">
    <div className="flex items-center justify-center ">
      <div className="w-24 h-24 border-l-4 border-redBackground rounded-full animate-spin" />
    </div>
  </div>
);

export default Spinner;
