"use client";
import React from "react";
//
import Link from "next/link";

//
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

interface INavProps {
  containerStyle?: string;
  linkStyles?: string;
  underLineStyles?: string;
}
const Nav = ({ containerStyle, linkStyles, underLineStyles }: INavProps) => {
  const t = useTranslations();
  const path = usePathname();
  const localeActive = useLocale();

  const links = [
    {
      path: "/",
      name: t('home'),
    },
    {
      path: "/services",
      name: t('service'),
    },
    {
      path: "/projects",
      name: t('project'),
    },
    {
      path: "/about-us",
      name: t('about_us_nav'),
    },
    {
      path: "/contact-us",
      name: t('contact_us'),
    },
  ];

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
