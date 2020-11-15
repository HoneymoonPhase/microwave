import React from 'react';
import Navbar from '../navbar';
import Wrapper from '../wrapper';
import './style.css';

const Container = (props) => {
  return(
    <div className='container'>
      <Navbar />
      <Wrapper />
    </div>
  )
}

export default Container;