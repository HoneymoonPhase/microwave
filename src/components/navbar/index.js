import React from 'react';
import Menu from '../../assets/icons/dropdown.png';
import MainLogo from '../mainLogo';
import { Route } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return(
    <div className='navbar'>
      <img src={Menu} alt='dropdown' width='35' />
      <Route path='/microwave/band' component={MainLogo} />
    </div>
  )
}

export default Navbar;