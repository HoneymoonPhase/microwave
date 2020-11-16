import React from 'react';
import Navbar from '../navbar';
import Wrapper from '../wrapper';
import Band from '../band';
import Mr_Ickyman from '../../assets/Mr_Ickyman.mp4';
// import BandRoute from '../bandRoute';
import { Route } from 'react-router-dom';
import './style.css';

const Container = () => {
  return(
    <div className='container'>
      <Navbar />
      <Route exact path='/microwave/' component={Wrapper} />
      <Route exact path='/microwave/band/honeymoonphase' render={(props) => <Band {...props} name={`HONEYMOON PHASE`} title={'Mr. Ickiman'} videoSrc={Mr_Ickyman} />} />
      {/* <BandRoute /> */}
    </div>
  )
}

export default Container;