import React from 'react';
import Name from '../name';
import Title from '../title';

const Band = (props) => {

  const { name, title } = props;
  return(
    <div>
      <Name name={name} />
      <Title title={title} />
    </div>
  )
}

export default Band;