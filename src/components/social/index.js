import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import './style.css';

const Social = (props) => {

  const {instagram_link, facebook_link} = props;
  
  const hasSocialLink = (socialLink, icon, social) => {
    if (social) {
      return(
        <a href={socialLink} target='_blank' rel='noreferrer'>
          <img src={icon} alt={social} width='40' />
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
    </div>
  )
}

export default Social;