import React, {useEffect, useState} from 'react'

import './Blog.scss'

import BlogItem from './BlogItem'
//import blog1 from '../assets/blog-1.jpg'
//import blog2 from "../assets/blog-2.jpg"
//import blog3 from "../assets/blog-3.jpg"
//import blog4 from "../assets/blog-4.jpg"
//import blog5 from "../assets/blog-5.jpg"

import { blogs } from '../../data'
import SectionHead from '../SectionHead'


const Blog = () => {

  const [currentPage] = useState(1);
  const [ItemsperPage] = useState(8);

  const indexoflastBlog = currentPage * ItemsperPage;
  const indexoffirstBlog = indexoflastBlog - ItemsperPage;

  const currentBooks = blogs.slice(indexoffirstBlog, indexoflastBlog);
  return (
    <div className="blogContainer">
        <div className="blogHeading">
            <SectionHead textLine = "blog"/>
        </div>
        <BlogItem/>
    </div>
  )
}

export default Blog