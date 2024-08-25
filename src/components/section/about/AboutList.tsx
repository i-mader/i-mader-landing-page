"use client";

import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import IconStart from "@/components/icons/about/start";
import IconOur from "@/components/icons/about/out";
import IconProject from "@/components/icons/about/project";
import IconGreate from "@/components/icons/about/greate";
import { slideInFromLeft } from "@/lib/utils";
import { useTranslations } from "next-intl";

const SectionAboutList = () => {
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
    <motion.section initial="hidden" animate="visible" className="container">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="relative"
      >
        <div className="grid grid-cols-12 gap-y-6 gap-x-8">
          <motion.div
            className="col-span-12 lg:col-span-3"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={1}
            transition={{ delay: 1 * animationDelay }}
          >
            <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
              <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                <IconStart />
              </div>
              <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                {t('experience_years_label')}
              </p>
              <p className="text-neutral-600 mt-2 break-words">
                {t('experience_years_description')}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 lg:col-span-3"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={2}
            transition={{ delay: 2 * animationDelay }}
          >
            <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
              <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                <IconOur />
              </div>
              <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
              {t('partnership_label')}
              </p>
              <p className="text-neutral-600 mt-2">
                {t('partnership_description')}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 lg:col-span-3"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={3}
            transition={{ delay: 3 * animationDelay }}
          >
            <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
              <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                <IconProject />
              </div>
              <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                {t('project_done_label')}
              </p>
              <p className="text-neutral-600 mt-2">
                {t('project_done_description')}
              </p>
            </div>
          </motion.div>
          <motion.div
            className="col-span-12 lg:col-span-3"
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={4}
            transition={{ delay: 4 * animationDelay }}
          >
            <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
              <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                <IconGreate />
              </div>
              <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                {t('great_teams_label')}
              </p>
              <p className="text-neutral-600 mt-2">
                {t('great_teams_description')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionAboutList;
