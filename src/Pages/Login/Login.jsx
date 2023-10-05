import React, { useState } from 'react';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useThemeContext } from '../../context/theme';
import './Login.css';
import { useUserContext } from '../../context/userContext';

const Login = () => {
  const { setIsLogin, setLoginUserEmail } = useThemeContext();
  const { setLoginUser } = useUserContext();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setLoginUserEmail(user.email);
        setLoginUser(user.email);
        setEmail('');
        setPassword('');
        setIsLogin(true);
        navigate('/');

        localStorage.setItem('user', JSON.stringify(user.providerData[0]));
        localStorage.setItem('isLogin', JSON.stringify(true));
      })
      .catch((err) => {
        console.log('An error occured', err.message);
      });
  };

  const clickHandler = () => {
    setEmail('test@gmail.com');
    setPassword('test@123');
  };

  return (
    <div className='login'>
      <div className='login-container'>
        <h1 className='heading'>Login</h1>
        <div className='login-email-container'>
          <input
            type='email'
            placeholder='Email'
            className='login-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='login-password-container'>
          <input
            type='password'
            placeholder='Password'
            className='login-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='signup-btn'>
          <button type='button' onClick={signIn}>
            login
          </button>
        </div>

        <div className='signup-btn'>
          <button type='button' onClick={clickHandler}>
            Test Credential
          </button>

          <p>
            Don't have an account? <NavLink to='/'> sign in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
