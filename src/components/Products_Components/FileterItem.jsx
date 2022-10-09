import React from 'react'
import './FilterItem.scss'

import Items from './Items'

const FileterItem = () => {
  return (
    <div className="filterContainer">
        <div className="filterContent">
            <div className="filterTop">
                <h3>Filter Item</h3>
                <div className='filterSort'>
                    <span>Sort Item</span>
                    <select name="" id="">
                        <option value="" selected disabled>Default</option>
                        <option value="">Name(A-Z)</option>
                        <option value="">Name(Z-A)</option>
                        <option value="">Price(Low-High)</option>
                        <option value="">Price(High-Low)</option>
                    </select>
                </div>
            </div>
            <div className="filterBody">
                  <div className="filterLeft">
                      <span>availabity</span>
                      <div className="filterStock">
                          <div className="inStock">
                              <input type="checkbox" name='' id='in stock' />
                              <label htmlFor="in stock">In Stock</label>
                          </div>
                          <div className="outofStock">
                              <input type="checkbox" name='' id='out of stock' />
                              <label htmlFor="out of stock">Out of Stock</label>
                          </div>
                      </div>
                  </div>
                  <div className="filterRight">
                      <Items/>
                  </div>
            </div>
            
        </div>
    </div>
  )
}

export default FileterItem