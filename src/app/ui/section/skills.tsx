import React from "react";
import Image from "next/image";
import SwiperBasic2 from "../swiper-basic-2";

const Skills = () => {
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
  return (
    <div id="home-sec-5" className="home-sec-5">
      <h2 className="text-[#217BF4] text-3xl font-bold text-center">Skills</h2>
      <p className="text-center mt-5">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="hidden sm:grid sm:grid-cols-9 gap-10 mt-5 sm:mt-14 max-w-4xl m-auto">
        {dataSkills.map((item: { name: string; img: string }) => {
          return (
            <div key={item.name} className="col-span-1">
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center w-16 h-16">
                  <Image src={item.img} alt="img-1" width={35} height={35} />
                </div>
                <p className="mt-3">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="block sm:hidden">
        <SwiperBasic2 />
      </div>
    </div>
  );
};

export default Skills;
