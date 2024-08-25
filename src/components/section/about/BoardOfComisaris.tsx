"use client";

import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { slideInFromLeft } from "@/lib/utils";
import TitleMini from "@/components/TitleMini";
import Image from "next/image";
import {
  ImgFounderdaus,
  ImgFounderdeby,
  ImgFounderegi,
  ImgFounderikiw,
  ImgFoundermartin,
  ImgFounderrahmat,
} from "@/lib/data";
import { useTranslations } from "next-intl";

const SectionBoardOfComisaris = () => {
  const t = useTranslations();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.2;
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="bg-[#F6F6F9] py-[40px] mt-[70px]"
    >
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container board-of-comisaris"
      >
        <TitleMini title={t('label_comisaris')} />
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-6 mt-[42px]">
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={1}
            transition={{ delay: 1 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFounderrahmat}
                  alt={`logo-1`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                Komisaris
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Rahmat Hidayatullah
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={2}
            transition={{ delay: 2 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFounderegi}
                  alt={`logo-2`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                CFO
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Egi Chandra Pratama
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={3}
            transition={{ delay: 3 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFoundermartin}
                  alt={`logo-3`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                CTO
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Martin Yonathan Pasaribu
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={4}
            transition={{ delay: 4 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFounderdaus}
                  alt={`logo-3`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                CMO
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Bachtiar Firdaus
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={5}
            transition={{ delay: 5 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFounderdeby}
                  alt={`logo-3`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                CEO
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Deby Prasetyo
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-2"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={6}
            transition={{ delay: 6 * animationDelay }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="w-[200px] lg:w-full h-[200px] relative">
                <Image
                  src={ImgFounderikiw}
                  alt={`logo-3`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                Komisaris
              </p>
              <p className="text-neutral-500 text-sm mt-1 text-center">
                Rifqi Bagus
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionBoardOfComisaris;
