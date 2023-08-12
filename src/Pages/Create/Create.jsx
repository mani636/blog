import React, { useState } from 'react';
import './Create.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title: title, postText: postText };

    await addDoc(collection(db, 'posts'), post);
    setTitle('');
    setPostText('');
    navigate('/');
  };

  return (
    <div className='create-container'>
      <h1 className='create-blog'>Create A Post</h1>
      <div className='blog-content-container'>
        <input
          type='text'
          className='blog'
          placeholder='Title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className='content'>
        <textarea
          type='text'
          placeholder='Post...'
          className='blog-content'
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />
      </div>
      <div className='blog-content-container'>
        <button className='create-btn' onClick={createPost}>
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default Create;
