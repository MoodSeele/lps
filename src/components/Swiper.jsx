import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./Swiper.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import Swiper01 from "../assets/images/swiper/swiper-01.svg";
import Swiper02 from "../assets/images/swiper/swiper-02.svg";
import Swiper03 from "../assets/images/swiper/swiper-03.svg";
import SwiperSp from "../assets/images/swiper/swiper_sp_01.svg";

const DocSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={`${10}%`}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper only-pc"
      >
        <SwiperSlide>
          <img src={Swiper01} alt="Swiper01" className="swiper-01" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper02} alt="Swiper02" className="swiper-02" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper03} alt="Swiper03" className="swiper-03" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper01} alt="Swiper01" className="swiper-01" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper02} alt="Swiper02" className="swiper-02" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Swiper03} alt="Swiper03" className="swiper-03" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="swiper only-sp"
      >
        <SwiperSlide>
          <img src={SwiperSp} alt="SwiperSp" className="swiperSp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SwiperSp} alt="SwiperSp" className="swiperSp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SwiperSp} alt="SwiperSp" className="swiperSp" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DocSwiper;
