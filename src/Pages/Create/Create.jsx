import React, { useState } from 'react';
import './Create.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';

const Create = () => {
  const { isLightTheme } = useThemeContext();
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
    <div
      className={isLightTheme ? 'light-create-container' : 'create-container'}
    >
      <h1 className='create-blog'>Create A Post</h1>
      <div
        className={
          isLightTheme
            ? 'light-blog-content-container'
            : 'blog-content-container'
        }
      >
        <input
          type='text'
          className='blog'
          placeholder='Title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className={isLightTheme ? 'light-content' : 'content'}>
        <textarea
          type='text'
          placeholder='Post...'
          className={isLightTheme ? 'light-blog-content' : 'blog-content'}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />
      </div>
      <div className='blog-content-container'>
        <button
          className={isLightTheme ? 'light-create-btn' : 'create-btn'}
          onClick={createPost}
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default Create;
