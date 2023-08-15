import './SocialLinks.css';
import { socialLinks } from '../../../../constants/data';
import { FiUserPlus } from 'react-icons/fi';
import { useThemeContext } from '../../../../context/theme';

const SocialLinks = () => {
  const { isLightTheme } = useThemeContext();

  return (
    <div className='social-link-container'>
      <div className='follow-btn-container'>
        <span className='user-icon'>
          <FiUserPlus />
        </span>
        <button className={isLightTheme ? 'light-follow-btn' : 'follow-btn'}>
          Follow
        </button>
      </div>
      <div className={isLightTheme ? 'light-social-icons' : 'social-links'}>
        {socialLinks.map(({ id, link, url }) => (
          <a href={url} key={id} target='_blank' rel='noopener noreferrer'>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
