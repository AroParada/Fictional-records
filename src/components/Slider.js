import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  // Calculate the index of the middle slide
  const totalSlides = 8; // Change this to the total number of slides
  const middleIndex = Math.floor(totalSlides / 2);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={middleIndex - 1}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/white-stripes.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/107347-597a0e4334ba6-l.jpg"
          />
          <h3> </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/61Z-qRw050L._SL1076_.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/Like-Clockwork-Queens-of-the-Stone-Age-album-cover.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/king-krule-ooz.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/432374.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/oh-sees-orc.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="albumCover"
            src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/5ad0b35dc466b1bd1d6053c560a25c12.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
