import React from 'react';
import './Header.css';
import { Profile, NavLinks, SocialLinks } from './components';

const Header = ({ isLightTheme, setIsLightTheme }) => {
  return (
    <nav>
      <Profile isLightTheme={isLightTheme} setIsLightTheme={setIsLightTheme} />
      <SocialLinks />
      <NavLinks />
    </nav>
  );
};

export default Header;
