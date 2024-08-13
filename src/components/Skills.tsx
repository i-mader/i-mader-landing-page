import { dataSkills } from "@/lib/data";
import Image from "next/image";
import React from "react";

const SectionSkills = () => {
  return (
    <section className="skills">
      <div className="container mx-auto">
        <h2 className="font-medium text-white font-raleway">
          {dataSkills.title}
        </h2>
        <div className="mt-[70px]">
          <div className="flex flex-wrap justify-center lg:justify-start lg:gap-x-[81px] lg:gap-y-[32px] gap-x-[28px] gap-y-[24px] items-center gap-[81px]">
            {dataSkills.data.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col justify-center items-center min-w-[62px] min-h-[76px] w-[62px] h-[76px]"
                >
                  <Image
                    src={item.img}
                    width={42}
                    height={42}
                    alt={item.name}
                  />
                  <p className="text-white text-sm mt-3">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
