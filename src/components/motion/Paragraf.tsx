"use client";
import React from "react";
import { motion } from "framer-motion";
import { splitStringUsingRegex } from "@/lib/utils";

const MotionParagraf = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const chartVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  return (
    <motion.p
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.015 }}
      className={className}
    >
      {splitStringUsingRegex(text).map((chart: string, index:number) => (
        <motion.span
          key={index}
          transition={{ duration: 0.35 }}
          variants={chartVariants}
        >
          {chart}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default MotionParagraf;
