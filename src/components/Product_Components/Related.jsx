import React from 'react'

import './Related.scss'


import book1 from "../../assets/book-1.png"
import book2 from "../../assets/book-2.png"
import book3 from "../../assets/book-3.png"
import book4 from "../../assets/book-4.png"

const Related = () => {
  return (
    <div className="relatedContainer">
      <div className="relatedContent">
        <h3>Related Product</h3>
        <div className="Content">
          <img src={book1} alt="" />
          <div className='relatedproductInfo'>
            <span className='title'>title of this product</span>
            <p>$150 <span>$200</span></p>
          </div>
        </div>

        <div className="Content">
          <img src={book1} alt="" />
          <div className='relatedproductInfo'>
            <span className='title'>title of this product</span>
            <p>$150 <span>$200</span></p>
          </div>
        </div>


        <div className="Content">
          <img src={book1} alt="" />
          <div className='relatedproductInfo'>
            <span className='title'>title of this product</span>
            <p>$150 <span>$200</span></p>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default Related