import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FileterItem from '../components/Products_Components/FileterItem'
import ItemTracker from '../components/Products_Components/ItemTracker'

const Products = () => {
  return (
    <div>
        <Navbar/>
        <ItemTracker/>
        <FileterItem/>
        <Footer/>
    </div>
  )
}

export default Products