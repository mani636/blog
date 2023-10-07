import './HeroContainer.css';
import { data } from '../../../../constants/data';
import { Link, useNavigate } from 'react-router-dom';
import { collection, deleteDoc, doc, getDocs, query } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../../../../context/theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

const HeroContainer = () => {
  const { isLightTheme, setEditPost, searchTerm, setShowDialog, showDialog } =
    useThemeContext();
  const [post, setPost] = useState([]);
  const [deleteId, setDeleteId] = useState('');

  const navigate = useNavigate();

  const getPosts = async () => {
    const q = query(collection(db, 'posts'));
    const querySnapshot = await getDocs(q);
    let posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    setPost(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handleEdit = (post) => {
    setEditPost(post);
    navigate('/edit');
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDialog(true);
  };

  const deletePost = async (id) => {
    try {
      await deleteDoc(doc(db, 'posts', id));
      getPosts();
      toast.success('Your post successfully deleted');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className='blog'>
      {post
        .filter((post) => {
          if (searchTerm == '') {
            return post;
          } else if (
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return post;
          }
        })
        .map((post) => (
          <div
            className={isLightTheme ? 'light-cart-container' : 'cart-container'}
            key={post.id}
          >
            <div
              className={
                isLightTheme
                  ? 'light-blog-info-container'
                  : 'blog-info-container'
              }
            >
              <h1 className={isLightTheme ? 'light-blog-title' : 'blog-title'}>
                {post.title}
              </h1>
              <p className={isLightTheme ? 'light-blog-desc' : 'blog-desc'}>
                {post.postText}
              </p>

              <div className='update-and-delete-container'>
                <div className='update-post'>
                  <button type='button' onClick={() => handleEdit(post)}>
                    Edit
                  </button>
                </div>
                <div className='delete-post'>
                  <button type='button' onClick={() => handleDelete(post.id)}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      {showDialog && (
        <ConfirmDialog onDelete={deletePost} deleteId={deleteId} />
      )}
    </div>
  );
};

export default HeroContainer;
