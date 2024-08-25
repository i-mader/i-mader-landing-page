"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Heading from "@/components/TransformText";
import Whatsapp from "@/components/Whatsapp";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import IconCpuMini from "@/components/icons/cpu-mini";
import { useInView } from "react-intersection-observer";

const HeroSectionService = () => {
  const t = useTranslations();

  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.5;

  const dataService = [
    {
      id: 1,
      title: t("software_development_title"),
      desc: t("software_development_desc"),
      list: [
        { id: 1, name: t("software_development_mvp") },
        { id: 2, name: t("software_development_full_stack") },
        { id: 3, name: t("software_development_mobile_app") },
        { id: 4, name: t("software_development_web") },
        { id: 5, name: t("software_development_frontend") },
      ],
    },
    {
      id: 2,
      title: t("devops_consultation_title"),
      desc: t("devops_consultation_desc"),
      list: [
        { id: 1, name: t("devops_consultation_engineers") },
        { id: 2, name: t("devops_consultation_security") },
        { id: 3, name: t("devops_consultation_framework") },
        { id: 4, name: t("devops_consultation_ai") },
        { id: 5, name: t("devops_consultation_ml") },
      ],
    },
    {
      id: 3,
      title: t("software_consultant_title"),
      desc: t("software_consultant_desc"),
      list: [
        { id: 1, name: t("software_consultant_api") },
        { id: 2, name: t("software_consultant_testing") },
        { id: 3, name: t("software_consultant_backend") },
        { id: 4, name: t("software_consultant_design") },
        { id: 5, name: t("software_consultant_seo") },
      ],
    },
  ];

  return (
    <HeroSectionWrapper>
      <HeroSectionWrapperSub>
        <motion.div variants={slideInFromTop}>
          <h1 className="text-white font-medium text-center break-words">
            {t("we")}&nbsp;
            <span className="text-primary-soft italic">{t("build")}&nbsp;</span>
            {t("stable_and_scalable")}&nbsp;
            <span className="text-primary-soft italic">
              {t("applications")}
            </span>
          </h1>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            {t("build_stable_scalable_desc")}
          </p>
        </motion.div>
        <motion.div variants={slideInFromTop}>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </motion.div>
      </HeroSectionWrapperSub>

      <div className="absolute inset-0 container left-1/2 transform -translate-x-1/2">
        <div className="absolute container mx-auto left-0 right-0 bottom-[-67rem] lg:bottom-[-54%]">
          <article>
            <div className="grid grid-cols-4 lg:grid-cols-12 gap-3 lg:gap-6 mt-4">
              {dataService.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="col-span-4"
                  ref={ref}
                  initial="hidden"
                  variants={imageVariants}
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                  transition={{ delay: index * animationDelay }}
                >
                  <div className="bg-primary-original p-6 lg:p-[42px] text-white h-[400px] lg:h-[463px]">
                    <h3 className="text-2xl lg:text-[28px] font-semibold">
                      {item.title}
                    </h3>
                    <h3 className="text-sm lg:text-base mt-3">{item.desc}</h3>
                    <ul>
                      {item.list.map((itemSub) => (
                        <li key={itemSub.id} className="mt-2">
                          <div className="flex items-center gap-1">
                            <IconCpuMini />
                            <p className="font-medium text-md lg:text-xl">
                              {itemSub.name}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <hr className="mt-[42px] bg-primary-soft" />
                  </div>
                </motion.div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSectionService;
