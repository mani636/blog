import React from 'react';
import './SignUp.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth, db, provider } from '../../firebase';
import { signInWithPopup } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { useUserContext } from '../../context/userContext';
import { useThemeContext } from '../../context/theme';

const SignUp = () => {
  const { setLoginUser } = useUserContext();
  const { setIsLogin } = useThemeContext();

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        const collectionRef = collection(db, 'users');

        addDoc(collectionRef, {
          id: user.uid,
          userName: 'null',
          userImage: 'null',
          userEmail: user.email,
          userPhoneNo: 'null',
        });

        setEmail('');
        setPassword('');
        navigate('/login');
      })
      .catch((err) => {
        if ((err.code = 'auth/email-already-in-use')) {
          alert('this email already exits');
        } else {
          console.log('An error occured', err.message);
        }
      });
  };

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider).then((result) => {
      const user = result.user;

      setLoginUser(user.email);
      setIsLogin(true);
      navigate('/');

      localStorage.setItem('user', JSON.stringify(user.providerData[0]));
    });
  };

  return (
    <div className='signup'>
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
        <h3 className='and'>or</h3>
        <div className='signIn-google-btn'>
          <button type='button' onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </button>
        </div>
        <p>
          Already have an account? <NavLink to='/login'> sign in</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
