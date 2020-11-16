import React from 'react';
import Band from '../band';
import { Route } from 'react-router-dom';
import Mr_Ickyman from '../../assets/Mr_Ickyman.mp4';
import './style.css';

const BandRoute = () => {
  return(
    <div>
      <Route path='/band/honeymoonphase' render={(props) => <Band {...props} name={`HONEYMOON PHASE`} title={'Mr. Ickiman'} videoSrc={Mr_Ickyman} />} />
    </div>
  )
}

export default BandRoute;