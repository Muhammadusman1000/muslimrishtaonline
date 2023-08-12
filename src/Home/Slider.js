import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./Slider.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src="cover.jpg" alt="" className="w-full " />
        </SwiperSlide>
        <SwiperSlide >
          <img src="cover2.jpg" alt="" className="w-full" />
        </SwiperSlide>
        <div className="w-full h-full bg-gradient-to-t from-gray-700 to-gray-100 opacity-40 absolute top-0 z-[1] "></div>
      </Swiper>
    </>
  );
}
