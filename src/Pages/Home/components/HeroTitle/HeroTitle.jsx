import './HeroTitle.css';
import { useThemeContext } from '../../../../context/theme';

const HeroTitle = () => {
  const { isLightTheme } = useThemeContext();
  return (
    <div>
      <h1 className={isLightTheme ? 'light-hero-title' : 'hero-title'}>
        Welcome to my blogs!
      </h1>
    </div>
  );
};

export default HeroTitle;
