import SectionContactUs from "@/components/ContactUs";
import SectionFAQ from "@/components/FAQ";
import SectionSkills from "@/components/section/home/Skills";
import HeroSectionService from "@/components/section/service/HeroSection";
import SectionWeClient from "@/components/section/service/Client";
import SectionFeature from "@/components/section/service/Feature";

const Page = () => {
  
  return (
    <>
      <HeroSectionService />

      <SectionWeClient />

      <SectionSkills />

      <SectionFeature />

      <SectionFAQ />
      
      <SectionContactUs />
    </>
  );
};

export default Page;
