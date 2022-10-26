import React, {useState} from 'react'
import './BlogItem.scss'

import { blogs } from '../../data'

const BlogItem = () => {


  return (
    
        <div className="blogContents">
            {
              blogs.map(blogs=>{
                    return(
                        <div className="blogcontentBox">
                            <div className="blogImage">
                                <img src={blogs.img} alt="Blog Image" />
                            </div>

                            <div className="blogInfo">
                                <h3 className="blogTitle">
                                    {blogs.title}
                                </h3>
                                <p>{blogs.decription}</p>
                                <a href="" className='btn'>Read More</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
  )
}

export default BlogItem