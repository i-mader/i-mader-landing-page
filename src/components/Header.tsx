"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
// import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  //   useEffect(() => {
  //     const scrollYPos = window.addEventListener("scroll", () => {
  //       window.screenY > 50 ? setHeader(true) : setHeader(false);
  //     });
  //     return () => window.removeEventListener("scroll", scrollYPos);
  //   });

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-neutral-800 shadow-lg dark:bg-accent"
          : // : "py-4 dark:bg-transparent"
            "py-4 bg-neutral-800"
      } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-black"}`}
    >
      <div className="bg-neutral-800 absolute inset-0 bg-opacity-20 z-20"></div>
      <div className="bg-neutral-800 absolute inset-0 z-10"></div>
      <div className="container mx-auto relative z-30">
        <div className="flex items-center justify-between">
          <Logo />
          {/* <LanguageSwitcher /> */}
          <div className="flex items-center gapx-x-6">
            <Nav
              containerStyle="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary-soft transition-all"
              underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>

          <div className="hidden xl:block">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
