import { Fragment } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Create, Login, SignUp } from './Pages';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Fragment>
  );
};

export default App;
