import React from 'react';
import Navbar from '../navbar';
import Banner from '../banner';
import Button from '../button';
import Social from '../social';
import './style.css';

const Container = (props) => {
  return(
    <div className='container'>
      <Navbar />
      <div className='wrapper'>
        <Banner />
        <Button />
        <Social />
      </div>
    </div>
  )
}

export default Container;