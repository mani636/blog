import React from 'react';
import './Header.css';
import { Profile, NavLinks, SocialLinks } from './components';
import { useThemeContext } from '../../context/theme';

const Header = () => {
  const { isLightTheme } = useThemeContext();
  return (
    <nav className={isLightTheme ? 'nav-light-theme' : 'nav'}>
      <Profile />
      <SocialLinks />
      <NavLinks />
    </nav>
  );
};

export default Header;
