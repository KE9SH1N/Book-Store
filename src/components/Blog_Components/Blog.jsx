import React, {useEffect, useState} from 'react'

import './Blog.scss'

import BlogItem from './BlogItem'
//import blog1 from '../assets/blog-1.jpg'
//import blog2 from "../assets/blog-2.jpg"
//import blog3 from "../assets/blog-3.jpg"
//import blog4 from "../assets/blog-4.jpg"
//import blog5 from "../assets/blog-5.jpg"

import { blogs } from '../../data'


const Blog = () => {

  const [currentPage] = useState(1);
  const [ItemsperPage] = useState(8);
  return (
    <div className="blogContainer">
        <div className="blogHeading">
            <h3 className='blogHeadText'>
              <span>blog</span>
            </h3>
        </div>
        <BlogItem/>
    </div>
  )
}

export default Blog