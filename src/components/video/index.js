import React from 'react';
import './style.css';

const Video = (props) => {

  // const { videoSrc } = props;
  return(
    <div>
      {/* <video controls src={videoSrc} type='video/mp4' className='video-element'></video> */}
      <iframe className='video-element' title='honeymoon'
      src="https://www.youtube.com/embed/ipT9OIGwoF4"
      frameBorder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope;
      picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default Video;