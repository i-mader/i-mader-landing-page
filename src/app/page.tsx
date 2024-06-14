// import Script from "next/script";
import Hero from "./ui/section/hero";
import WhyChooseUs from "./ui/section/why-choose-us";
// import Blog from "./ui/section/blog";
// import OurClients from "./ui/section/out-clients";
import Skills from "./ui/section/skills";
import AboutUs from "./ui/section/about-us";
import OurTeams from "./ui/section/our-teams";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      {/* <Blog /> */}
      {/* <OurClients /> */}
      <Skills />
      <AboutUs />
      <OurTeams />
    </>
  );
}
