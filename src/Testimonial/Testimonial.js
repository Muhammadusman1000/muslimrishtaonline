import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.css';

// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <div className="text-center text-4xl font-semibold text-gray-500 font-poppins mt-[50px] py-10">
        <span className="text-[#8C0B86] ">Latest Bride</span> /Groom / Happy
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
        className="owncss"
      >
        <SwiperSlide className="swipeSlidecss">
          <div>
            <img src="1.jpg" alt="" className="" />
            <p className="font-poppins text-3xl text-gray-500 mt-6">
              Mujtaba with Irum
            </p>
            <p className="text-gray-700 font-poppins mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeSlidecss">
          <div>
            <img src="2.jpg" alt="" className="w-[60%]" />
            <p className="font-poppins text-3xl text-gray-500 mt-6">
              Kashif with Anam
            </p>
            <p className="text-gray-700 font-poppins mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeSlidecss">
          <div>
            <img src="3.jpg" alt="" className="w-[60%]" />
            <p className="font-poppins text-3xl text-gray-500 mt-6">
              Zohaib with Zainab
            </p>
            <p className="text-gray-700 font-poppins mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swipeSlidecss">
          <div>
            <img src="4.jpg" alt="" className="w-[60%]" />
            <p className="font-poppins text-3xl text-gray-500 mt-6">
              Aqib with shazna
            </p>
            <p className="text-gray-700 font-poppins mt-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
