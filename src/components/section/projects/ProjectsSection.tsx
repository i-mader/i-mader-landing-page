"use client";
import React from "react";

import { dataProject } from "@/lib/data";

import Image from "next/image";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { slideInFromLeft } from "@/lib/utils";
import Link from "next/link";
import { useLocale } from "next-intl";

const SectionProjects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDelay = 0.5;
  const localeActive = useLocale();
  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        initial="hidden"
        variants={slideInFromLeft(0.5)}
        className="container relative top-[-10rem]"
      >
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6">
          {dataProject.map(({ id, image, title, desc }, index: number) => {
            return (
              <motion.div
                key={id}
                className="col-span-4"
                ref={ref}
                initial="hidden"
                variants={imageVariants}
                animate={inView ? "visible" : "hidden"}
                custom={index}
                transition={{ delay: index * animationDelay }}
              >
                <div className="w-auto md:w-[384px]">
                  <div className="w-full h-[343px] md:h-[384px] relative">
                    <Image
                      src={image}
                      alt={`logo-${id}`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 text-xl md:text-2xl mt-4">
                    {title}
                  </p>
                  <p className="text-neutral-600 text-base mt-3">{desc}</p>
                  <div className="flex items-center justify-between mt-6">
                    <Link
                      href={`/${localeActive}/projects/${id}`}
                      className="underline decoration-primary-original underline-offset-4"
                    >
                      <span className="font-medium text-base text-primary-original">
                        Show Project
                      </span>
                    </Link>
                    <svg
                      width={111}
                      height={36}
                      viewBox="0 0 111 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100.594 17.9999C100.594 18.1104 100.572 18.2197 100.528 18.3212C100.485 18.4228 100.421 18.5144 100.341 18.5906L89.0909 29.8406C89.0134 29.9181 88.9213 29.9796 88.82 30.0216C88.7186 30.0636 88.61 30.0852 88.5003 30.0852C88.3906 30.0852 88.282 30.0636 88.1807 30.0216C88.0793 29.9796 87.9872 29.9181 87.9097 29.8406C87.8321 29.763 87.7706 29.6709 87.7286 29.5696C87.6866 29.4682 87.665 29.3596 87.665 29.2499C87.665 29.1402 87.6866 29.0316 87.7286 28.9303C87.7706 28.829 87.8321 28.7369 87.9097 28.6593L98.555 17.9999L87.9097 7.34056C87.753 7.18392 87.665 6.97146 87.665 6.74994C87.665 6.52841 87.753 6.31595 87.9097 6.15931C88.0663 6.00267 88.2788 5.91467 88.5003 5.91467C88.7218 5.91467 88.9343 6.00267 89.0909 6.15931L100.341 17.4093C100.421 17.4855 100.485 17.5771 100.528 17.6786C100.572 17.7802 100.594 17.8895 100.594 17.9999Z"
                        fill="#604CC3"
                      />
                      <rect
                        y={19}
                        width={2}
                        height={100}
                        rx={1}
                        transform="rotate(-90 0 19)"
                        fill="#604CC3"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SectionProjects;
