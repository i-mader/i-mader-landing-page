"use client";
import React from "react";
import SwiperBasic from "../swiper-basic";
import useSWR from "swr";
import { Skeleton, Spin } from "antd";

// Define the type for the fetched data
interface User {
  id: number;
  name: string;
  // Add other fields based on your API response
}

const OurClients = () => {
  const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<User> =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>failed to load</div>;

  return (
    <div id="our-clients" className="home-sec-4">
      <h2 className="text-[#217BF4] text-xl sm:text-3xl font-bold text-center">
        Our Clients
      </h2>
      {isLoading ? (
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-5 mt-5">
          {[1, 2, 3].map((item: number) => {
            return (
              <div key={item} className="col-span-4 border rounded-md p-5">
                <Skeleton active />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-5 sm:mt-14">
          <SwiperBasic />
        </div>
      )}
    </div>
  );
};

export default OurClients;
