import React from 'react';
import './Header.css';
import { Profile, NavLinks, SocialLinks } from './components';

const Header = () => {
  return (
    <nav>
      <Profile />
      <SocialLinks />
      <NavLinks />
    </nav>
  );
};

export default Header;
