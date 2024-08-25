"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "@/lib/utils";

import { useInView } from "react-intersection-observer";

import { featureData } from "@/lib/data";

import IconLightning from "../../icons/lighting";
import IconDollar from "../../icons/dollar";
import IconRocket from "../../icons/rocket";
import IconCPU from "../../icons/cpu";
import TitleMini from "@/components/TitleMini";
import { useTranslations } from "next-intl";
import MotionParagraf from "@/components/motion/Paragraf";

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
        className="px-4 lg:container lg:mx-auto"
      >
        <div className="grid grid-cols-12 gap-4 lg:gap-16">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="col-span-12"
          >
            <div>
                <div className="flex items-center justify-center">
                  <TitleMini title={t('features')} />
                </div>
                <h2 className="text-neutral-700 font-medium mt-4 text-center font-raleway">
                  {features.title1}
                </h2>
                <p className="mt-2 text-neutral-600 text-center">
                  {features.desc}
                </p>
              </div>
          </motion.div>

          <motion.div
            variants={slideInFromRight(0.5)}
            className="col-span-12"
          >
            <div className="grid grid-cols-12 gap-y-6 gap-x-8">
                <div className="col-span-12 lg:col-span-3">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconLightning />
                    </div>
                    <MotionParagraf className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6" text={t('efficiency')} />
                  <MotionParagraf className="text-neutral-600 mt-2" text={t('efficiency_desc')} />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
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
                <div className="col-span-12 lg:col-span-3">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconRocket />
                    </div>
                    <MotionParagraf text={t('competitiveness')} className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6"/>
                  <MotionParagraf text={t('competitiveness_desc')} className="text-neutral-600 mt-2" />
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
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
