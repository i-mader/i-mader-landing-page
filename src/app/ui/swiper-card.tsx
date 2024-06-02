"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import {
  EffectCards,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

const SwiperCard = () => {
  return (
    <div className="swiper-slide-cards">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[
          EffectCards,
          // Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
        ]}
        // slidesPerView={3}
        // centeredSlides={true}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        // navigation
        pagination={{ clickable: true }}
        spaceBetween={500}
        cardsEffect={{
          perSlideOffset: 30,
        }}
        initialSlide={3}
      >
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/daus.png"
                width={100}
                height={100}
                alt="daus"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/egi.png"
                width={100}
                height={100}
                alt="egi"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/rahmat.png"
                width={100}
                height={100}
                alt="rahmat"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/martin.png"
                width={100}
                height={100}
                alt="martin"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/founder/deby.png"
                width={100}
                height={100}
                alt="deby"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-slide w-full h-full">
            <div className="w-full h-full">
              <Image
                className="w-full hfull"
                src="/images/founder/rifqi.png"
                width={100}
                height={100}
                alt="rifqi"
              />
            </div>
            <div className="bg-red-500"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperCard;
