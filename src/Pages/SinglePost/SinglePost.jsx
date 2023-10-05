import React from 'react';
import './SinglePost.css';
import birds from '../../asset/download (1).jpg';

const SinglePost = () => {
  return (
    <div className='post-container'>
      <div className='post-card'>
        <div className='post-img-container'>
          <img src={birds} alt='birds' />
        </div>

        <div className='title'></div>

        <div className='desc'></div>
      </div>
    </div>
  );
};

export default SinglePost;
