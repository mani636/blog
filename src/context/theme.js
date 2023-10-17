import { useState, createContext, useContext, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { toast } from 'react-toastify';
import { storage } from '../firebase';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [editPost, setEditPost] = useState();
  const [userList, setUserList] = useState();
  const [loginUserEmail, setLoginUserEmail] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [isShowFollow, setIsShowFollow] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [singleBlog, setSingleBlog] = useState('');

  const [image, setImage] = useState('');

  const fetchLoginInfo = () => {
    const loginInfo =
      localStorage.getItem('isLogin') !== 'undefined'
        ? JSON.parse(localStorage.getItem('isLogin'))
        : localStorage.clear();

    return loginInfo;
  };

  useEffect(() => {
    const user = fetchLoginInfo;
    setIsLogin(user);
  }, []);

  const uploadImage = (event) => {
    const imageFile = event.target.files[0];

    const storageRef = ref(storage, `Images/${Date.now()}/${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
          case 'paused':
            toast.info('Upload is Paused!');
            break;
          case 'running':
            toast.warning('Waiting for Image Upload!!');
            break;
        }
      },
      (error) => {
        console.log('Error', error);
        toast.error('Error... Try Again!');
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          toast.success('Image Uploaded Successfully!');
        });
      }
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        setIsLightTheme,
        isLogin,
        setIsLogin,
        editPost,
        setEditPost,
        userList,
        setUserList,
        loginUserEmail,
        setLoginUserEmail,
        searchTerm,
        setSearchTerm,
        isShowFollow,
        setIsShowFollow,
        showDialog,
        setShowDialog,
        image,
        setImage,
        uploadImage,
        singleBlog,
        setSingleBlog,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeContext, ThemeProvider, useThemeContext };
