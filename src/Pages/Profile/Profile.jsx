import { useEffect } from 'react';

import { useThemeContext } from '../../context/theme';
import { useUserContext } from '../../context/userContext';
import './Profile.css';

const Profile = () => {
  const { isLightTheme } = useThemeContext();
  const { data, userProfile, loginUser, users } = useUserContext();

  useEffect(() => {
    userProfile();
  }, []);

  console.log('Profile Page:15', data);
  console.log('Profile Page:16', loginUser);
  console.log('Profile Page:17  ', users);

  return (
    <div className={isLightTheme ? 'light-profile' : 'profile'}>
      <div
        className={
          isLightTheme
            ? 'light-profile-left-container'
            : 'profile-left-container'
        }
      >
        <div className='profile-img-container'>
          <img src='' alt='' className='profile-img' />
        </div>
        <h3>{data?.userName}</h3>
        <p>{data?.userEmail}</p>
      </div>
      <div className='profile-right-container'>
        <h1>Edit Profile</h1>
        <div className='input-container'>
          <div className='input-field-container'>
            <label htmlFor='name'>{data?.userName}</label>
            <input type='text' id='name' placeholder='First Name...' />
          </div>
          <div className='input-field-container'>
            <label htmlFor='last-name'>Last Name</label>
            <input type='text' id='last-name' placeholder='Last Name...' />
          </div>
        </div>

        <div className='input-container'>
          <div className='input-field-container'>
            <label htmlFor='email'>Email Address</label>
            <input type='email' id='email' placeholder='Email...' />
          </div>

          <div className='input-field-container'>
            <label htmlFor='phone-no'>Phone No</label>
            <input type='number' id='phone-no' placeholder='Phone No...' />
          </div>
        </div>
        <div className='btn'>
          <button className='save-btn'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
