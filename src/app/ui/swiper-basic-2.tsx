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

const dataSkills = [
  {
    name: "Javascript",
  },
  {
    name: "Typescript",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express.js",
  },
  {
    name: "Nest.js",
  },
  {
    name: "Socket.io",
  },
  {
    name: "Golang",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Sass/Scss",
  },
  {
    name: "Tailwindcss",
  },
  {
    name: "Figma",
  },
  {
    name: "Cypress",
  },
  {
    name: "Storybook",
  },
  {
    name: "Git",
  },
  {
    name: "MySQL",
  },
];

const SwiperBasic2 = () => {
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
        navigation={{ nextEl: "#swiper-forward-2", prevEl: "#swiper-back-2" }}
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
        {dataSkills.map((item: any) => {
          return (
            <SwiperSlide key={item.name}>
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16">
                  <Image
                    src="/images/skills/js.svg"
                    alt="img-1"
                    width={50}
                    height={50}
                  />
                </div>
                <p className="mt-2">{item.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperBasic2;
