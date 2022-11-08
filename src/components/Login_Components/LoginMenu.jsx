import React from 'react'
import './LoginMenu.scss'
import { Link } from 'react-router-dom'
const LoginMenu = () => {
  return (
      <div className="dropdownContent" >
          <ul>
              <Link to="/login"><li><span>Sign In</span></li></Link>
              <Link to="/register"><li><span>Register</span></li></Link>
          </ul>
      </div>
  )
}

export default LoginMenu