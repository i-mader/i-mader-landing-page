"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft } from "@/lib/utils";

import { useInView } from "react-intersection-observer";
import TitleMini from "@/components/TitleMini";
import AnimatedCounter from "@/components/CountingNumber";
import { dataCompany } from "@/lib/data";
import Image from "next/image";
import { useTranslations } from "next-intl";

const SectionWeClient = () => {
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
      className="service-client"
    >
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container pt-[1139px] lg:pt-[403px] mb-[100px] text-center"
      >
          <TitleMini title="CLIENTS" />
        <h2 className="font-medium mt-4 text-neutral-700 font-raleway">
          {t('trusted_by_heading')}
        </h2>
        <p className="mt-2 text-neutral-600">
          {t('trusted_by_description')}
        </p>
        <div className="w-full lg:w-[478px] mx-auto">
          <div className="grid grid-cols-10 mt-6 border-b border-neutral-300 lg:border-none">
            <div className="col-span-2">
              <div>
                <p className="text-2xl lg:text-[28px] text-neutral-700">
                <AnimatedCounter from={0} to={1000} />+
                </p>
                <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                {t('trusted_by_satisfied_clients_label')}
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center justify-center h-full">
                <svg
                  className="block lg:hidden"
                  width={2}
                  height={81}
                  viewBox="0 0 2 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={2} height={81} fill="#D9D9D9" />
                </svg>

                <svg
                  className="hidden lg:block"
                  width={2}
                  height={62}
                  viewBox="0 0 2 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                </svg>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <p className="text-2xl lg:text-[28px] text-neutral-700"><AnimatedCounter from={0} to={150} />+</p>
                <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                {t('trusted_by_partners_label')}
                </p>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex items-center justify-center h-full">
                <svg
                  className="block lg:hidden"
                  width={2}
                  height={81}
                  viewBox="0 0 2 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={2} height={81} fill="#D9D9D9" />
                </svg>

                <svg
                  className="hidden lg:block"
                  width={2}
                  height={62}
                  viewBox="0 0 2 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                </svg>
              </div>
            </div>
            <div className="col-span-2">
              <div>
                <p className="text-2xl lg:text-[28px] text-neutral-700"><AnimatedCounter from={0} to={300} />+</p>
                <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                {t('trusted_by_projects_label')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px]">
          <div className="flex flex-wrap gap-4 justify-around">
            {dataCompany.map(({ id, image },index:number) => (
                <motion.div
                key={id}
                ref={ref}
                initial="hidden"
                variants={imageVariants}
                animate={inView ? "visible" : "hidden"}
                custom={index}
                transition={{ delay: index * animationDelay }}
              >
              <Image key={id} src={image} alt={`title-${id}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionWeClient;
