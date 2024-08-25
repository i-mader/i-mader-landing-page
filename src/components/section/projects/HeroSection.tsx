"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromTop } from "@/lib/utils";

import Whatsapp from "@/components/Whatsapp";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import { useTranslations } from "next-intl";

const HeroSectionProject = () => {
  const t = useTranslations();
  return (
    <HeroSectionWrapper>
      <HeroSectionWrapperSub>
        <motion.div variants={slideInFromTop}>
          <h1 className="text-white font-medium text-center font-raleway">
            {t("every")}&nbsp;
            <span className="text-primary-soft italic">
              {t("product")}&nbsp;
            </span>
            {t("we_build_has_a_different")}&nbsp;
            <span className="text-primary-soft italic">{t("story")}</span>
          </h1>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            {t("product_story_description")}
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

export default HeroSectionProject;
