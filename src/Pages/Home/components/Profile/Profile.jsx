import React from 'react';
import './Profile.css';
import profile from '../../../../asset/WhatsApp Image 2023-08-09 at 7.14.23 PM.jpeg';
import { FiUserPlus } from 'react-icons/fi';
import { socialLinks } from '../../../../constants/data';

const Profile = () => {
  return (
    <div className='user-container'>
      <div className='user-image-container'>
        <img src={profile} alt='profile' />
      </div>
      <p className='name'>Manikandan Raj</p>
      <p>Learning new things everyday</p>
      <div className='user-follow-btn-container'>
        <span className='user-icon'>
          <FiUserPlus />
        </span>
        <button className='user-follow-btn'>Follow</button>
      </div>
      <div className='user-social-links'>
        {socialLinks.map(({ id, link, url }) => (
          <a href={url} key={id} target='_blank' rel='noopener noreferrer'>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
