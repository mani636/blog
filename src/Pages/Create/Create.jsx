import React, { useEffect, useState } from 'react';
import './Create.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../context/theme';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  const { isLightTheme, image, uploadImage } = useThemeContext();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');

  const navigate = useNavigate();

  const createPost = async (e) => {
    e.preventDefault();
    const post = { title: title, postText: postText, image: image };

    await addDoc(collection(db, 'posts'), post);
    setTitle('');
    setPostText('');
    navigate('/');
    toast.success('Your post successfully created');
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
          cols='30'
          rows='10'
          placeholder='Post...'
          className={isLightTheme ? 'light-blog-content' : 'blog-content'}
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          required
        />
      </div>

      <div className={isLightTheme ? 'light-content' : 'content'}>
        <input
          type='file'
          accept='image/*'
          className='image-input'
          onChange={uploadImage}
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
