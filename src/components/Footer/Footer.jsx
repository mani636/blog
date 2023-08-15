import React from 'react';
import './Footer.css';
import { useThemeContext } from '../../context/theme';

const Footer = () => {
  const { isLightTheme } = useThemeContext();

  return (
    <div
      className={isLightTheme ? 'light-footer-container' : 'footer-container'}
    >
      <span>© 2023-All rights reserved.</span>
      <p>
        Developed with by <span className='heart-img'>❤</span> Manikandan Raj
      </p>
    </div>
  );
};

export default Footer;
