import React from 'react';
import Navbar from '../navbar';
import Wrapper from '../wrapper';
import { Route } from 'react-router-dom';
import './style.css';

const Container = () => {
  return(
    <div className='container'>
      <Navbar />
      <Route path='/home' component={Wrapper} />
    </div>
  )
}

export default Container;