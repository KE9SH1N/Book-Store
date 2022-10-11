import React from 'react'
import './LoginForm.scss'

import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
      <div className="loginBackground">
          <div id='login' className="loginContainer">
              <form>
                  <h3>sign in</h3>
                  <span>username</span>
                  <input type="email" name='' placeholder='enter your username or email' id='' />
                  <span>password</span>
                  <input type="password" name='' placeholder='enter your password' id='' />
                  <div className="loginformCheckbox">
                      <input type="checkbox" name='' id='rememberMe' />
                      <label htmlFor="rememberMe">remember me</label>
                  </div>
                  <button className="btn" type='submit'>sign in</button>

                  <p>forget password ?
                      <Link to='/register'><span>click here</span></Link>
                  </p>
                  <p>don't have an account ?
                      <Link to='/register'><span>create one</span></Link>
                  </p>
              </form>
          </div>
      </div>
  )
}

export default LoginForm