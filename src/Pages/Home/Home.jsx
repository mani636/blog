import { HeroContainer, HeroTitle, Profile } from './components';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div className='hero-container'>
      <Header />
      <HeroTitle />
      <HeroContainer />
      <Profile />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
