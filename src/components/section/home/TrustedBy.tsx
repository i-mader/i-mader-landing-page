"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft } from "@/lib/utils";

import CompanyList from "../../CompanyList";

import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";

const SectionTrustedBy = () => {
  const t = useTranslations();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="trusted-by mt-[24rem] lg:mt-[266px]"
    >
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
      >
        <h3 className="text-center text-neutral-700">
          {t('trusted_by_heading')}
        </h3>
        <div className="mt-6">
          <CompanyList />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionTrustedBy;
