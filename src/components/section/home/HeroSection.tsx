"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromBottom, slideInFromTop } from "@/lib/utils";

import { useTranslations } from "next-intl";

import Heading from "@/components/TransformText";
import Whatsapp from "@/components/Whatsapp";
import IconArrowDownBig from "@/components/icons/arrow-down-big";
import HighlightProject from "@/components/HighlightProject";
import HeroSectionWrapper, {
    HeroSectionWrapperSub,
  } from "@/components/HeroSectionWrapper";

const HeroSectionHome = () => {
  const t = useTranslations();
  return (
    <HeroSectionWrapper>
      <HeroSectionWrapperSub>
        <motion.div variants={slideInFromTop}>
          <Heading page="home" title={t("craft_title")} />
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            {t("craft_desc")}
          </p>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </motion.div>

        <div className="hidden xl:block xl:absolute -left-[18%] top-1/2 transform -translate-y-1/2">
          <motion.div variants={slideInFromTop}>
            <IconArrowDownBig />
          </motion.div>
        </div>
      </HeroSectionWrapperSub>
      <div className="absolute inset-0 container left-1/2 transform -translate-x-1/2">
        <div className="absolute container mx-auto left-0 right-0 bottom-[-21rem] lg:bottom-[-31%]">
          <motion.div variants={slideInFromBottom}>
            <HighlightProject />
          </motion.div>
        </div>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSectionHome;
