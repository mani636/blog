import { HeroContainer, HeroTitle, Profile } from './components';
import './Home.css';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='hero-container'>
      <HeroTitle />
      <HeroContainer />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
