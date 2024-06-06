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
    img: "/images/skills/js.svg",
  },
  {
    name: "Typescript",
    img: "/images/skills/icon-typescript.svg",
  },
  {
    name: "React",
    img: "/images/skills/icon-react.svg",
  },
  {
    name: "Next.js",
    img: "/images/skills/icon-nextjs.svg",
  },
  {
    name: "Node.js",
    img: "/images/skills/icon-nodejs.svg",
  },
  {
    name: "Express.js",
    img: "/images/skills/icon-express.svg",
  },
  {
    name: "Nest.js",
    img: "/images/skills/icon-nest.svg",
  },
  {
    name: "Socket.io",
    img: "/images/skills/icon-socket.svg",
  },
  {
    name: "Golang",
    img: "/images/skills/Go-Logo_Blue 1.svg",
  },
  {
    name: "PostgreSQL",
    img: "/images/skills/icon-postgresql.svg",
  },
  {
    name: "MongoDB",
    img: "/images/skills/icon-mongodb.svg",
  },
  {
    name: "Sass/Scss",
    img: "/images/skills/icon-sass.svg",
  },
  {
    name: "Tailwindcss",
    img: "/images/skills/icon-tailwindcss.svg",
  },
  {
    name: "Figma",
    img: "/images/skills/icon-figma.svg",
  },
  {
    name: "Cypress",
    img: "/images/skills/icon-cypress.svg",
  },
  {
    name: "Storybook",
    img: "/images/skills/icon-storybook.svg",
  },
  {
    name: "Git",
    img: "/images/skills/icon-git.svg",
  },
  {
    name: "MySQL",
    img: "/images/skills/mysql 1.svg",
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
                  <Image src={item.img} alt="img-1" width={35} height={35} />
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
