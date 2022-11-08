import React from 'react'

import "./Slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay} from "swiper"
import { useState } from 'react'
import 'swiper/scss';


import book1 from "../assets/book-1.png"
import book2 from "../assets/book-2.png"
import book3 from "../assets/book-3.png"
import book4 from "../assets/book-4.png"
import book5 from "../assets/book-5.png"
import book6 from "../assets/book-6.png"
import stand from "../assets/stand.png"
import { books } from '../data';

const Slider = () => {


  const [currentPage, setCurrentPage] = useState(1);
  const [booksperPage] = useState(6);

  const indexoflastBook = currentPage * booksperPage;
  const indexoffirstBook = indexoflastBook - booksperPage;

  const currentBooks = books.slice(indexoffirstBook, indexoflastBook);
  return (
    <div className="main">
          <div className="sliderContainer">
              <div className="sliderContent">
                  <h3>upto 75% off</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt nostrum accusamus. Nam alias sit necessitatibus, aliquid ex minima at!</p>
                  <a href="https://www.youtube.com/" className="btn">Shop Now</a>
              </div>

              <div className="swipers">
                    <Swiper
                      breakpoints={{
                        250:{
                          
                          slidesPerView:1,
                        },

                        500:{
                          slidesPerView: 1,
                        },

                        900:{
                          
                          slidesPerView: 3,
                          
                        },
                      }}
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
                        {
                          currentBooks.map(books=>{
                            return(
                              <SwiperSlide><img src={books.img} alt="" /></SwiperSlide>
                            )
                          })
                        }
                    </Swiper>
                    
                  <img src={stand} className="stand" alt="" />
              </div>
          </div>
    </div>
    
      

      
  )
}

export default Slider