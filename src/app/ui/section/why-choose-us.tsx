import { Button, Card } from "antd";
import React from "react";
// import Img1 from "/images/Logo Icon 2.png";
// import Img2 from "/images/Logo Icon-2 1.png";
import Img3 from "/images/Logo Icon-3 1.png";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div id="why-choose-us" className="home-sec-2">
      <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-4 sm:grid-cols-12 mt-5 sm:mt-14 gap-5 sm:gap-10">
        {[
          {
            img: "/images/Logo Icon-2 1.png",
            title: "Project Management",
            description:
              "Effective planning, execution, and delivery of IT projects with a focus on aligning with business goals, minimizing risks, and optimizing resources.",
          },
          {
            img: "/images/Logo Icon 2.png",
            title: "Digital Transformation",
            description:
              "Empowering your business to embrace the digital age by leveraging cutting-edge technologies to automate processes, enhance efficiency, and drive innovation.",
          },
          {
            img: "/images/Logo Icon-3 1.png",
            title: "Software Development",
            description:
              "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems.",
          },
        ].map((item, index) => (
          <div className="col-span-4" key={index}>
            <Card hoverable>
              <div className="flex flex-col items-center justify-center">
                <div className="w-[50px] h-[50px] sm:w-[96px] sm:h-[96px] bg-[#217BF4] rounded-full">
                  <Image
                    src={item.img}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <h3 className="text-[#217BF4] text-lg sm:text-2xl font-bold text-center mt-5">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#656464] text-center mt-3">
                  {item.description}
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-10 sm:mt-16">
        <Button
          className="px-10 sm:px-24 text-[#217BF4] border-[#217BF4]"
          size="large"
        >
          LEARN MORE
        </Button>
      </div>
    </div>
  );
};

export default WhyChooseUs;
