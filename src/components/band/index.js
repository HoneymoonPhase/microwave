import React from 'react';
import Name from '../name';
import Title from '../title';
import Video from '../video';
import Social from '../social';
import './style.css';

const Band = (props) => {

  const { name, title, videoSrc } = props;
  return(
    <div className='band-container'>
      <Name name={name} />
      <Video videoSrc={videoSrc} />
      <Title title={title} />
    </div>
  )
}

export default Band;