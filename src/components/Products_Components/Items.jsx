import React from 'react'
import './Items.scss'

import book1 from "../../assets/book-1.png"
import book2 from "../../assets/book-2.png"
import book3 from "../../assets/book-3.png"
import book4 from "../../assets/book-4.png"
import book5 from "../../assets/book-5.png"
import book6 from "../../assets/book-6.png"
import book7 from "../../assets/book-7.png"
import book8 from "../../assets/book-8.png"




import { AddShoppingCartOutlined } from '@mui/icons-material'
import { FavoriteBorderOutlined } from '@mui/icons-material'
const Items = () => {
  return (
    <div className="itemsContainer">
        <div className="itemsContent">
              <div className="featuredBooks">
                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book1} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book2} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book3} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book4} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book5} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>


                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book6} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book7} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book8} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

                  <div className="featuredBook">
                      <div className="featuredIcons">
                          <AddShoppingCartOutlined className='icon cart ' />
                          <FavoriteBorderOutlined className='icon favorite ' />
                      </div>
                      <div className="featuredImage">
                          <img src={book8} alt="" />
                      </div>

                      <div className="bookInfo">
                          <h3 className='name'>book name</h3>
                          <div className="price">$15.99<span>20.99</span></div>
                          <a href="" className='btn'>add to cart</a>
                      </div>
                  </div>

              </div>
        </div>
    </div>
  )
}

export default Items