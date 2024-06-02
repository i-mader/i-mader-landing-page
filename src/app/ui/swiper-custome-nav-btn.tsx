"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRightOutlined } from "@ant-design/icons";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button, Card } from "antd";

const SwiperCustomeNavBtn = () => {
  return (
    <div className="swiper-custome-btn-nav relative">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        modules={[Pagination, Navigation]}
        className="pb-10"
        breakpoints={{
          "0": {
            slidesPerView: 1,
          },
          "980": {
            slidesPerView: 4,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((item: any) => {
          return (
            <SwiperSlide key={item}>
              <div key={item} className="col-span-3">
                <Card hoverable>
                  <div>
                    <Image
                      src="/images/Group.png"
                      alt="img-1"
                      width={70}
                      height={70}
                    />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mt-5">
                    Website / App Design UX
                  </h4>
                  <p className="text-sm sm:text-base mt-3">
                    Creating Engaging Digital Experiences for Websites and Apps
                    through UX/UI Design
                  </p>
                  <Button
                    type="link"
                    className="pl-0 mt-3"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                  >
                    Learn more
                  </Button>
                </Card>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="hidden sm:flex items-center gap-5 absolute -top-[4rem] right-0">
        <button
          id="swiper-back"
          className="custom-nav-btn flex items-center justify-center h-10 w-10 rounded-full bg-[#0077FF] border border-[#0077FF]"
        >
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792892 8.7071L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34314C8.96159 1.95262 8.96159 1.31946 8.57107 0.928931C8.18054 0.538406 7.54738 0.538406 7.15686 0.92893L0.792893 7.29289ZM26.5 7L14 7L14 9L26.5 9L26.5 7ZM14 7L1.5 7L1.5 9L14 9L14 7Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          id="swiper-forward"
          className="custom-nav-btn flex items-center justify-center h-10 w-10 rounded-full bg-[#0077FF] border border-[#0077FF]"
        >
          <svg
            width="27"
            height="16"
            viewBox="0 0 27 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2071 8.70711C26.5976 8.31658 26.5976 7.68342 26.2071 7.29289L19.8431 0.928932C19.4526 0.538408 18.8195 0.538408 18.4289 0.928932C18.0384 1.31946 18.0384 1.95262 18.4289 2.34315L24.0858 8L18.4289 13.6569C18.0384 14.0474 18.0384 14.6805 18.4289 15.0711C18.8195 15.4616 19.4526 15.4616 19.8431 15.0711L26.2071 8.70711ZM0.5 9H13V7H0.5V9ZM13 9H25.5V7H13V9Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SwiperCustomeNavBtn;
