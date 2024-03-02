import React from 'react'
import "./css/login.css"
const Loginsignpage = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email address' />
          <input type="password" placeholder='password' />
         
        </div>
        <button>continue</button>
        <p className='loginsignup-login'>already have a account ? <span>
          login here</span></p>
          <div className="login-signupagree">
          <input type="checkbox" name='' id='' />
          <p>by continuing , i agree to the terms and conditions</p>
          </div>
      </div>
    </div>
  )
}

export default Loginsignpage