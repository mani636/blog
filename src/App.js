import { Route, Routes } from 'react-router-dom';
import { Home, Create, Login, SignUp } from './Pages';
import { useThemeContext } from './context/theme';
import Header from './components/Header/Header';

const App = () => {
  const { isLightTheme, isLogin } = useThemeContext();

  return (
    <main className={isLightTheme ? 'light-theme' : 'main-container'}>
      <Routes>
        <Route path='/' element={isLogin ? <Header /> : <SignUp />}>
          <Route index={true} element={<Home />} />
          <Route path='/create' element={<Create />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </main>
  );
};

export default App;
