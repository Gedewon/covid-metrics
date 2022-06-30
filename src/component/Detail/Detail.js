import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { continent } = useParams();
  return (
    <div>{continent}</div>
  );
};

export default Detail;
