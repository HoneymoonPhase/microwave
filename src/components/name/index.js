import React from 'react';
import './style.css';

const Name = (props) => {

  const {name} = props;
  return(
    <div className='name-header'>
      <h2>{name}</h2>
    </div>
  )
}

export default Name;