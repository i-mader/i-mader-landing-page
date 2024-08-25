"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/utils";

import { useTranslations } from "next-intl";

import Whatsapp from "@/components/Whatsapp";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";

const HeroSectionContactUs = () => {
  const t = useTranslations();
  return (
    <HeroSectionWrapper>
      <HeroSectionWrapperSub>
        <motion.div variants={slideInFromTop}>
          <h1 className="text-white font-medium text-center break-words font-raleway">
            {t("contact_us")}&nbsp;
            <span className="text-primary-soft italic">{t("now")}</span>
          </h1>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            {t("contact_us_description")}
          </p>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </motion.div>
      </HeroSectionWrapperSub>
    </HeroSectionWrapper>
  );
};

export default HeroSectionContactUs;
