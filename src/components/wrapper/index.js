import React from 'react';
import Banner from '../banner';
import Button from '../button';
import Social from '../social';
import './style.css';

const Wrapper = () => {
  const instagram = 'https://www.instagram.com/microwavemusiccollection/';
  const facebook = 'https://www.facebook.com/microwavemusiccollection/?modal=admin_todo_tour';

  return(
    <div className='wrapper'>
      <Banner />
      <Button />
      <Social instagram_link={instagram} facebook_link={facebook} />
    </div>
  );
};

export default Wrapper;