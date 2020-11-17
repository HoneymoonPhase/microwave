import React from 'react';
import Band from '../band';
import { Route } from 'react-router-dom';
import './style.css';

const bands = [{
  name: 'HONEYMOON PHASE',
  title: 'Mr. Ickyman',
  video: 'https://www.youtube.com/embed/ipT9OIGwoF4',
  path: '/microwave/band/honeymoonphase',
  social: {
    facebook: 'https://www.facebook.com/honeymoonphaseband',
    instagram: 'https://www.instagram.com/honeymoonphaseband/',
    spotify: 'https://open.spotify.com/album/0OUZPM3ezMk4v3HhC12Vs1?highlight=spotify%3Atrack%3A0tTQIl70qt85DkC0jWRPJk',
    youtube: 'https://www.youtube.com/channel/UCIt9mhPtP6_FZFuiYyipFgA',
    apple: 'https://music.apple.com/gb/album/mr-ickyman/1516241590?i=1516241594'
  }
}]

const BandRoute = () => {
  return(
    <div>
      <Route exact path={bands[0].path} render={(props) => <Band {...props} name={bands[0].name} title={bands[0].title} videoSrc={bands[0].video} social={bands[0].social} />} />
    </div>
  )
}

export default BandRoute;