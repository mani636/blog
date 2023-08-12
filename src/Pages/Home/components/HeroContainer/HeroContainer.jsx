import './HeroContainer.css';
import { data } from '../../../../constants/data';
import { Link } from 'react-router-dom';
import { collection, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { useEffect, useState } from 'react';

const HeroContainer = () => {
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    const q = query(collection(db, 'posts'));
    const querySnapshot = await getDocs(q);
    let posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc._id });
    });
    setPost(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='blog'>
      {post.map((post) => (
        <div className='cart-container' key={post.id}>
          <div className='blog-img-container'></div>
          <div className='blog-info-container'>
            <Link>
              <h1 className='blog-title'>{post.title}</h1>
              <p className='blog-desc'>{post.post}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroContainer;
