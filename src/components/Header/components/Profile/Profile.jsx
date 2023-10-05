import './Profile.css';
import image from '../../../../asset/WhatsApp Image 2023-08-09 at 7.14.23 PM.jpeg';
import { FaSearch } from 'react-icons/fa';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useThemeContext } from '../../../../context/theme';
import { useState } from 'react';

const Profile = () => {
  const { isLightTheme, setIsLightTheme, setSearchTerm } = useThemeContext();

  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='container'>
      <div className='profile-container'>
        <div className='img-container'>
          <img src={image} alt='user-img' className='profile-img' />
        </div>
        <h3 className={isLightTheme ? 'name-light' : 'name-dark'}>
          Manikandan Blog
        </h3>
      </div>
      <div className='right-container'>
        <div className={showSearch ? 'search-box' : 'hidden-background-search'}>
          <input
            type='text'
            placeholder='Search Blog...'
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            className={showSearch ? 'show-search' : 'hidden-search'}
          />
          <button type='button' onClick={() => setShowSearch(!showSearch)}>
            <FaSearch />
          </button>
        </div>

        <div
          className={isLightTheme ? 'sun-icon' : 'moon-icon'}
          onClick={() => setIsLightTheme(!isLightTheme)}
        >
          {isLightTheme ? <FiSun /> : <FiMoon />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
