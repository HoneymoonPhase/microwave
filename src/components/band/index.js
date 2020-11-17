import React from 'react';
import Name from '../name';
import Title from '../title';
import Video from '../video';
import Social from '../social';
import './style.css';

const Band = (props) => {

  const { name, title, videoSrc, social } = props;
  return(
    <div className='band-container'>
      <Name name={name} />
      <Video videoSrc={videoSrc} />
      <Title title={title} />
      <Social
      facebook_link={social.facebook}
      instagram_link={social.instagram}
      spotify_link={social.spotify}
      youtube_link={social.youtube}
      apple_link={social.apple}
      />
    </div>
  )
}

export default Band;