import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className='login'>
      <div className='login-form'>
      <h1>Login</h1>
      <form>
          <div className="auth_input">
            <label htmlFor="user">Username</label>
            <input id='user'
              type="text"
              placeholder="Enter your username"
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="password">Password</label>
            <input
              id = 'password'
              type="password"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="submit">
            <button>Log in</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Login