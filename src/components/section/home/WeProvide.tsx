"use client";

import React from "react";

import { motion } from "framer-motion";

import { slideInFromLeft } from "@/lib/utils";

import { useInView } from "react-intersection-observer";

import { dataService, ServiceItem } from "@/lib/data";

import ItemService from "../../ui/service/item-service";
import { useTranslations } from "next-intl";

const SectionWeProvide = () => {
  const t = useTranslations();
  const serviceData = dataService(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="we-provide"
    >
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container mx-auto"
      >
          <h2 className="text-white font-medium font-raleway">
            {serviceData.title}
          </h2>
          {serviceData.data.map((service: ServiceItem, index: number) => {
            return (
              <ItemService
                key={service.id}
                data={service}
                index={index}
                totalItems={serviceData.data.length}
              />
            );
          })}
      </motion.div>
    </motion.section>
  );
};

export default SectionWeProvide;
