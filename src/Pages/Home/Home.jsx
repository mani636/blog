import { HeroContainer, HeroTitle, Profile } from './components';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import { useThemeContext } from '../../context/theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { isLightTheme } = useThemeContext();
  return (
    <div
      className={isLightTheme ? 'hero-light-theme-container' : 'hero-container'}
    >
      <HeroTitle />
      <HeroContainer />
      <Profile />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
