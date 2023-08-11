import React from 'react';
import './Create.css';

const Create = () => {
  return (
    <div className='create-container'>
      <h1 className='create-blog'>CREATE YOUR BLOG</h1>
      <div className='blog-content-container'>
        <input
          type='text'
          className='blog'
          placeholder='Enter your blog title'
        />
      </div>

      <div className='content'>
        <textarea
          type='text'
          placeholder='Enter your content'
          className='blog-content'
        />
      </div>
      <div className='blog-content-container'>
        <button className='create-btn'>POST</button>
      </div>
    </div>
  );
};

export default Create;
