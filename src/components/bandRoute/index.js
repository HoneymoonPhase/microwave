import React from 'react';
import Band from '../band';
import { Route } from 'react-router-dom';
// import Mr_Ickyman from '../../assets/Mr_Ickyman.mp4';
import './style.css';

const BandRoute = () => {
  return(
    <div>
      <Route exact path='/microwave/band/honeymoonphase' render={(props) => <Band {...props} name={`HONEYMOON PHASE`} title={'Mr. Ickyman'} videoSrc={'https://www.youtube.com/embed/ipT9OIGwoF4'} />} />
    </div>
  )
}

export default BandRoute;