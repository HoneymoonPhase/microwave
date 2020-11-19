import React from 'react';
import Home from '../../assets/icons/home.png';
import { Link } from 'react-router-dom';

const MainLogo = () => (
  <Link to='/microwave/' >
    <img src={Home} alt='home-button' width='50' />
  </Link>
  );

export default MainLogo;