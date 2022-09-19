import React from 'react'
import './RegisterForm.scss'
const RegisterForm = () => {
  return (
    <div className="registerBackground">
          <div id='register' className="registerContainer">
          <form>
            <h3>sign up</h3>
            <div className="formBody">
                <span>username</span>
                <input type="text" name='' placeholder='enter your username' id='' />
                <span>First Name</span>
                <input type="text" name='' placeholder='enter your firs name' id='' />
                <span>Last Name</span>
                <input type="text" name='' placeholder='enter your last name' id='' />
                <span>eMail</span>
                <input type="email" name='' placeholder='enter your email' id='' />
                <span>Contact Number</span>
                <input type="no" name='' placeholder='enter your contact number' id='' />
                <span>password</span>
                <input type="password" name='' placeholder='enter your password' id='' />
                <span>confirm password</span>
                <input type="password" name='' placeholder='confirm your password' id='' />
                <div className="genderCheckbox">
                    <input type="checkbox" name='' id='male' />
                    <label htmlFor="male">male</label>
                    <input type="checkbox" name='' id='female' />
                    <label htmlFor="female">female</label>
                </div>
            </div>
            
            <button className="btn" type='submit'>sign up</button>
          </form>
        </div>
      </div>
  )
}

export default RegisterForm