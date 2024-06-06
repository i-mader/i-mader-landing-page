import React from "react";
import Image from "next/image";
// import SwiperCard from "./ui/swiper-card";

const Hero = () => {
  return (
    <div className="home-sec-1">
      <div className="grid grid-cols-6 sm:grid-cols-12 h-full">
        <div className="col-span-6">
          <div className="h-full flex items-center justify-center py-0 px-5 sm:py-10 sm:px-10">
            <h1 className="text-white text-2xl sm:text-6xl font-bold leading-tight sm:leading-[1.4]">
              Digital Innovation Maker For Your Business
            </h1>
          </div>
        </div>
        <div className="col-span-6">
          <div className="h-full flex items-center justify-center py-0 px-5 sm:py-10 sm:px-10">
            <div className="relative w-full">
              <Image
                src="/images/Untitlecdd-1 1.png"
                alt="img-1"
                width={677}
                height={508}
              />
              {/* <SwiperCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
