import Script from 'next/script'
import Hero from "./ui/section/hero";
import WhyChooseUs from "./ui/section/why-choose-us";
import Blog from "./ui/section/blog";
import OurClients from "./ui/section/out-clients";
import Skills from "./ui/section/skills";

export default function Home() {
  return (
    <>
      {/* sec 1 */}
      <Hero />
      {/* sec 2 */}
      <WhyChooseUs />
      {/* sec 3 */}
      <Blog />
      {/* sec 4 */}
      <OurClients />
      {/* sec 5 */}
      <Skills />
    </>
  );
}
