import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RegisterForm from '../components/RegisterForm'
import './Register.scss'
const Register = () => {
  return (
    <div>
        <Navbar/>
        <RegisterForm/>
        <Footer/>
    </div>
  )
}

export default Register