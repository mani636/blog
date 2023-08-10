import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className='signup-container'>
      <h1 className='heading'>Sign Up</h1>
      <div className='email-container'>
        <input type='text' placeholder='Email' className='email' />
      </div>
      <div className='password-container'>
        <input type='text' placeholder='Password' className='password' />
      </div>
      <div className='signup-btn'>
        <button>SIGN UP</button>
      </div>
    </div>
  );
};

export default SignUp;
