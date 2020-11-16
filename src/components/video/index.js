import React from 'react';
import './style.css';

const Video = (props) => {

  const { videoSrc } = props;
  return(
    <div>
      <video controls src={videoSrc} type='video/mp4' className='video-element'></video>
    </div>
  )
}

export default Video;