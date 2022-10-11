import React from 'react'
import Navbar from '../components/Navbar'
import Details from '../components/Product_Components/Details'
import Footer from '../components/Footer'
import ItemTracker from '../components/Products_Components/ItemTracker'



const Products = () => {
  return (
    <div>
      <Navbar/>
      <ItemTracker/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default Products