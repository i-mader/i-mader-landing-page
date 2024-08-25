"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "@/lib/utils";

import { useInView } from "react-intersection-observer";

import { featureData } from "@/lib/data";

import AnimatedCounter from "../../CountingNumber";
import IconLightning from "../../icons/lighting";
import IconDollar from "../../icons/dollar";
import IconRocket from "../../icons/rocket";
import IconCPU from "../../icons/cpu";
import MotionParagraf from "@/components/motion/Paragraf";
import { useTranslations } from "next-intl";

const SectionFeature = () => {
  const t = useTranslations();
  const features = featureData(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

 
  return (
    <motion.section initial="hidden" animate="visible" className="features">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container mx-auto"
      >
        <div className="grid grid-cols-12 gap-4 lg:gap-16">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="col-span-12 lg:col-span-6"
          >
            <div>
              <div className="flex items-center gap-4">
                <p className="text-primary-soft font-bold lg:text-base">
                  {features.title}
                </p>
                <svg
                  width={200}
                  height={3}
                  viewBox="0 0 200 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={200} height={2} fill="#AA99FF" />
                </svg>
              </div>
              <h2 className="text-neutral-700 font-medium mt-4 font-raleway">
                {features.title1}
              </h2>
              <MotionParagraf text={features.desc} className="mt-2 text-neutral-600" />
              <div className="grid grid-cols-10 mt-6 lg:mt-[50px] border-b border-neutral-300 lg:border-none pb-5 lg:pb-0">
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
                    <p className="text-2xl lg:text-[28px] text-neutral-700">
                      <AnimatedCounter from={0} to={50} />+
                    </p>
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
                    <p className="text-2xl lg:text-[28px] text-neutral-700">
                      <AnimatedCounter from={0} to={300} />+
                    </p>
                    <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                    {t('trusted_by_projects_label')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="col-span-12 lg:col-span-6"
          >
            <div className="grid grid-cols-2 gap-y-6 gap-x-8">
              <div className="col-span-1">
                <div>
                  <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                    <IconLightning />
                  </div>
                  <MotionParagraf className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6" text={t('efficiency')} />
                  <MotionParagraf className="text-neutral-600 mt-2" text={t('efficiency_desc')} />
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                    <IconDollar />
                  </div>
                  <MotionParagraf text={t('saving_cost')} className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 " />
                  <MotionParagraf className="text-neutral-600 mt-2" 
                    text={t('saving_cost_desc')}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                    <IconRocket />
                  </div>
                  <MotionParagraf text={t('competitiveness')} className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6"/>
                  <MotionParagraf text={t('competitiveness_desc')} className="text-neutral-600 mt-2" />
                </div>
              </div>
              <div className="col-span-1">
                <div>
                  <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                    <IconCPU />
                  </div>
                  <MotionParagraf className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6" text={t('peace_of_mind')} />
                  <MotionParagraf className="text-neutral-600 mt-2" text={t('peace_of_mind_desc')}/>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionFeature;
