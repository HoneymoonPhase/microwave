import React from 'react';
import Navbar from '../navbar';
import Wrapper from '../wrapper';
import BandRoute from '../bandRoute';
import { Route } from 'react-router-dom';
import './style.css';

const Container = () => {
  return(
    <div className='container'>
      <Navbar />
      <Route exact path='/microwave/' component={Wrapper} />
      <Route path='/microwave/band' component={BandRoute} />
    </div>
  )
}

export default Container;