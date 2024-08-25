"use client";
import { contactUs } from "@/lib/data";
import Whatsapp from "./Whatsapp";
import FormContaactUs from "@/components/FormContaactUs";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/lib/utils";
import { useTranslations } from "next-intl";

const SectionContactUs = () => {
  const t = useTranslations();
  const contactData = contactUs(t);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <motion.section initial="hidden" animate="visible" className="contact-us">
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
                  {contactData.title}
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
                {contactData.title2}
              </h2>
              <p className="mt-2 text-neutral-600 mb-2 lg:mb-4">
                {contactData.desc}
              </p>
              <div className="mt-4 lg:mt-6">
                <Whatsapp />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={slideInFromRight(0.5)}
            className="col-span-12 lg:col-span-6"
          >
            <div className="mt-6 lg:mt-0">
              <FormContaactUs />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionContactUs;
