import React from 'react'
import './Arrival.scss'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

import { Autoplay } from "swiper"



import book1 from "../assets/book-1.png"
import book2 from "../assets/book-2.png"
import book3 from "../assets/book-3.png"
import book4 from "../assets/book-4.png"
import book5 from "../assets/book-5.png"
import book6 from "../assets/book-6.png"
import book7 from "../assets/book-7.png"
import book8 from "../assets/book-8.png"





const Arrival = () => {
  return (
    <div className="arraivalContainer">
        <div className="arrivalHeading">
            <div className="arrivalheadText">
                <span>new arrivals</span>
            </div>
        </div>
        <div className="arraivalSlider">
              <Swiper
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
                  <SwiperSlide>
                    <div className="sliderImage">
                        <img src={book1} />
                    </div>

                    <div className="slideInfo">
                          <h3>book name</h3>
                        <div className="arrivalPrice">
                            $15.50 <span></span>
                        </div>
                    </div>
                      
                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book2} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>

                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book3} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book4} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book5} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book6} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book7} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book8} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>


                  <SwiperSlide>
                      <div className="sliderImage">
                          <img src={book2} />
                      </div>

                      <div className="slideInfo">
                          <h3>book name</h3>
                          <div className="arrivalPrice">
                              $15.50 <span></span>
                          </div>
                      </div>

                  </SwiperSlide>
                  
              </Swiper>
        </div>
    </div>
  )
}

export default Arrival