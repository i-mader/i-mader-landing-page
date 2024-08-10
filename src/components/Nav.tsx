"use client";
import React from "react";
//
import Link from "next/link";

//
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

interface INavProps {
  containerStyle?: string;
  linkStyles?: string;
  underLineStyles?: string;
}

export const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/projects",
    name: "Projects",
  },
  {
    path: "/about-us",
    name: "About Us",
  },
  {
    path: "/contact-us",
    name: "Contact Us",
  },
];

const Nav = ({ containerStyle, linkStyles, underLineStyles }: INavProps) => {
  const path = usePathname();
  const localeActive = useLocale();
  return (
    <nav className={`${containerStyle}`}>
      {links.map((link: { path: string; name: string }) => {
        return (
          <Link
            className={`capitalize ${
              `/${localeActive}${link.path}` === path
                ? "text-primary-soft"
                : "text-neutral-400"
            } ${linkStyles}`}
            href={`/${localeActive}/${link.path}`}
            key={link.path}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              ></motion.span>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
