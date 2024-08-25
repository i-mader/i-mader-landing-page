"use client";
import React from "react";

import { dataSkills } from "@/lib/data";

import Image from "next/image";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { slideInFromLeft } from "@/lib/utils";
import { useTranslations } from "next-intl";

const SectionSkills = () => {
  const t = useTranslations();
  const skills = dataSkills(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.2;
  return (
    <motion.section initial="hidden" animate="visible" className="skills">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container mx-auto"
      >
        <h2 className="font-medium text-white font-raleway">
          {skills.title}
        </h2>
        <div className="mt-[70px]">
          <div className="flex flex-wrap justify-center lg:justify-start lg:gap-x-[81px] lg:gap-y-[32px] gap-x-[28px] gap-y-[24px] items-center gap-[81px]">
            {skills.data.map((item: any, index: number) => {
              return (
                <motion.div
                  key={item.id}
                  className="flex flex-col justify-center items-center min-w-[62px] min-h-[76px] w-[62px] h-[76px]"
                  ref={ref}
                  initial="hidden"
                  variants={imageVariants}
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                  transition={{ delay: index * animationDelay }}
                >
                  <Image
                    src={item.img}
                    width={42}
                    height={42}
                    alt={item.name}
                  />
                  <p className="text-white text-sm mt-3">{item.name}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionSkills;
