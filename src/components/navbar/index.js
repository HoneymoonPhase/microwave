import React from 'react';
import Menu from '../../assests/icons/setup.png';
import './style.css';

const Navbar = (props) => {
  return(
    <div className='navbar'>
      <img src={Menu} alt='dropdown' width='30' />
    </div>
  )
}

export default Navbar;