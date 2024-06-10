import Image from "next/image";
import React from "react";

const AboutUs = () => {
  const data = [
    {
      id: 1,
      title: "Who We Are",
      desc: "Welcome to Innovation Mader, your premier partner in digital innovation. Our mission is to empower businesses to thrive in the digital age through cutting-edge technology and innovative solutions. As a leading provider of digital services, we specialize in transforming your business ideas into reality, leveraging the latest advancements in technology to drive growth and success.",
      img: "/images/about-us/image 9.png",
      position: "left",
    },
    {
      id: 2,
      title: "Our Vision",
      desc: "At Innovation Mader, we envision a world where businesses of all sizes can harness the power of digital innovation to achieve unprecedented levels of success. Our goal is to be the catalyst that helps you navigate the complexities of the digital landscape, providing the tools and expertise needed to stay ahead of the competition.",
      img: "/images/about-us/icons8-eye 1.png",
      position: "right",
    },
    {
      id: 3,
      title: "Our Mission",
      desc: "Our mission is simple: to be the Digital Innovation Mader For Your Business. We are committed to delivering exceptional digital solutions that are tailored to meet your unique business needs. Whether you are a startup looking to make your mark or an established enterprise aiming to innovate, we are here to help you every step of the way.",
      img: "/images/about-us/icons8-goal 1.png",
      position: "left",
    },
  ];
  return (
    <div id="about-us" className="about-us">
      <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
        ABOUT US
      </h2>

      <div className="grid grid-cols-1 gap-5 mt-5 sm:mt-14">
        {data.map(
          (item: {
            id: number;
            title: string;
            desc: string;
            img: string;
            position: string;
          }) => {
            return (
              <div className="col-span-1" key={item.id}>
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    item.position === "right"
                      ? "bg-gradient-to-l from-[#0A65E4]"
                      : "bg-gradient-to-r from-[#0A65E4]"
                  }  px-5 sm:px-10 pt-16 pb-16`}
                >
                  <div
                    className={`col-span-1 ${
                      item.position === "right" ? "order-1" : ""
                    }`}
                  >
                    <h3
                      className={`text-white text-lg sm:text-2xl font-bold mt-5 sm:mt-0 ${
                        item.position === "right" ? "text-right" : "text-left"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-white text-sm sm:text-base mt-3 ${
                        item.position === "right" ? "text-right" : "text-left"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                  <div
                    className={`col-span-1 -order-1 sm:order-none flex ${
                      item.position === "right"
                        ? "justify-center sm:justify-start"
                        : "justify-center sm:justify-end"
                    }`}
                  >
                    <Image
                      src={item.img}
                      alt={`img-${item.id}`}
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default AboutUs;
