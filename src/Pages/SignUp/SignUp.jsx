import React from 'react';
import './SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch((err) => {
        console.log('An error occured', err.message);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
  };

  return (
    <div className='signup-container'>
      <h1 className='heading'>Sign Up</h1>
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
        <button type='button' onClick={onSubmit}>
          SIGN UP
        </button>
      </div>
      <h3>or</h3>
      <div className='signIn-google-btn'>
        <button type='button' onClick={() => {}}>
          SIGN IN WITH GOOGLE
        </button>
      </div>
      <p>
        Already have an account? <NavLink to='/login'> sign in</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
