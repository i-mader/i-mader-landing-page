"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroSectionWrapperProps {
  children: ReactNode;
}

const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({
  children,
}) => {
  return (
    <motion.section initial="hidden" animate="visible" className="hero-section">
      <div className="container mx-auto">{children}</div>
    </motion.section>
  );
};

export const HeroSectionWrapperSub: React.FC<HeroSectionWrapperProps> = ({
  children,
}) => {
  return <div className="lg:max-w-[957px] mx-auto relative">{children}</div>;
};

export default HeroSectionWrapper;
