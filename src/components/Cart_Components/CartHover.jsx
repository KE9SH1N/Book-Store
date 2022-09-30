import React from 'react'
import './CartHover.scss'


import { Link } from 'react-router-dom'


import book1 from "../../assets/book-1.png"
import book2 from "../../assets/book-2.png"
import book3 from "../../assets/book-3.png"
import book4 from "../../assets/book-4.png"
import book5 from "../../assets/book-5.png"
import book6 from "../../assets/book-6.png"
import book7 from "../../assets/book-7.png"
import book8 from "../../assets/book-8.png"

const Cart = () => {
  return (
    <div className='cartmainContainer'>
      <div className="cartContainer">
        <div className="cartContent">
          <div className="cartitemList">
          <ul>
            <li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
            </li>
            <li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
            </li>
            <li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
            </li>
            <li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
            </li>
            <li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
            </li>
          {/*<li>
              <img src={book1} alt="" />
              <h5>item name item name </h5>
              <span className='listQuantity'>1x</span>
              <span className='listPrice'>$1000.00</span>
              </li>*/}
          </ul>
          </div>
          <div className="bottomItems">
            <div className="cartAmount">
              <li><h5>sub total:</h5><span>500.00</span></li>
              <li><h5>Total:</h5><span>155555500.00</span></li>
            </div>
            <div className="buttonGroup">
              <a href="" className='btn'>View Cart</a>
              <a href="" className='btn' >checkout</a>
            </div>
          </div>
        
        </div>
      </div>

      <div className="shapeSquare"></div>

    </div>
  )
}

export default Cart