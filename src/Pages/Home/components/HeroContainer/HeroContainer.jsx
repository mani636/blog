import './HeroContainer.css';
import { data } from '../../../../constants/data';
import { Link } from 'react-router-dom';

const HeroContainer = () => {
  return (
    <div className='blog'>
      {data.map(({ id, title, desc }) => (
        <div className='cart-container'>
          <div className='blog-img-container'></div>
          <div className='blog-info-container'>
            <Link key={id}>
              <h1 className='blog-title'>{title}</h1>
              <p className='blog-desc'>{desc}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroContainer;
