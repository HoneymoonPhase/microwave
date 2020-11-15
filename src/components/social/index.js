import React from 'react';
import facebook from '../../assests/icons/facebook.png';
import instagram from '../../assests/icons/instagram.png';
import './style.css';

const Social = () => (
      <div className='wrapper-social'>
        <img src={facebook} alt='facebook' width='40' />
        <img src={instagram} alt='instagram' width='40' />
      </div>
  );

export default Social;