"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import IconArrowRightBig from "./icons/arrow-right-big";
import { Button } from "./ui/button";
import Image from "next/image";
import { dataHighlightProject, ImageBannerProjectContent } from "@/lib/data";

const HighlightProject = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const swiperRef = useRef<any>(null);
  return (
    <div className="grid grid-cols-6 lg:grid-cols-12">
      {/* <section className="bg-primary-original p-4 lg:p-[42px] lg:max-w-[588px] relative"> */}
      <section className="order-last lg:order-1 col-span-6 bg-primary-original p-4 lg:p-[42px] relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        >
          {dataHighlightProject.map(({ id, title, desc }) => (
            <SwiperSlide key={id}>
              <article>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="body-md mt-3 text-white">{desc}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="h-[2px] w-full bg-primary-soft mt-3 lg:mt-[42px]"></div>
        <div className="relative flex items-center justify-between mt-4 lg:mt-[42px]">
          <div className="button-swiper static flex items-center gap-x-5">
            <div className="swiper-button-prev">Prev</div>
            <div className="swiper-button-next">Next</div>
          </div>

          <div className="flex items-center gap-x-2">
            <p className="text-white">
              0{currentSlide}/0{dataHighlightProject.length}
            </p>
            <Button
              disabled={currentSlide === dataHighlightProject.length}
              onClick={() => swiperRef.current?.slideNext()}
            >
              <IconArrowRightBig />
            </Button>
          </div>
        </div>
      </section>
      {/* <section className="bg-primary-original p-4 lg:p-[42px] lg:max-w-[588px] relative"> */}
      <section className="lg:order-last col-span-6 bg-primary-original relative">
        <div className="relative w-full h-[198px] lg:h-full">
          <Image
            src={dataHighlightProject[currentSlide - 1].img}
            alt={`logo-1`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
    </div>
  );
};

export default HighlightProject;
