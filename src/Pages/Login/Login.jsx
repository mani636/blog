import React, { useState } from 'react';
import { auth } from '../../firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useThemeContext } from '../../context/theme';
import './Login.css';

const Login = () => {
  const { setIsLogin } = useThemeContext();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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

  return (
    <div className='login'>
      <div className='login-container'>
        <h1 className='heading'>Login</h1>
        <div className='email-container'>
          <input
            type='email'
            placeholder='Email'
            className='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='password-container'>
          <input
            type='password'
            placeholder='Password'
            className='password'
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
        {/* <p>
    Already have an account?<NavLink to='/login'>sign in</NavLink>
  </p> */}
      </div>
    </div>
  );
};

export default Login;
