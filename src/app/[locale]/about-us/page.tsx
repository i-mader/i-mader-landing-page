import Image from "next/image";

import {
  aboutUsData,
  ImgFounderdaus,
  ImgFounderdeby,
  ImgFounderegi,
  ImgFounderikiw,
  ImgFoundermartin,
  ImgFounderrahmat,
  Mission,
} from "@/lib/data";

import SectionContactUs from "@/components/ContactUs";
import SectionFAQ from "@/components/FAQ";
import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import IconGreate from "@/components/icons/about/greate";
import IconOur from "@/components/icons/about/out";
import IconProject from "@/components/icons/about/project";
import IconStart from "@/components/icons/about/start";
import SiteMap from "@/components/SiteMap";
import TitleMini from "@/components/TitleMini";
import Whatsapp from "@/components/Whatsapp";

const Page = () => {
  return (
    <>
      <HeroSectionWrapper>
        <HeroSectionWrapperSub>
          <h1 className="text-white font-medium text-center  break-words">
            Become A &nbsp;
            <span className="text-primary-soft italic">Pioneer&nbsp;</span>
            In&nbsp;
            <span className="text-primary-soft italic">Digitalizing</span>
            &nbsp;The World
          </h1>

          <p className="body-sm text-white mt-4 lg:mt-6 text-center">
            Welcome to Innovation Mader, your premier partner in digital
            innovation. Our mission is to empower businesses to thrive in the
            digital age through cutting-edge technology
          </p>
          <div className="mt-4 lg:mt-6 flex justify-center">
            <Whatsapp />
          </div>
        </HeroSectionWrapperSub>
      </HeroSectionWrapper>
      <div className="relative top-[-10rem]">
        <div className="container relative">
          <div className="grid grid-cols-12 gap-y-6 gap-x-8">
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
                <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                  <IconStart />
                </div>
                <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                  10+ Years
                </p>
                <p className="text-neutral-600 mt-2 break-words">
                  We were founded in 2015 and continue to grow bigger to provide
                  the best service for our customers in all their digital
                  transformation needs
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
                <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                  <IconOur />
                </div>
                <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                  Our Partnership
                </p>
                <p className="text-neutral-600 mt-2">
                  We have built trust in our brand partners in providing better
                  service to our customers, they are trustworthy and really help
                  with every need
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
                <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                  <IconProject />
                </div>
                <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                  Project Done
                </p>
                <p className="text-neutral-600 mt-2">
                  There are so many projects that we have completed, everything
                  went well and our customers were satisfied with the results,
                  making us happy
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="bg-white p-4 shadow-sm border-black border border-opacity-5">
                <div className="w-[56px] h-[56px] lg:w-[68px] lg:h-[68px] bg-[#EAE5FF] flex items-center justify-center">
                  <IconGreate />
                </div>
                <p className="text-xl lg:text-[28px] font-semibold text-neutral-700 mt-4 lg:mt-6 ">
                  Great Teams
                </p>
                <p className="text-neutral-600 mt-2">
                  Everything we produce is inseparable from how extraordinary
                  the team we have is, they are experts in their respective
                  fields
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-[#F6F6F9] py-[40px] mt-[70px]">
          <div className="container board-of-comisaris">
            <TitleMini title="BOARD OF COMMISIONER" />
            <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-12 gap-6 mt-[42px]">
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFounderrahmat}
                      alt={`logo-1`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    Komisaris
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Rahmat Hidayatullah
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFounderegi}
                      alt={`logo-2`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    CFO
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Egi Chandra Pratama
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFoundermartin}
                      alt={`logo-3`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    CTO
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Martin Yonathan Pasaribu
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFounderdaus}
                      alt={`logo-3`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    CMO
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Bachtiar Firdaus
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFounderdeby}
                      alt={`logo-3`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    CEO
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Deby Prasetyo
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-[200px] lg:w-full h-[200px] relative">
                    <Image
                      src={ImgFounderikiw}
                      alt={`logo-3`}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                  <p className="text-neutral-700 font-semibold text-base mt-2 text-center">
                    Komisaris
                  </p>
                  <p className="text-neutral-500 text-sm mt-1 text-center">
                    Rifqi Bagus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container out-mission mt-[70px]">
          <TitleMini title="OUR MISSION" />
          <div className="grid grid-cols-12 mt-4">
            {aboutUsData.our_mission.data.map((mission: Mission) => {
              return (
                <div className="col-span-6" key={mission.id}>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="min-w-[60px] min-h-[60px] w-[60px] h-[60px] bg-[#EAE5FF] flex items-center justify-center text-primary-original">
                      {mission.id}
                    </div>
                    <p className="text-neutral-600 text-sm">{mission.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
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
