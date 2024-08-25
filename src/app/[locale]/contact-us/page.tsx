import FormContactUs from "@/components/FormContaactUs";
import {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import HeroSectionContactUs from "@/components/section/contact-us/HeroSection";
import SiteMap from "@/components/SiteMap";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSectionContactUs />
      <div className="relative top-[-10rem]">
        <HeroSectionWrapperSub>
          <div className="container bg-white py-[40px] shadow border border-black border-opacity-5">
            <FormContactUs />
          </div>
        </HeroSectionWrapperSub>
      </div>
      <div>
        <SiteMap />
      </div>
    </>
  );
};

export default Page;
