import React from 'react'
import './Items.scss'

//import book1 from "../../assets/book-1.png"
//import book2 from "../../assets/book-2.png"
//import book3 from "../../assets/book-3.png"
//import book4 from "../../assets/book-4.png"
//import book5 from "../../assets/book-5.png"
//import book6 from "../../assets/book-6.png"
//import book7 from "../../assets/book-7.png"
//import book8 from "../../assets/book-8.png"

import { Link } from 'react-router-dom'

import { books } from '../../data'


import { AddShoppingCartOutlined } from '@mui/icons-material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { useState } from 'react'
import Pagination from './Pagination'




const Items = () => {

    
    const [currentPage, setCurrentPage] = useState(1);
    const [ItemsperPage] =  useState(8);

    const indexoflastBook = currentPage * ItemsperPage;
    const indexoffirstBook = indexoflastBook - ItemsperPage;

    const currentBooks = books.slice(indexoffirstBook, indexoflastBook);

    //paginate method
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
  return (
    <div className="itemsContainer">
        <div className="itemsContent">
              <div className="featuredBooks">
                {
                      currentBooks.map(book=>{
                        return(
                            <div className="featuredBook" key={book.id}>
                                <div className="featuredIcons">
                                    <AddShoppingCartOutlined className='icon cart ' />
                                    <FavoriteBorderOutlined className='icon favorite ' />
                                </div>
                                <Link to="/product">
                                    <div className="featuredImage">
                                        <img src={book.img} alt="" />
                                    </div>
                                </Link>

                                <div className="bookInfo">
                                    <h3 className='name'>{book.title}</h3>
                                    <div className="price">{book.updatePrice}<span>{book.price}</span></div>
                                    <a href="" className='btn'>add to cart</a>
                                </div>
                            </div>
                        )
                    })
                }
                 
              </div>

              <Pagination ItemsperPage={ItemsperPage} totalItems={books.length} paginate={paginate}/>
        </div>
    </div>
  )
}

export default Items