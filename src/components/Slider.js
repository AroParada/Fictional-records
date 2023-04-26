import React, { useRef, useState } from "react";
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
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/white-stripes.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/107347-597a0e4334ba6-l.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/61Z-qRw050L._SL1076_.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/Like-Clockwork-Queens-of-the-Stone-Age-album-cover.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/king-krule-ooz.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/432374.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/oh-sees-orc.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://fictionalrecords004232c4232647c6a10668cb4de31c163357-staging.s3.amazonaws.com/5ad0b35dc466b1bd1d6053c560a25c12.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
