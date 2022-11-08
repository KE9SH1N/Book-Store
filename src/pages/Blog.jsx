import React from 'react'
import Navbar from '../components/Navbar'
import ItemTracker from '../components/Products_Components/ItemTracker'
import Footer from '../components/Footer'
import BlogItem from '../components/Blog_Components/BlogItem'

const Blog = () => {
  return (
    <div>
        <Navbar/>
        <ItemTracker/>
        <BlogItem/>
        <Footer/>

    </div>
  )
}

export default Blog