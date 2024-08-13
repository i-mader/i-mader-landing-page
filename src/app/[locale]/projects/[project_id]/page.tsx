"use client";
import React from "react";

import HeroSectionWrapper, {
  HeroSectionWrapperSub,
} from "@/components/HeroSectionWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  dataProject,
  ImageBannerProject,
  ImageBannerProjectContent,
  ImageBannerProjectSmall,
} from "@/lib/data";
import TitleMini from "@/components/TitleMini";
import Link from "next/link";
import SectionFAQ from "@/components/FAQ";
import SectionContactUs from "@/components/ContactUs";
import { useLocale } from "next-intl";

interface IParams {
  params: { project_id: string };
}

const Page = ({ params }: IParams) => {
  const localeActive = useLocale();
  const pathname = usePathname();
  return (
    <>
      <HeroSectionWrapper>
        <div className="relative">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${localeActive}/projects`}
                  className={`hover:text-white text-sm ${
                    pathname === `/${localeActive}/projects`
                      ? "text-white"
                      : "text-neutral-400"
                  }`}
                >
                  Project
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={`/${localeActive}/projects/${params.project_id}`}
                  className={`hover:text-white text-sm ${
                    pathname ===
                    `/${localeActive}/projects/${params.project_id}`
                      ? "text-white"
                      : "text-neutral-400"
                  }`}
                >
                  Detail Project
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-white font-medium">New Technology of ChatGPT</h1>
        </div>
      </HeroSectionWrapper>
      <div className="relative top-[-10rem]">
        <div className="container relative">
          <div className="w-full h-[343px] lg:h-[400px] relative hidden lg:block">
            <Image
              src={ImageBannerProject}
              alt={`logo-project-${params.project_id}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="w-full h-[343px] lg:h-[400px] relative block lg:hidden">
            <Image
              src={ImageBannerProjectSmall}
              alt={`logo-project-${params.project_id}`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="container mx-auto">
          <HeroSectionWrapperSub>
            <hr className="mt-[70px] bg-primary-soft" />
            <article className="mt-8">
              <h4 className="text-xl text-neutral-700">Introduction</h4>
              <p className="text-neutral-500 text-sm mt-4">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
                <br />
                <br />
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
            </article>
            <hr className="my-8 bg-primary-soft" />
            <article>
              <h4 className="text-xl text-neutral-700">Braimstroming</h4>
              <p className="text-neutral-500 text-sm mt-4">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
                <br />
                <br />
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
            </article>

            <div className="relative w-full h-[173px] lg:h-[400px] mt-6">
              <Image
                src={ImageBannerProjectContent}
                alt={`logo-project-content-${params.project_id}`}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <hr className="my-8 bg-primary-soft" />
            <article>
              <h4 className="text-xl text-neutral-700">Conclusion</h4>
              <p className="text-neutral-500 text-sm mt-4">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id.
                <br />
                <br />
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                fames arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis vel et quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </p>
            </article>
          </HeroSectionWrapperSub>
        </div>
        <section className="container my-[70px]">
          <TitleMini title="SIMILAR PROJECT" />
          <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-6 mt-[55px]">
            {dataProject.map(({ id, image, title, desc, url }) => {
              return (
                <div key={id} className="col-span-4">
                  <div className="w-auto md:w-[384px]">
                    <div className="w-full h-[343px] md:h-[384px] relative">
                      <Image
                        src={image}
                        alt={`logo-${id}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                      />
                    </div>
                    <p className="text-neutral-700 text-xl md:text-2xl mt-4">
                      {title}
                    </p>
                    <p className="text-neutral-600 text-base mt-3">{desc}</p>
                    <div className="flex items-center justify-between mt-6">
                      <Link
                        href={`/projects/${id}`}
                        className="underline decoration-primary-original underline-offset-4"
                      >
                        <span className="font-medium text-base text-primary-original">
                          Show Project
                        </span>
                      </Link>
                      <svg
                        width={111}
                        height={36}
                        viewBox="0 0 111 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100.594 17.9999C100.594 18.1104 100.572 18.2197 100.528 18.3212C100.485 18.4228 100.421 18.5144 100.341 18.5906L89.0909 29.8406C89.0134 29.9181 88.9213 29.9796 88.82 30.0216C88.7186 30.0636 88.61 30.0852 88.5003 30.0852C88.3906 30.0852 88.282 30.0636 88.1807 30.0216C88.0793 29.9796 87.9872 29.9181 87.9097 29.8406C87.8321 29.763 87.7706 29.6709 87.7286 29.5696C87.6866 29.4682 87.665 29.3596 87.665 29.2499C87.665 29.1402 87.6866 29.0316 87.7286 28.9303C87.7706 28.829 87.8321 28.7369 87.9097 28.6593L98.555 17.9999L87.9097 7.34056C87.753 7.18392 87.665 6.97146 87.665 6.74994C87.665 6.52841 87.753 6.31595 87.9097 6.15931C88.0663 6.00267 88.2788 5.91467 88.5003 5.91467C88.7218 5.91467 88.9343 6.00267 89.0909 6.15931L100.341 17.4093C100.421 17.4855 100.485 17.5771 100.528 17.6786C100.572 17.7802 100.594 17.8895 100.594 17.9999Z"
                          fill="#604CC3"
                        />
                        <rect
                          y={19}
                          width={2}
                          height={100}
                          rx={1}
                          transform="rotate(-90 0 19)"
                          fill="#604CC3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <SectionFAQ />
        <SectionContactUs />
      </div>
    </>
  );
};

export default Page;
