import React from 'react'
import './Details.scss'
import { Link } from 'react-router-dom'

import book1 from "../../assets/book-1.png"
import book2 from "../../assets/book-2.png"
import book3 from "../../assets/book-3.png"
import book4 from "../../assets/book-4.png"

import { KeyboardArrowUp } from '@mui/icons-material'
import { KeyboardArrowDown } from '@mui/icons-material'
import Specification from './Specification'
import Related from './Related'

import Arrival from '../Arrival'

const Details = () => {
  return (
    <div className="detailsContainer">
      <div className="detailsContents">
        <div className="topSection">
          <div className="topleftSection">
            <div className="leftImage">
                <img src={book2} alt="" />
                <img src={book3} alt="" />
                <img src={book4} alt="" />
            </div>
            <div className="rightImage">
              <Link to=""><img src={book1} alt="" /></Link>
            </div>
            
          </div>
          <div className="toprightSection">
            <h3 className='title'>Product Title</h3>
            <ul>
              <li><b>offer price:</b> <span>$100</span></li>
              <li><b>price:</b> <span className='price'>$100</span></li>
              <li><b>stock:</b> <span>in stock</span></li>
              <li><b>Product Code:</b> <span>C49956</span></li>
              <li><b>author:</b> <span>something else</span></li>
              <li><b>publisher:</b> <span>ononno prokashoni</span></li>
            </ul>

            <div className="shortDescription">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem ex obcaecati quasi sint illum numquam sit illo nam quidem quam!</p>
            </div>

            <div className='increamentItem'>
              <input type="text" value="1" />
              <span className="arrowBtn">
                <KeyboardArrowUp className='upIcon' />
                <KeyboardArrowDown className='downIcon' />
              </span>
            </div>
              

              <div>
                <button className='btn'>add to cart</button>
              </div>
              
            
            
          </div>
        </div>
        <div className="midSection">
          <div className="midleftSection">
            <Specification/>
          </div>
          <div className="midrightSection">
            <Related/>
          </div>
        </div>
        
        <Arrival/>
        
      </div>
    </div>
  )
}

export default Details