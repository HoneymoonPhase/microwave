import React from 'react';
import './style.css';

const Title = (props) => {

  const { title } = props;
  return(
    <div className='title-wrap'>
      <h2>{title}</h2>
    </div>
  )
}

export default Title;