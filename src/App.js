import { Fragment } from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Home, About, Create, Login } from './Pages';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/create' element={<Create />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Fragment>
  );
};

export default App;
