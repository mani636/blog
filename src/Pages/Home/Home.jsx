import { HeroContainer, HeroTitle } from './components';
import './Home.css';

const Home = () => {
  return (
    <div className='hero-container'>
      <HeroTitle />
      <HeroContainer />
    </div>
  );
};

export default Home;
