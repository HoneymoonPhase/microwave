import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import spotify from '../../assets/icons/spotify.png';
import youtube from '../../assets/icons/youtube.png';
import apple from '../../assets/icons/apple.png';
import './style.css';

const Social = (props) => {

  const {
    instagram_link,
    facebook_link,
    spotify_link,
    youtube_link,
    apple_link
  } = props;
  
  const hasSocialLink = (socialLink, icon, social) => {
    if (socialLink) {
      return(
        <a href={socialLink} target='_blank' rel='noreferrer'>
          <img src={icon} alt={social} width='35' />
        </a>
      )
    } else {
      return(null);
    }
  };

  return(
    <div className='wrapper-social'>
      {hasSocialLink(facebook_link, facebook, 'facebook')}
      {hasSocialLink(instagram_link, instagram, 'instagram')}
      {hasSocialLink(spotify_link, spotify, 'spotify')}
      {hasSocialLink(youtube_link, youtube, 'youtube')}
      {hasSocialLink(apple_link, apple, 'apple')}
    </div>
  )
}

export default Social;