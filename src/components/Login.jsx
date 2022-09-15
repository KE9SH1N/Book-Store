import React from 'react'
import './Login.scss'

import { Close } from '@mui/icons-material'
import { useState, forwardRef, useImperativeHandle} from 'react'




const Login = (props,ref) => {

    useImperativeHandle(ref, ()=>({
      handleRender
    }))

    const [btnState, setbtnState] = useState(false);

    const handleRender = () => {
    setbtnState(btnState => !btnState)

    }

    let toggleActive = btnState ? ' active' : '';
    

  return (
    <div id='login' className={`loginContainer${toggleActive}`}>
      <div id="close-btn"><Close className='closeIcon' onClick={handleRender}/></div>

        <form action="">
            <h3>sign in</h3>
            <span>username</span>
            <input type="email" name='' placeholder='enter your email' id=''/>
            <span>password</span>
            <input type="password" name='' placeholder='enter your password' id='' />
            <div className="loginformCheckbox">
                <input type="checkbox" name='' id='rememberMe' />
                <label htmlFor="rememberMe">remember me</label>
            </div>
              <button type='submit' className="btn">sign in</button>
              <p>forget password ?
                <a href="#">click here</a>
                </p>
              <p>don't have an account ?
                <a href="#">create one</a>
                </p>
        </form>
    </div>
  )
}

export default forwardRef(Login);