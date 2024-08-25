import SectionContactUs from "@/components/ContactUs";
import SectionFAQ from "@/components/FAQ";
import SiteMap from "@/components/SiteMap";
import HeroSectionAbout from "@/components/section/about/HeroSection";
import SectionAboutList from "@/components/section/about/AboutList";
import SectionBoardOfComisaris from "@/components/section/about/BoardOfComisaris";
import SectionOurMission from "@/components/section/about/OurMission";

const Page = () => {
  return (
    <>
      <HeroSectionAbout />
      <div className="relative top-[-10rem]">
        <SectionAboutList />
        <SectionBoardOfComisaris />
        <SectionOurMission />
        <div className="mt-[70px]">
          <SiteMap />
        </div>
        <SectionFAQ />
        <SectionContactUs />
        </div>
    </>
  );
};

export default Page;
