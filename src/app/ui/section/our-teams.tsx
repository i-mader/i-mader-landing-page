import Image from "next/image";
import React from "react";

const OurTeams = () => {
  const data = [
    {
      id: 1,
      name: "Rahmat Hidayatullah",
      position: "Frontend Lead",
      img: "/images/founder/Ellipse 30.png",
    },
    {
      id: 2,
      name: "Egi Chandra",
      position: "Backend Lead",
      img: "/images/founder/Ellipse 30 (3).png",
    },
    {
      id: 3,
      name: "Martin Yonatan P",
      position: "Technical Architect",
      img: "/images/founder/Ellipse 30 (4).png",
    },
    {
      id: 2,
      name: "Bachtiar Firdaus",
      position: "System Analyst",
      img: "/images/founder/Ellipse 30 (5).png",
    },
    {
      id: 2,
      name: "Deby Prasetyo",
      position: "Business Development Lead",
      img: "/images/founder/Ellipse 30 (1).png",
    },
    {
      id: 2,
      name: "Rifqi Bagus",
      position: "Product Manager Lead",
      img: "/images/founder/Ellipse 30 (2).png",
    },
  ];
  return (
    <div id="our-teams" className="home-sec-5">
      <h2 className="text-[#217BF4] text-3xl font-bold text-center">
        Our Teams
      </h2>
      <p className="text-center mt-5 max-w-xl mx-auto text-sm sm:text-base">
        Our team is composed of passionate innovators, experienced developers,
        creative designers, and strategic thinkers. We are united by our shared
        commitment to excellence and our drive to deliver transformative results
        for our clients. Each member of our team brings a unique set of skills
        and expertise, ensuring that we can tackle any challenge and deliver
        exceptional value.
      </p>
      <div className="grid grid-cols-4 sm:grid-cols-12 gap-y-10 mt-5 sm:mt-14">
        {data.map(
          (item: {
            id: number;
            name: string;
            position: string;
            img: string;
          }) => {
            return (
              <div className="col-span-4">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[160px] h-[160px] rounded-full overflow-hidden flex items-center justify-center">
                    <Image
                      src={item.img}
                      alt={`img-${item.id}`}
                      width={160}
                      height={160}
                    />
                  </div>
                  <h4 className="mt-3 text-center text-base sm:text-xl font-semibold">
                    {item.name}
                  </h4>
                  <h5 className="mt-1 text-center text-base font-medium">
                    {item.position}
                  </h5>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default OurTeams;
