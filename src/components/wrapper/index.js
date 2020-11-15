import React from 'react';
import Banner from '../banner';
import Button from '../button';
import Social from '../social';
import './style.css';

const Wrapper = () => {
  return (
    <div className='wrapper'>
      <Banner />
      <Button />
      <Social />
    </div>
  );
};

export default Wrapper;