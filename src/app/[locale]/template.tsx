"use client";
import React from "react";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linier", delay: 0.2, duration: 0.4 }}
    >
      {children}
    </motion.main>
  );
}
