import './nav.css';
import Logo from '../utils/logo/Logo';

import { NavLink } from 'react-router-dom';

import vector from '../../image/Vector.svg';

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
          <div>
            <img className='' src={vector} alt=' logo' />
            <NavLink className='link'>Profile Name</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
