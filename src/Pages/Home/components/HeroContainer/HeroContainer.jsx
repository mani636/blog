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
  const {
    isLightTheme,
    setEditPost,
    searchTerm,
    setShowDialog,
    showDialog,
    setSingleBlog,
  } = useThemeContext();
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

  const handlePost = (post) => {
    setSingleBlog(post);
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
                  ? 'light-blog-image-container'
                  : 'blog-image-container'
              }
            >
              <img src={post.image} alt={post.title} />
            </div>

            <div
              className={
                isLightTheme
                  ? 'light-blog-body-container'
                  : 'blog-body-container'
              }
            >
              <h2>{post.title}</h2>
              <p>{post.postText}</p>
              <Link to='singlePost' onClick={() => handlePost(post)}>
                read more
              </Link>
            </div>

            <div
              className={isLightTheme ? 'light-btn-container' : 'btn-container'}
            >
              <button type='button' onClick={() => handleEdit(post)}>
                Edit
              </button>
              <button type='button' onClick={() => handleDelete(post.id)}>
                Delete
              </button>
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
