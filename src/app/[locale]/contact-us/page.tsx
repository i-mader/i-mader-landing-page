import FormContactUs from "@/components/FormContaactUs";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import SiteMap from "@/components/SiteMap";
import Whatsapp from "@/components/Whatsapp";
import React from "react";

const Page = () => {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionWrapperSub>
          <h1 className="text-white font-medium text-center break-words font-raleway">
            Contact Us &nbsp;
            <span className="text-primary-soft italic">Now</span>
          </h1>

          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            Optimize costs and efficiency with our software solutions. Contact
            us now for a free consultation! Only start working together once you
            see we can be trusted
          </p>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </HeroSectionWrapperSub>
      </HeroSectionWrapper>
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
