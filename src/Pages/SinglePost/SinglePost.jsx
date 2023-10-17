import React from 'react';
import './SinglePost.css';
import { useThemeContext } from '../../context/theme';

const SinglePost = () => {
  const { singleBlog } = useThemeContext();

  return (
    <div className='post-container'>
      <div className='single-post-img-container'>
        <img src={singleBlog.image} alt={singleBlog.title} />
      </div>

      <div className='single-post-body-container'>
        <h1>{singleBlog.title}</h1>
        <p>{singleBlog.postText}</p>
      </div>
    </div>
  );
};

export default SinglePost;
