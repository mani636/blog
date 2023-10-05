import './Logout.css';
import { useThemeContext } from '../../context/theme';

const Logout = () => {
  const { setIsLogin } = useThemeContext();
  const clickHandler = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <div className='logout-card'>
      <h1>Profile</h1>
      <div className='logout-details-box'>
        <p>Full Name:</p>
        <p> test</p>
      </div>

      <div className='logout-details-box'>
        <p>Email:</p>
        <p> test@gmail.com</p>
      </div>

      <button type='button' onClick={clickHandler}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
