import React from 'react'

import "./Slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from "swiper"

import 'swiper/scss';


import book1 from "../assets/book-1.png"
import book2 from "../assets/book-2.png"
import book3 from "../assets/book-3.png"
import book4 from "../assets/book-4.png"
import book5 from "../assets/book-5.png"
import book6 from "../assets/book-6.png"
import stand from "../assets/stand.png"



const Slider = () => {
  return (
    <div className="main">
          <div className="sliderContainer">
              <div class="sliderContent">
                  <h3>upto 75% off</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
                  <a href="https://www.youtube.com/" class="btn">Shop Now</a>
              </div>

              <div class="swipers">
                  <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      centeredSlides = {true}
                      loop = {true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,

                      }}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      modules={[Autoplay]}
                      className='mySwiper'>
                      <SwiperSlide><img src={book1} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={book2} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={book3} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={book4} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={book5} alt="" /></SwiperSlide>
                      <SwiperSlide><img src={book6} alt="" /></SwiperSlide>
                  </Swiper>
                  <img src={stand} class="stand" alt="" />
              </div>
          </div>
    </div>
    
      

      
  )
}

export default Slider