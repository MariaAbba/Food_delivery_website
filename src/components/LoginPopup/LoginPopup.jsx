import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ SetshowLogin }) => {
  const [currentState, setCurrentState] = useState('Login')

  return (
    <div className="login-popup">
      <form className="login-popup-container" action="">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => SetshowLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === 'Login' ? <></> : <input type="text" placeholder="Your Name" required />
          }

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>
          {currentState === 'Sign Up' ? 'Create account' : 'Login'}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, you agree to our Terms of Use and Privacy Policy</p>
        </div>
        {currentState === 'Login' ? (
          <p>
            Create a new account ? <span onClick={()=> setCurrentState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={()=> setCurrentState('Log in')}>Log in here</span>
          </p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup
