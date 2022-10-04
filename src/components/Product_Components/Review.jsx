import React from 'react'
import './Review.scss'


import { StarBorderOutlined } from '@mui/icons-material'
import { StarHalfOutlined } from '@mui/icons-material'
import { StarOutlined } from '@mui/icons-material'

const Review = () => {
  return (
    <div className="reviewContainer">
      <div className="reviewContent">
        <div className="reviewList">
          <ul>
            <li>
              <h5>reviewer name <span>12/12/2022</span></h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Optio provident neque cupiditate quae ipsam maxime adipisci 
                sapiente quisquam, magnam facilis necessitatibus 
                eligendi deleniti impedit ex, expedita ipsum illum vitae eos!
              </p>
              <div className="reviewRating">
                <div className="ratingStar">
                  <span><StarBorderOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star' /></span>
                  <span><StarBorderOutlined className='icon star' /></span>
                  <span><StarBorderOutlined className='icon star' /></span>
                  <span><StarBorderOutlined className='icon star' /></span>
                </div>
              </div>
            </li>
            <li>
              <h5>reviewer name <span>12/12/2022</span></h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Optio provident neque cupiditate quae ipsam maxime adipisci
                sapiente quisquam, magnam facilis necessitatibus
                eligendi deleniti impedit ex, expedita ipsum illum vitae eos!
              </p>
              <div className="reviewRating">
                <div className="ratingStar">
                  <span><StarBorderOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star'/></span>
                </div>
              </div>
            </li>
            <li>
              <h5>reviewer name <span>12/12/2022</span></h5>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Optio provident neque cupiditate quae ipsam maxime adipisci
                sapiente quisquam, magnam facilis necessitatibus
                eligendi deleniti impedit ex, expedita ipsum illum vitae eos!
              </p>
              <div className="reviewRating">
                <div className="ratingStar">
                  <span><StarOutlined className='icon star'/></span>
                  <span><StarOutlined className='icon star'/></span>
                  <span><StarOutlined className='icon star'/></span>
                  <span><StarHalfOutlined className='icon star'/></span>
                  <span><StarBorderOutlined className='icon star'/></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Review