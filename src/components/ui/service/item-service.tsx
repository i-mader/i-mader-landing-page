"use client"
import React from "react";
import IconArrowRightBig from "@/components/icons/arrow-right-big";
import { ServiceItem } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const ItemService = ({
  data,
  index,
  totalItems,
}: {
  data: ServiceItem;
  index: number;
  totalItems: number;
}) => {
  const t = useTranslations();
  // Check if this is the last item
  const isLastItem = index === totalItems - 1;
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className={`grid grid-cols-12 gap-5 lg:gap-2 mt-6 lg:mt-[60px] pb-6 lg:pb-[60px] ${
        isLastItem ? "" : "border-b border-neutral-500"
      } `}
    >
      <div className="col-span-12 lg:col-span-4">
        <div>
          <p className="text-primary-soft text-2xl lg:text-[28px] mb-3">
            {data.title}
          </p>

          <svg
            className="block mb-4 lg:hidden"
            width={150}
            height={2}
            viewBox="0 0 150 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y={2}
              width={2}
              height={150}
              rx={1}
              transform="rotate(-90 0 2)"
              fill="#AA99FF"
            />
          </svg>

          <svg
            className="hidden lg:block"
            width={282}
            height={50}
            viewBox="0 0 282 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M267.547 25.0001C267.547 25.1535 267.516 25.3053 267.455 25.4463C267.395 25.5873 267.306 25.7146 267.195 25.8204L251.57 41.4454C251.463 41.5531 251.335 41.6385 251.194 41.6968C251.053 41.7551 250.902 41.7852 250.75 41.7852C250.598 41.7852 250.447 41.7551 250.306 41.6968C250.165 41.6385 250.037 41.5531 249.93 41.4454C249.822 41.3376 249.736 41.2098 249.678 41.069C249.62 40.9283 249.59 40.7774 249.59 40.6251C249.59 40.4727 249.62 40.3219 249.678 40.1811C249.736 40.0404 249.822 39.9125 249.93 39.8047L264.715 25.0001L249.93 10.1954C249.712 9.97781 249.59 9.68274 249.59 9.37506C249.59 9.06738 249.712 8.77231 249.93 8.55475C250.147 8.33719 250.442 8.21496 250.75 8.21496C251.058 8.21496 251.353 8.33719 251.57 8.55475L267.195 24.1797C267.306 24.2855 267.395 24.4128 267.455 24.5538C267.516 24.6948 267.547 24.8466 267.547 25.0001Z"
              fill="#AA99FF"
            />
            <rect
              y={26}
              width={2}
              height={265}
              rx={1}
              transform="rotate(-90 0 26)"
              fill="#AA99FF"
            />
          </svg>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div>
          <p className="text-white text-xl lg:text-[28px] leading-[28px] lg:leading-[39px]">
            {data.desc1}
          </p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4">
        <div>
          <p className="text-white text-xs">{data.desc2}</p>
          <div className="flex items-center justify-between mt-4 lg:mt-6">
            <Link href="#" className="text-primary-soft underline">
              {t('show_more')}
            </Link>
            <IconArrowRightBig />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemService;
