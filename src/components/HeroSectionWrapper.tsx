import React, { ReactNode } from "react";
import HighlightProject from "./HighlightProject";

interface HeroSectionWrapperProps {
  children: ReactNode;
}

const HeroSectionWrapper: React.FC<HeroSectionWrapperProps> = ({
  children,
}) => {
  return (
    <section className="hero-section">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export const HeroSectionWrapperSub: React.FC<HeroSectionWrapperProps> = ({
  children,
}) => {
  return <div className="lg:max-w-[957px] mx-auto relative">{children}</div>;
};

export default HeroSectionWrapper;
