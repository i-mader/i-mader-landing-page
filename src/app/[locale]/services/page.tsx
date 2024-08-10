import SectionContactUs from "@/components/ContactUs";
import SectionFAQ from "@/components/FAQ";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import IconCPU from "@/components/icons/cpu";
import IconCpuMini from "@/components/icons/cpu-mini";
import IconDollar from "@/components/icons/dollar";
import IconLightning from "@/components/icons/lighting";
import IconRocket from "@/components/icons/rocket";
import SectionSkills from "@/components/Skills";
import TitleMini from "@/components/TitleMini";
import Heading from "@/components/TransformText";
import Whatsapp from "@/components/Whatsapp";
import { dataCompany, featureData } from "@/lib/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

type ServiceListItem = {
  id: number;
  name: string;
};

type Service = {
  id: number;
  title: string;
  desc: string;
  list: ServiceListItem[];
};

type ServicesArray = Service[];

const dataService: ServicesArray = [
  {
    id: 1,
    title: "Software Development",
    desc: "Building customized software solutions tailored to your specific business needs, from web and mobile applications to complex enterprise systems",
    list: [
      {
        id: 1,
        name: "MVP development",
      },
      {
        id: 2,
        name: "Full stack development",
      },
      {
        id: 3,
        name: "Mobile app development",
      },
      {
        id: 4,
        name: "Web development",
      },
      {
        id: 5,
        name: "Front-end development",
      },
    ],
  },
  {
    id: 2,
    title: "DevOps Consultation",
    desc: "An approach that combines software development (Dev) and information technology operations (Ops) in a harmonious whole to drive better ",
    list: [
      {
        id: 1,
        name: "DevOps engineers",
      },
      {
        id: 2,
        name: "Data Security",
      },
      {
        id: 3,
        name: "Framework Consultant",
      },
      {
        id: 4,
        name: "AI integration tools",
      },
      {
        id: 5,
        name: "Mechine learning program",
      },
    ],
  },
  {
    id: 3,
    title: "Software Consultant",
    desc: "A linchpin in the technological sector, deftly navigating the confluence of business acumen and IT expertise. Within our professional gambit",
    list: [
      {
        id: 1,
        name: "API development & integrations",
      },
      {
        id: 2,
        name: "Testing and QA capabilities",
      },
      {
        id: 3,
        name: "Backend development",
      },
      {
        id: 4,
        name: "Design expertise consultant",
      },
      {
        id: 5,
        name: "SEO web development",
      },
    ],
  },
];

const Page = () => {
  const t = useTranslations("ServicePage");
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionWrapperSub>
          {/* <h1 className="text-white font-medium text-center">
            We&nbsp;
            <span className="text-primary-soft italic">Build&nbsp;</span>
            Stable And Scalable&nbsp;
            <span className="text-primary-soft italic">Applications</span>
          </h1> */}

          <Heading page="service" title={t("title")} />

          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            We will only give the best to each of our customers, see what we can
            do for your business, start transforming now and develop your
            business more efficiently
          </p>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </HeroSectionWrapperSub>
        <div className="absolute inset-0 container left-1/2 transform -translate-x-1/2">
          <div className="absolute container mx-auto left-0 right-0 bottom-[-67rem] lg:bottom-[-54%]">
            <article>
              <div className="grid grid-cols-4 lg:grid-cols-12 gap-3 lg:gap-6 mt-4">
                {dataService.map((item: Service) => {
                  return (
                    <div key={item.id} className="col-span-4">
                      <div className="bg-primary-original p-6 lg:p-[42px] text-white h-[400px] lg:h-[463px]">
                        <h3 className="text-2xl lg:text-[28px] font-semibold">
                          {item.title}
                        </h3>
                        <h3 className="text-sm lg:text-base mt-3">
                          {item.desc}
                        </h3>
                        <ul>
                          {item.list.map((itemSub: ServiceListItem) => {
                            return (
                              <li key={itemSub.id} className="mt-2">
                                <div className="flex items-center gap-1">
                                  <IconCpuMini />
                                  <p className="font-medium text-md lg:text-xl">
                                    {itemSub.name}
                                  </p>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        <hr className="mt-[42px] bg-primary-soft" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </div>
      </HeroSectionWrapper>
      <section className="service-client container pt-[1139px] lg:pt-[403px] mb-[100px] text-center">
        <TitleMini title="CLIENTS" />
        <h2 className="font-medium mt-4 text-neutral-700 font-raleway">
          We Trusted By Awesome Compaines
        </h2>
        <p className="mt-2 text-neutral-600">
          Many large companies have trusted us, let's be one of them by starting
          to work with us and experience for yourself the extraordinary things
          we produce for your business.
        </p>
        <div className="w-full lg:w-[478px] mx-auto">
          <div className="grid grid-cols-10 mt-6 border-b border-neutral-300 lg:border-none">
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
                <p className="text-2xl lg:text-[28px] text-neutral-700">150+</p>
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
                <p className="text-2xl lg:text-[28px] text-neutral-700">300+</p>
                <p className="mt-2 lg:mt-0 text-neutral-500 whitespace-normal lg:whitespace-nowrap text-sm">
                  Project well done
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[70px]">
          <div className="flex flex-wrap gap-4 justify-around">
            {dataCompany.map(({ id, image }) => (
              <Image key={id} src={image} alt={`title-${id}`} />
            ))}
          </div>
        </div>
      </section>
      <SectionSkills />
      <section className="features">
        <div className="px-4 lg:container lg:mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-16">
            <div className="col-span-12">
              <div>
                <div className="flex items-center justify-center">
                  <TitleMini title="FEATURES" />
                </div>
                <h2 className="text-neutral-700 font-medium mt-4 text-center font-raleway">
                  {featureData.title1}
                </h2>
                <p className="mt-2 text-neutral-600 text-center">
                  {featureData.desc}
                </p>
              </div>
            </div>
            <div className="col-span-12">
              <div className="grid grid-cols-12 gap-y-6 gap-x-8">
                <div className="col-span-12 lg:col-span-3">
                  <div>
                    <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                      <IconLightning />
                    </div>
                    <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                      Efficiency
                    </p>
                    <p className="text-neutral-600 mt-2 break-words">
                      Software services refer to the ability of a system or
                      application to perform tasks more quickly, using fewer
                      resources, or by minimizing the time and human effort
                    </p>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
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
                <div className="col-span-12 lg:col-span-3">
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
                <div className="col-span-12 lg:col-span-3">
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
      <SectionFAQ />
      <SectionContactUs />
    </>
  );
};

export default Page;
