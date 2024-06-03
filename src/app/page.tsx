"use client";
import Image from "next/image";

import { Button, Card } from "antd";
import SwiperCard from "./ui/swiper-card";
import SwiperCustomeNavBtn from "./ui/swiper-custome-nav-btn";
import SwiperBasic from "./ui/swiper-basic";
import SwiperBasic2 from "./ui/swiper-basic-2";

export default function Home() {
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
  return (
    <div>
      {/* sec 1 */}
      <div className="home-sec-1">
        <div className="grid grid-cols-6 sm:grid-cols-12 h-full">
          <div className="col-span-6">
            <div className="h-full flex items-center justify-center py-0 px-5 sm:py-10 sm:px-10">
              <h1 className="text-white text-2xl sm:text-6xl font-bold leading-tight">
                Digital Innovation Maker For Your Business
              </h1>
            </div>
          </div>
          <div className="col-span-6">
            <div className="h-full flex items-center justify-center py-0 px-5 sm:py-10 sm:px-10">
              <div className="relative w-full">
                <SwiperCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sec 2 */}
      <div id="why-choose-use" className="home-sec-2">
        <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-12 mt-5 sm:mt-14 gap-5 sm:gap-10">
          {[
            {
              title: "Project Management",
              description: "Effective planning, execution, and delivery of IT projects with a focus on aligning with business goals, minimizing risks, and optimizing resources."
            },
            {
              title: "Digital Transformation",
              description: "Empowering your business to embrace the digital age by leveraging cutting-edge technologies to automate processes, enhance efficiency, and drive innovation."
            },
            {
              title: "Software Development",
              description: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems."
            }
          ].map((item, index) => (
            <div className="col-span-4" key={index}>
              <Card hoverable>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[50px] h-[50px] sm:w-[96px] sm:h-[96px] bg-[#217BF4] rounded-full"></div>
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
      {/* sec 3 */}
      <div id="blog" className="home-sec-3">
        <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
          BLOG / BERITA
        </h2>
        <div className="mt-5 sm:mt-14">
          <SwiperCustomeNavBtn />
        </div>
      </div>
      {/* sec 4 */}
      <div id="our-clients" className="home-sec-4">
        <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
          Our Clients
        </h2>
        <div className="mt-5 sm:mt-14">
          <SwiperBasic />
        </div>
      </div>
      {/* sec 5 */}
      <div id="home-sec-5" className="home-sec-5">
        <h2 className="text-[#217BF4] text-3xl font-bold text-center">
          Skills
        </h2>
        <p className="text-center mt-5">
          The skills, tools and technologies I am really good at:
        </p>
        <div className="hidden sm:grid sm:grid-cols-9 gap-10 mt-5 sm:mt-14 max-w-4xl m-auto">
          {dataSkills.map((item: any) => {
            return (
              <div key={item.name} className="col-span-1">
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
              </div>
            );
          })}
        </div>
        <div className="block sm:hidden">
          <SwiperBasic2 />
        </div>
      </div>
    </div>
  );
}
