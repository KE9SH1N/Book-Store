import React from 'react'

import "./Services.scss"

import { LocalShipping } from '@mui/icons-material'
import { Security } from '@mui/icons-material'
import { Restore } from '@mui/icons-material'
import { HeadsetMic } from '@mui/icons-material'

const Services = () => {
  return (
    <div className="serviceContainer">
        <div className="serviceContent">
            <LocalShipping className='shippingIcon' />

            <div className="shipping">
                <h3>free shipping</h3>
                <p>order over $100</p>
            </div>
        </div>


        <div className="serviceContent">
              <Security className='shippingIcon' />

            <div className="shipping">
                <h3>secure payment</h3>
                <p>100% secure payment</p>
            </div>
        </div>


        <div className="serviceContent">
              <Restore className='shippingIcon' />

            <div className="shipping">
                <h3>easy returns</h3>
                <p>10 days returns</p>
            </div>
        </div>


        <div className="serviceContent">
              <HeadsetMic className='shippingIcon' />

            <div className="shipping">
                <h3>24/7 support</h3>
                <p>call us anytime</p>
            </div>
        </div>

    </div>
  )
}

export default Services