import React from 'react'
import './CSS/LogingSignup.css'

export const LogingSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="logingsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
          <div className="  ">
            <input type="checkbox" name="" id="" />
            <p>By contiinuuing I agree to the terms of use & privacy policy</p>
          </div>
        </div>
    </div>
  )
}

export default LogingSignup
 