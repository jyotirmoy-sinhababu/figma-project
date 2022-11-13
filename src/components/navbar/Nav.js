import './nav.css';
import Logo from '../utils/logo/Logo';

import { NavLink } from 'react-router-dom';

import profile from '../../image/profile.svg';

const Nav = () => {
  return (
    <>
      <div className='nav-cnt'>
        <div className='nav-logo-cnt'>
          <Logo />
        </div>
        <div className='nav-links'>
          <NavLink className='link'>My Assignment</NavLink>
          <NavLink className='link'>Chat with Mentor</NavLink>
          <div className='profile-cnt'>
            <img className='' src={profile} alt=' logo' />
            <NavLink className='link'>Profile Name</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
