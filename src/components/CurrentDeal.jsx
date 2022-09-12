import React from 'react'
import "./CurrentDeal.scss"

import dealImg from "../assets/deal-img.jpg"

const CurrentDeal = () => {
  return (
    <div className="currentDealContainer">
        <div className="currentDealContent">
            <div className="contentInfo">
                <h3>deal of the day</h3>
                <h1>upto 50% off</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi harum cumque ducimus nobis dolorum, non impedit illo cum esse.</p>
                <a href="" className='btn'>shop now</a>
            </div>
            <div className="contentImage">
                  <img src={dealImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CurrentDeal