import React from 'react'
import './Arrival.scss'
import { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import { Autoplay } from "swiper"

import { books } from '../data'

import book1 from "../assets/book-1.png"
import book2 from "../assets/book-2.png"
import book3 from "../assets/book-3.png"
import book4 from "../assets/book-4.png"
import book5 from "../assets/book-5.png"
import book6 from "../assets/book-6.png"
import book7 from "../assets/book-7.png"
import book8 from "../assets/book-8.png"
import SectionHead from './SectionHead';





const Arrival = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [booksperPage] = useState(8);

    const indexoflastBook = currentPage * booksperPage;
    const indexoffirstBook = indexoflastBook - booksperPage;

    const currentBooks = books.slice(indexoffirstBook, indexoflastBook);

  return (
    <div className="arraivalContainer">
        <div className="arrivalHeading">
            <SectionHead textLine="new arrivals"/>
        </div>
        <div className="arraivalSlider">
              <Swiper
                  breakpoints={{
                      250: {

                          slidesPerView: 1,
                      },

                      500: {
                          slidesPerView: 1,
                      },

                      900: {

                        slidesPerView: 4,

                      },
                  }}
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={4}
                  coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                  }}
                  loop={true}
                  autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination, Autoplay]}
                  className="mySwiper"
              >
                  
                    {
                      currentBooks.map(books =>{
                            return(
                                <SwiperSlide>
                                    <div className="sliderImage">
                                        <img src={books.img} />
                                    </div>
                                    <div className="slideInfo">
                                        <h3>{books.title}</h3>
                                        <div className="arrivalPrice">
                                            {books.updatePrice}<span></span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                    
                  
              </Swiper>
        </div>
    </div>
  )
}

export default Arrival