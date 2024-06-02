"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Card } from "antd";

const SwiperBasic = () => {
  return (
    <div className="swiper-basic relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation={{ nextEl: "#swiper-forward-1", prevEl: "#swiper-back-1" }}
        modules={[Pagination, Navigation, Autoplay]}
        className="pt-3 pb-14 px-3"
        breakpoints={{
          "0": {
            slidesPerView: 1,
          },
          "980": {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/bgr.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/kadin.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/mc-easy.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/prayindo.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/prisma.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            hoverable
            className="h-[200px] flex items-center justify-center"
          >
            <div>
              <Image
                src="/images/out-client/victoria.png"
                alt="img-1"
                width={200}
                height={200}
              />
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBasic;
