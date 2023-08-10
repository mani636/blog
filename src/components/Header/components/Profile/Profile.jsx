import './Profile.css';
import image from '../../../../asset/WhatsApp Image 2023-08-09 at 7.14.23 PM.jpeg';
import { FaSearch } from 'react-icons/fa';
import { FiMoon } from 'react-icons/fi';

const Profile = () => {
  return (
    <div className='container'>
      <div className='profile-container'>
        <div className='img-container'>
          <img src={image} alt='user-img' className='profile-img' />
        </div>
        <h3>Manikandan Blog</h3>
      </div>
      <div className='search-container'>
        <input type='text' className='search-box' placeholder='Search Blogs' />
        <button className='search-btn'>
          <FaSearch />
        </button>
      </div>
      <div className='moon-icon'>
        <FiMoon />
      </div>
    </div>
  );
};

export default Profile;
