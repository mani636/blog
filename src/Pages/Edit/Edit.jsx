import React, { useEffect, useState } from 'react';
import { useThemeContext } from '../../context/theme';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Edit = () => {
  const { isLightTheme, editPost } = useThemeContext();
  const [title, setTitle] = useState('');
  const [postText, setPostText] = useState('');
  const [modifiedField, setModifiedField] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    setTitle(editPost.title);
    setPostText(editPost.postText);
  }, []);

  const handleSubmit = async () => {
    const documentRef = doc(db, 'posts', editPost.id);

    try {
      await updateDoc(documentRef, modifiedField);
    } catch (err) {
      console.log(err);
    }

    navigate('/');
    toast.success('Updated Successfully');
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
    setModifiedField({ ...modifiedField, title: e.target.value });
  };

  const onPostTextChange = (e) => {
    setPostText(e.target.value);
    setModifiedField({ ...modifiedField, postText: e.target.value });
  };

  return (
    <div
      className={isLightTheme ? 'light-create-container' : 'create-container'}
    >
      <h1 className='create-blog'>Edit Post</h1>
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
          onChange={onTitleChange}
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
          onChange={onPostTextChange}
          required
        />
      </div>
      <div className='blog-content-container'>
        <button
          className={isLightTheme ? 'light-create-btn' : 'create-btn'}
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Edit;
