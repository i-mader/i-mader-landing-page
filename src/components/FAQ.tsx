"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { dataFaq } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/lib/utils";
import { useTranslations } from "next-intl";

const SectionFAQ = () => {
  const t = useTranslations();
  const faqData = dataFaq(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section initial="hidden" animate="visible" className="faq">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container mx-auto"
      >
        <div className="container mx-auto">
          <h1 className="text-white font-semibold font-raleway">
            {faqData.title}
          </h1>
          <p className="text-white mt-2">{faqData.desc}</p>
          <div className="mt-8 lg:mt-[70px]">
            <Accordion type="single" collapsible className="w-full">
              {faqData.data.map((item: any) => {
                return (
                  <AccordionItem
                    value={`item-${item.id}`}
                    key={item.id}
                    className="border-b border-neutral-500 mt-6"
                  >
                    <AccordionTrigger className="text-white text-base lg:text-[28px] hover:no-underline text-left">
                      <motion.span
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        }}
                      >
                        {item.title}
                      </motion.span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white text-sm">
                      {item.desc}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionFAQ;
