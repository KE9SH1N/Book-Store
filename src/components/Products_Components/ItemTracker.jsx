import React from 'react'
import './ItemTracker.scss'

import { HomeOutlined } from '@mui/icons-material'

const ItemTracker = () => {
  return (
    <div className="itemtrackerContainer">
        <div className="itemtrackerContent">
              <HomeOutlined className='icon'/>
              <span>/Category Name/Route Item Directory</span>
        </div>
    </div>
  )
}

export default ItemTracker