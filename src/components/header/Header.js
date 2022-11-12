import React from 'react';
import './header.css';

const Header = ({ txtContent }) => {
  return (
    <div className='header-cnt'>
      <p className='head'>{txtContent}</p>
    </div>
  );
};

export default Header;
