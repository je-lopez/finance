import React, { useState } from 'react';

import logo from '../../assets/logo.svg'

import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'

const LandingPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)

  const handleSignupClick = () => setShowSignUpForm(true)
  const handleLoginClick = () => setShowLoginForm(true)

  const handleCloseForm = () => {
    setShowSignUpForm(false)
    setShowLoginForm(false)
  }

  return (
    <div>
      <div>
        <a href="https://google.com/" target="_blank">
          <img src={logo} className="logo" alt="Finance logo" />
        </a>
      </div>
      <h1>Finance</h1>
      <button className='landingBtn' onClick={handleLoginClick}>Login</button>
      <button className='landingBtn' onClick={handleSignupClick}>Sign Up</button>

      {showLoginForm && <LoginForm onClose={handleCloseForm} />}
      {showSignUpForm && <SignUpForm onClose={handleCloseForm} />}
    </div>
  )
}

export default LandingPage
