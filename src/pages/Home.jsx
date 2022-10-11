import React from 'react'

import Navbar from "../components/Navbar"
import Slider from "../components/Slider"
import Services from '../components/Services'
import Featured from '../components/Featured'
import Newsletter from '../components/Newsletter'
import Arrival from '../components/Arrival'
import CurrentDeal from '../components/CurrentDeal'
import Blog from '../components/Blog'
import Footer from '../components/Footer'





const Home = () => {
  return (
    <div >
        <Navbar/>
        <Slider/>
        <Services/>
        <Featured/>
        <Newsletter/>
        <Arrival/>
        <CurrentDeal/>
        <Blog/>
        <Footer/>
        
        
    </div>
  )
}

export default Home