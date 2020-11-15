import React from 'react';
import Band from '../band';
import { Route } from 'react-router-dom';
import './style.css';

const BandRoute = () => {
  return(
    <div>
      Band: 
      <Route path='/band/honeymoonphase' render={(props) => <Band {...props} name={`Honeymoon Phase`} title={'Mr Ickiman'} />} />
      <Route path='/band/thefuckers' render={(props) => <Band {...props} name={`The Fuckers`} title={'Mr Fuckiman'} />} />
    </div>
  );
};

export default BandRoute;