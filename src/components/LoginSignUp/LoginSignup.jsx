import React from 'react'
import './LoginSignup.css'
import {useState } from 'react'

const LoginSignup = () => {
  return (
    <div className='container'>
        <div className="inputs">
            <div className="input">
                <input type="email" placeholder="Email address or phone number"/>    
            </div>
            <div className="input">
                <input type="password" placeholder="Password"/>
            </div>
        <div className="submit-container">
            <div className="submit">Log in</div>
        </div>
        <div className="forgotten-password"><a href="#">Forgotten password?</a></div>
        <div className="submit-container-new">
            <div className="submitnew">Create new account</div>
        </div>
    </div>
    </div>
  )
}

export default LoginSignup