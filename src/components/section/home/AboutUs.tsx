"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft, slideInFromRight } from "@/lib/utils";

import { useInView } from "react-intersection-observer";

import { aboutUsData, Mission } from "@/lib/data";

import AnimatedCounter from "../../CountingNumber";

import Link from "next/link";
import { useTranslations } from "next-intl";

const SectionAboutUs = () => {
  const t = useTranslations();
  const aboutUs = aboutUsData(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section initial="hidden" animate="visible" className="about-us">
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
                    {aboutUs.about_us.title2}
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
                  {aboutUs.about_us.title2}
                </h2>
                <p className="mt-2 text-neutral-600 mb-2 lg:mb-4">
                  {aboutUs.about_us.desc}
                </p>
                <Link
                  href={aboutUs.about_us.path}
                  className="underline decoration-primary-original underline-offset-4"
                >
                  <span className="font-medium text-base text-primary-original">
                    {t('learn_more')}
                  </span>
                </Link>
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
                      <AnimatedCounter from={0} to={150} />+
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
            <div className="flex items-center gap-4">
                <p className="text-primary-soft font-bold lg:text-base">
                  {aboutUs.our_mission.title}
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
              <div className="mt-4">
                {aboutUs.our_mission.data.map((mission: Mission) => {
                  return (
                    <div className="flex items-center gap-4 mt-4" key={mission.id}>
                      <div className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-[#EAE5FF] flex items-center justify-center text-primary-original">
                        {mission.id}
                      </div>
                      <p className="text-neutral-600 text-sm">{mission.desc}</p>
                    </div>
                  );
                })}
              </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionAboutUs;
