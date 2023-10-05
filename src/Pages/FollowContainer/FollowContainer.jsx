import { useThemeContext } from '../../context/theme';
import './FollowContainer.css';
import { socialLinks } from '../../constants/data';
import { useNavigate } from 'react-router-dom';

const FollowContainer = () => {
  const navigate = useNavigate();
  const { isShowFollow, setIsShowFollow } = useThemeContext();

  const clickHandler = () => {
    setIsShowFollow(false);
    navigate('/');
  };

  return (
    <div className={isShowFollow ? 'follow-main-container' : ''}>
      <div className='follow-container'>
        <h1>Want to not miss any updates?</h1>
        <p>Follow me on social media</p>
        <div className='follow-container-icon'>
          {socialLinks.map(({ url, id, link }) => {
            return (
              <a href={url} key={id} target='_blank' rel='noopener noreferrer'>
                {link}
              </a>
            );
          })}
        </div>
        <h2>My Github Account:</h2>
        <a
          href='https://github.com/mani636'
          target='_blank'
          className='follow-container-btn'
        >
          @ManikandanRaj
        </a>
        <button type='button' onClick={clickHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default FollowContainer;
