import React from 'react'

import "./Featured.scss"
import { useState, useEffect } from 'react'

//import book1 from "../assets/book-1.png"
//import book2 from "../assets/book-2.png"
//import book3 from "../assets/book-3.png"
//import book4 from "../assets/book-4.png"
//import book5 from "../assets/book-5.png"
//import book6 from "../assets/book-6.png"
//import book7 from "../assets/book-7.png"
//import book8 from "../assets/book-8.png"

import { books } from '../data'


import { AddShoppingCartOutlined } from '@mui/icons-material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import SectionHead from './SectionHead'

const Featured = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [booksperPage] = useState(8);

  const indexoflastBook = currentPage * booksperPage;
  const indexoffirstBook = indexoflastBook - booksperPage;

  const currentBooks = books.slice(indexoffirstBook, indexoflastBook);
  return (
    <div className="featuredContainer">
        <div className="featuredHeading">
            <SectionHead textLine = "featured book"/>
        </div>

        <div className="featuredBooks">
        {
          currentBooks.map(books =>{
            return(
              <div className="featuredBook">
                <div className="featuredIcons">
                  <AddShoppingCartOutlined className='icon cart ' />
                  <FavoriteBorderOutlined className='icon favorite ' />
                </div>
                <div className="featuredImage">
                  <img src={books.img} alt="" />
                </div>

                <div className="bookInfo">
                  <h3 className='name'>{books.title}</h3>
                  <div className="price">{books.updatePrice}<span>{books.price}</span></div>
                  <a href="" className='btn'>add to cart</a>
                </div>
              </div>
            )
          } )
        }

        </div>
        
        
    </div>
  )
}

export default Featured