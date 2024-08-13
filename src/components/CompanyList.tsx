"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { dataCompany } from "@/lib/data";

const CompanyList: React.FC = () => {
  return (
    <section className="bg-[#F6F6F9] p-4 relative">
      <Swiper
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        centeredSlides={false}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          640: {
            slidesPerView: 3.5,
            spaceBetween: 0,
            centeredSlides: true,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {dataCompany.map(({ id, image }) => (
          <SwiperSlide key={id} className="self-center w-max">
            <article>
              <Image src={image} alt={`title-${id}`} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CompanyList;
