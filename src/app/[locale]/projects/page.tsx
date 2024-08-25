import SectionContactUs from "@/components/ContactUs";
import SectionFAQ from "@/components/FAQ";
import HeroSectionProject from "@/components/section/projects/HeroSection";
import SectionProjects from "@/components/section/projects/ProjectsSection";

const Page = () => {
  return (
    <>
      <HeroSectionProject />
      <SectionProjects />
      <SectionFAQ />
      <SectionContactUs />
    </>
  );
};

export default Page;
