import React from 'react'
import "./Newsletter.scss"


const Newsletter = () => {
  return (
    <div className="newsletterContainer">
        <div className="newsletterContent">
            <h3 className="newsletterTitle">
            subscribe for latest updates
            </h3>

            <input type="text" name='' placeholder='write your email'id=''className='inputText' />
            <input type="submit" value = 'Subscribe' className = 'btn'/>
        </div>
        
    </div>
  )
}

export default Newsletter