import React from 'react'

import "./Home.scss"

import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Services from '../components/Services'
import Featured from '../components/Featured'
import Newsletter from '../components/Newsletter'
import Arrival from '../components/Arrival'
import CurrentDeal from '../components/CurrentDeal'

const Home = () => {
  return (
    <div >
        <Navbar/> 
        <hr className='lineBreak'></hr>
        <Slider/>
        <Services/>
        <Featured/>
        <Newsletter/>
        <Arrival/>
        <CurrentDeal/>
    </div>
  )
}

export default Home