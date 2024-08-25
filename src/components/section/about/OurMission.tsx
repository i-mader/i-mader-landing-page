"use client";

import React from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { slideInFromLeft } from "@/lib/utils";
import TitleMini from "@/components/TitleMini";
import { aboutUsData, Mission } from "@/lib/data";
import { useTranslations } from "next-intl";

const SectionOurMission = () => {
  const t = useTranslations();
  const aboutUs = aboutUsData(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section initial="hidden" animate="visible" className="container out-mission mt-[70px]">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
      >
        <TitleMini title={t('missions')} />
          <div className="grid grid-cols-12 mt-4">
            {aboutUs.our_mission.data.map((mission: Mission) => {
              return (
                <div className="col-span-6" key={mission.id}>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-[#EAE5FF] flex items-center justify-center text-primary-original">
                      {mission.id}
                    </div>
                    <p className="text-neutral-600 text-sm">{mission.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionOurMission;
