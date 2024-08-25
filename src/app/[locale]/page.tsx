import { useTranslations } from "next-intl";

import SectionFAQ from "@/components/FAQ";
import SectionContactUs from "@/components/ContactUs";
import SectionTrustedBy from "@/components/section/home/TrustedBy";
import SectionWeProvide from "@/components/section/home/WeProvide";
import SectionFeature from "@/components/section/home/Feature";
import SectionSkills from "@/components/section/home/Skills";
import SectionAboutUs from "@/components/section/home/AboutUs";
import HeroSectionHome from "@/components/section/home/HeroSection";

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <HeroSectionHome />

      <SectionTrustedBy />

      <SectionWeProvide />

      <SectionFeature />

      <SectionSkills />

      <SectionAboutUs />

      <SectionFAQ />

      <SectionContactUs />

    </>
  );
}
