import React from 'react'
import './ReviewForm.scss'

const WriteReview = () => {
  return (
    <div className="writereviewContainer">
          <div className="reviewForm">
              <form action="">
                  <div className="reviewformBody">
                      <span>Your Name</span>
                      <input type="text" name='' placeholder='your name' id='' />
                      <span>your review</span>
                      <textarea rows="5" cols="80" name='' placeholder='write your review here' id='' />

                      <span>Rating</span>
                      <select name="" id="">
                          <option value="" selected disabled>Rating</option>
                          <option value="">1</option>
                          <option value="">2</option>
                          <option value="">3</option>
                          <option value="">4</option>
                          <option value="">5</option>
                      </select>
                  </div>
                  <button className="btn" type='submit'>submit</button>
              </form>
          </div>
    </div>
  )
}

export default WriteReview