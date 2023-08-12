import './HeroContainer.css';
import { data } from '../../../../constants/data';
import { Link } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
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

  // const deletePost = async (id) => {
  //   await deleteDoc(doc(db, 'posts', id));
  //   getPosts();
  // };

  return (
    <div className='blog'>
      {post.map((post) => (
        <div className='cart-container' key={post.id}>
          <div className='blog-info-container'>
            <Link>
              <h1 className='blog-title'>{post.title}</h1>
              <p className='blog-desc'>{post.postText}</p>
            </Link>
          </div>
          <div className='delete-post'>
            {/* <button type='button' onClick={deletePost(post.id)}>
              delete
            </button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroContainer;
