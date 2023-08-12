import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="text-center text-4xl font-semibold text-gray-500 font-poppins mt-[50px]">
        <span className="text-[#8C0B86]">Latest Bride</span> /Groom / Happy
        Stories
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src="1.jpg" alt="" className="w-[60%]" />
            <p className='font-poppins text-3xl text-gray-500 mt-6'>Mujtaba with Irum</p>
            <p className="text-gray-700 font-poppins">hi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="2.jpg" alt="" className="w-[60%]" />
            <p>Kashif with Anam</p>
            <p className="text-gray-700 font-poppins">hi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="3.jpg" alt="" className="w-[60%]" />
            <p>Zohaib with Zainab</p>
            <p className="text-gray-700 font-poppins">hi</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="4.jpg" alt="" className="w-[60%]" />
            <p className="text-gray-700 font-poppins">Aqib with shazna</p>
            <p>hi</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
