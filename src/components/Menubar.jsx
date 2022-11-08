import React from 'react'
import './Menubar.scss'

import { Link } from 'react-router-dom';
import { useState, forwardRef, useImperativeHandle } from 'react'


import { Close } from '@mui/icons-material'
import { Login } from '@mui/icons-material'
import { Logout } from '@mui/icons-material'
import { AutoStoriesTwoTone } from '@mui/icons-material'

const Menubar = (props, ref) => {

  useImperativeHandle(ref, () => ({
    handleMenu
  }))

  const [btnState, setbtnState] = useState(false);

  const handleMenu = () => {
    setbtnState(btnState => !btnState)

  }

  

  let toggleMenu = btnState ? ' active' : '';

  console.log(toggleMenu);

  return (
    <div className={`menuContainer${toggleMenu}`}>
      <div className="superTop">
        <div id="close-btn"><Close className='closeIcon' onClick={handleMenu}/></div>
        <li><AutoStoriesTwoTone className='menuIcon'/></li>
        <h1>Wisdom</h1>
      </div>
      <div className="top">
        <ul>
          <Link to="/"><li><span>home</span></li></Link>
          <Link to="/products"><li><span>all Products</span></li></Link>
          <Link to="/"><li><span>arrival</span></li></Link >
          <Link to="/"><li><span>store</span></li ></Link >
          <Link to="/"><li><span>blog</span></li ></Link >
        </ul>
      </div>
      <div className="bottom">
        <ul>
          <Link to="">
            <li>
              <span>Login</span>
              <Login className='bottomIcon' />
            </li>
          </Link>
          <Link to="">
            <li>
              <span>Logout</span>
              <Logout className='bottomIcon' />
            </li>
          </Link>
        </ul>
        
      </div>
    </div>
  )
}

export default forwardRef(Menubar)