import React from 'react';

import { auth } from '../firebase';

import './SignOut/SignOut.css';

const SignOutButton = () =>
  <button 
  	className='logButton'
    type="button"
    onClick={auth.doSignOut}
  >
    Exit
  </button>

export default SignOutButton;