import React from 'react'

import './Blog.scss'
import blog1 from '../assets/blog-1.jpg'
import blog2 from "../assets/blog-2.jpg"
import blog3 from "../assets/blog-3.jpg"
import blog4 from "../assets/blog-4.jpg"
import blog5 from "../assets/blog-5.jpg"


const Blog = () => {
  return (
    <div className="blogContainer">
            <div className="blogHeading">
                <h3 className='blogHeadText'>
                    <span>blog</span>
                </h3>
            </div>

              <div className="blogContent">
                <div className="blogcontentBox">
                  <div className="blogImage">
                      <img src={blog1} alt="Blog Image" />
                  </div>

                  <div className="blogInfo">
                      <h3 className="blogTitle">
                          Blog Title
                      </h3>
                      <p><b>Short Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat eum in!</p>
                      <a href="" className='btn'>Read More</a>
                  </div>
                </div>

              <div className="blogcontentBox">
                  <div className="blogImage">
                      <img src={blog2} alt="Blog Image" />
                  </div>

                  <div className="blogInfo">
                      <h3 className="blogTitle">
                          Blog Title
                      </h3>
                      <p><b>Short Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat eum in!</p>
                      <a href="" className='btn'>Read More</a>
                  </div>
              </div>


              <div className="blogcontentBox">
                  <div className="blogImage">
                      <img src={blog3} alt="Blog Image" />
                  </div>

                  <div className="blogInfo">
                      <h3 className="blogTitle">
                          Blog Title
                      </h3>
                      <p><b>Short Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat eum in!</p>
                      <a href="" className='btn'>Read More</a>
                  </div>
              </div>


              <div className="blogcontentBox">
                  <div className="blogImage">
                      <img src={blog4} alt="Blog Image" />
                  </div>

                  <div className="blogInfo">
                      <h3 className="blogTitle">
                          Blog Title
                      </h3>
                      <p><b>Short Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat eum in!</p>
                      <a href="" className='btn'>Read More</a>
                  </div>
              </div>

              <div className="blogcontentBox">
                  <div className="blogImage">
                      <img src={blog5} alt="Blog Image" />
                  </div>

                  <div className="blogInfo">
                      <h3 className="blogTitle">
                          Blog Title
                      </h3>
                      <p><b>Short Description:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat eum in!</p>
                      <a href="" className='btn'>Read More</a>
                  </div>
              </div>
            </div>
    </div>
  )
}

export default Blog