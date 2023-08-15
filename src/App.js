import { useState } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home, Create, Login, SignUp } from './Pages';
import { useThemeContext } from './context/theme';

const App = () => {
  const { isLightTheme } = useThemeContext();

  return (
    <main className={isLightTheme ? 'light-theme' : 'main-container'}>
      <SignUp />
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes> */}
    </main>
  );
};

export default App;
