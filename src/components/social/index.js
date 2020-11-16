import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';
import './style.css';

const Social = (props) => {

  const {instagram_link, facebook_link} = props;
  
  return(
    <div className='wrapper-social'>
      <a href={facebook_link} target='_blank' rel='noreferrer'>
        <img src={facebook} alt='facebook' width='40' />
      </a>
      <a href={instagram_link} target='_blank' rel='noreferrer'>
        <img src={instagram} alt='instagram' width='40' />
      </a>
    </div>
  )
}

export default Social;