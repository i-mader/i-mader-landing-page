import CompanyList from "@/components/CompanyList";
import HighlightProject from "@/components/HighlightProject";
import IconArrowDownBig from "@/components/icons/arrow-down-big";
import IconCPU from "@/components/icons/cpu";
import IconDollar from "@/components/icons/dollar";
import IconLightning from "@/components/icons/lighting";
import IconRocket from "@/components/icons/rocket";
import ItemService from "@/components/ui/service/item-service";
import Whatsapp from "@/components/Whatsapp";

import {
  aboutUsData,
  dataService,
  featureData,
  Mission,
  ServiceItem,
} from "@/lib/data";

import Link from "next/link";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import SectionFAQ from "@/components/FAQ";
import SectionContactUs from "@/components/ContactUs";
import SectionSkills from "@/components/Skills";
import { useTranslations } from "next-intl";
import Heading from "@/components/TransformText";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionWrapperSub>
          <Heading page="home" title={t("title")} />
          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            {t("desc")}
          </p>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
          <div className="hidden xl:block xl:absolute -left-[18%] top-1/2 transform -translate-y-1/2">
            <IconArrowDownBig />
          </div>
        </HeroSectionWrapperSub>
        <div className="absolute inset-0 container left-1/2 transform -translate-x-1/2">
          <div className="absolute container mx-auto left-0 right-0 bottom-[-21rem] lg:bottom-[-31%]">
            <HighlightProject />
          </div>
        </div>
      </HeroSectionWrapper>
      <section className="trusted-by mt-[24rem] lg:mt-[266px]">
        <h3 className="text-center text-neutral-700">
          Trusted by awesome compaines
        </h3>
        <div className="mt-6">
          <CompanyList />
        </div>
      </section>
      <section className="we-provide">
        <div className="container mx-auto">
          <h2 className="text-white font-medium font-raleway">
            {dataService.title}
          </h2>
          {dataService.data.map((service: ServiceItem, index: number) => {
            return (
              <ItemService
                key={service.id}
                data={service}
                index={index}
                totalItems={dataService.data.length}
              />
            );
          })}
        </div>
      </section>
      <section className="features">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-primary-soft font-bold lg:text-base">
                    {featureData.title}
                  </p>
                  <svg
                    width={200}
                    height={3}
                    viewBox="0 0 200 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width={200} height={2} fill="#AA99FF" />
                  </svg>
                </div>
                <h2 className="text-neutral-700 font-medium mt-4 font-raleway">
                  {featureData.title1}
                </h2>
                <p className="mt-2 text-neutral-600">{featureData.desc}</p>
                <div className="grid grid-cols-10 mt-6 lg:mt-[50px] border-b border-neutral-300 lg:border-none pb-5 lg:pb-0">
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        1.000+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Our satisfied clients
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="block lg:hidden"
                        width={2}
                        height={81}
                        viewBox="0 0 2 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={2} height={81} fill="#D9D9D9" />
                      </svg>

                      <svg
                        className="hidden lg:block"
                        width={2}
                        height={62}
                        viewBox="0 0 2 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        150+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Companies partner
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="block lg:hidden"
                        width={2}
                        height={81}
                        viewBox="0 0 2 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={2} height={81} fill="#D9D9D9" />
                      </svg>

                      <svg
                        className="hidden lg:block"
                        width={2}
                        height={62}
                        viewBox="0 0 2 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        300+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Project well done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                <div className="col-span-1">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconLightning />
                    </div>
                    <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                      Efficiency
                    </p>
                    <p className="text-neutral-600 mt-2">
                      Software services refer to the ability of a system or
                      application to perform tasks more quickly, using fewer
                      resources, or by minimizing the time and human effort
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconDollar />
                    </div>
                    <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                      Saving Cost
                    </p>
                    <p className="text-neutral-600 mt-2">
                      Can often provide significant cost savings for companies.
                      This can happen through process automation reducing labor
                      costs, reduction in physical infrastructure costs
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconRocket />
                    </div>
                    <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                      Competitiveness
                    </p>
                    <p className="text-neutral-600 mt-2">
                      Success in utilizing digital technology can increase a
                      company's competitiveness. This includes the ability to
                      bring products or services more quickly to market
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconCPU />
                    </div>
                    <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                      Peace of Mind
                    </p>
                    <p className="text-neutral-600 mt-2">
                      You can focus on their core business activities without
                      worrying about technical or operational issues of their IT
                      systems. Using reliable and efficient software
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionSkills />
      <section className="about-us">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <div>
                <div className="flex items-center gap-4">
                  <p className="text-primary-soft font-bold lg:text-base">
                    {aboutUsData.about_us.title}
                  </p>
                  <svg
                    width={200}
                    height={3}
                    viewBox="0 0 200 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="0.5" width={200} height={2} fill="#AA99FF" />
                  </svg>
                </div>
                <h2 className="text-neutral-700 font-medium mt-4 font-raleway">
                  {aboutUsData.about_us.title2}
                </h2>
                <p className="mt-2 text-neutral-600 mb-2 lg:mb-4">
                  {featureData.desc}
                </p>
                <Link
                  href={aboutUsData.about_us.path}
                  className="underline decoration-primary-original underline-offset-4"
                >
                  <span className="font-medium text-base text-primary-original">
                    Learn More
                  </span>
                </Link>
                <div className="grid grid-cols-10 mt-6 lg:mt-[50px] border-b border-neutral-300 lg:border-none pb-5 lg:pb-0">
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        1.000+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Our satisfied clients
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="block lg:hidden"
                        width={2}
                        height={81}
                        viewBox="0 0 2 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={2} height={81} fill="#D9D9D9" />
                      </svg>

                      <svg
                        className="hidden lg:block"
                        width={2}
                        height={62}
                        viewBox="0 0 2 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        150+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Companies partner
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="flex items-center justify-center h-full">
                      <svg
                        className="block lg:hidden"
                        width={2}
                        height={81}
                        viewBox="0 0 2 81"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={2} height={81} fill="#D9D9D9" />
                      </svg>

                      <svg
                        className="hidden lg:block"
                        width={2}
                        height={62}
                        viewBox="0 0 2 62"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect y="0.5" width={2} height={61} fill="#D9D9D9" />
                      </svg>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div>
                      <p className="text-2xl lg:text-[28px] text-neutral-700">
                        300+
                      </p>
                      <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                        Project well done
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="flex items-center gap-4">
                <p className="text-primary-soft font-bold lg:text-base">
                  {aboutUsData.our_mission.title}
                </p>
                <svg
                  width={200}
                  height={3}
                  viewBox="0 0 200 3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.5" width={200} height={2} fill="#AA99FF" />
                </svg>
              </div>
              <div className="mt-4">
                {aboutUsData.our_mission.data.map((mission: Mission) => {
                  return (
                    <div className="flex items-center gap-4 mt-4">
                      <div className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-[#EAE5FF] flex items-center justify-center text-primary-original">
                        {mission.id}
                      </div>
                      <p className="text-neutral-600 text-sm">{mission.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionFAQ />
      <SectionContactUs />
    </>
  );
}
