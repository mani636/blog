import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Create,
  Login,
  SignUp,
  Edit,
  Profile,
  SinglePost,
  Logout,
} from './Pages';
import { useThemeContext } from './context/theme';
import Header from './components/Header/Header';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';
import { useEffect } from 'react';

const App = () => {
  const { isLightTheme, isLogin, setUserList } = useThemeContext();

  const getUsers = async () => {
    const user = await getDocs(query(collection(db, 'users')));

    return user.docs.map((doc) => doc.data());
  };

  const usersListInfo = async () => {
    await getUsers().then((data) => {
      setUserList(data);
    });
  };

  useEffect(() => {
    usersListInfo();
  }, []);

  return (
    <main className={isLightTheme ? 'light-theme' : 'main-container'}>
      <Routes>
        <Route path='/' element={isLogin ? <Header /> : <SignUp />}>
          <Route index={true} element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/singlePost' element={<SinglePost />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
