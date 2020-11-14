import React from 'react';
import Navbar from '../navbar';
import Banner from '../banner';
import Button from '../button';
import './style.css';

const Container = (props) => {
  return(
    <div className='container'>
      <Navbar />
      <div className='wrapper'>
        <Banner />
        <Button />
      </div>
    </div>
  )
}

export default Container;