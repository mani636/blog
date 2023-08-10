import React from 'react';
import { navLinks } from '../../../../constants/data';
import './NavLinks.css';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <div className='nav-container'>
      <ul className='nav-link-container'>
        {navLinks.map(({ id, link, url }) => (
          <li key={id} className='nav-link'>
            <NavLink to={url}>{link}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavLinks;
