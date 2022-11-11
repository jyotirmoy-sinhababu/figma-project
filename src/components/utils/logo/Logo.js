import React from 'react';
import logo from '../../../image/logo.svg';
const Logo = () => {
  return (
    <div>
      <div className='nav-logo'>
        <img className='logo' src={logo} alt='logo' />
      </div>
    </div>
  );
};

export default Logo;
