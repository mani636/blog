import React from 'react';
import './Header.css';
import { Profile, NavLinks, SocialLinks } from './components';
import { useThemeContext } from '../../context/theme';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const { isLightTheme } = useThemeContext();
  return (
    <nav className='nav'>
      <div className={isLightTheme ? 'nav-light-theme' : 'nav-main-container'}>
        <Profile />
        <SocialLinks />
        <NavLinks />
      </div>

      <Outlet />
    </nav>
  );
};

export default Header;
