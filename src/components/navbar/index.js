import React from 'react';
import Menu from '../../assests/icons/dropdown.png';
import './style.css';

const Navbar = (props) => {
  return(
    <div className='navbar'>
      <img src={Menu} alt='dropdown' width='35' />
    </div>
  )
}

export default Navbar;