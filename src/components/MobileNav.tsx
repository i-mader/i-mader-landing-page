import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { links } from "./Nav";
import { AlignJustify } from "lucide-react";
import IconClose from "./icons/close";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import Footer from "./Footer";
import { useLocale } from "next-intl";

const MobileNav = () => {
  const path = usePathname();
  const localeActive = useLocale();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent className="overflow-scroll">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <div className="flex items-center justify-between">
            <Logo />
            <SheetClose
              asChild
              className="outline-none border-none ring-0 focus:ring-neutral-800 ring-offset-neutral-800"
            >
              <Button className="p-0 outline-0 border-none ring-0 focus:ring-neutral-800 ring-offset-neutral-800">
                <IconClose />
              </Button>
            </SheetClose>
          </div>

          <hr className="bg-neutral-500 text-neutral-500 border-neutral-500" />
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-4">
          {links.map((link: { path: string; name: string }) => {
            return (
              <Link
                className={`capitalize ${
                  `/${localeActive}${link.path}` === path
                    ? "text-primary-soft"
                    : "text-neutral-400"
                }`}
                href={`/${localeActive}/${link.path}`}
                key={link.path}
              >
                {link.path === path && (
                  <motion.span
                    initial={{ y: "-100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                  ></motion.span>
                )}
                {link.name}
              </Link>
            );
          })}
          <LanguageSwitcher isMobile />
        </nav>
        <hr className="bg-neutral-500 text-neutral-500 border-neutral-500 mt-4" />
        <SheetFooter>
          <Footer isMobile />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
