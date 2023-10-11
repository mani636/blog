import './Logout.css';
import { useEffect } from 'react';
import { useThemeContext } from '../../context/theme';
import { useUserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { setIsLogin } = useThemeContext();

  const navigate = useNavigate();

  const clickHandler = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <div className='logout-card'>
      <h1>Please Confirm</h1>
      <h3>Are you sure you want to Logout?</h3>

      <button type='button' onClick={clickHandler}>
        Logout
      </button>

      <button className='cancel-btn' onClick={() => navigate('/')}>
        Cancel
      </button>
    </div>
  );
};

export default Logout;
