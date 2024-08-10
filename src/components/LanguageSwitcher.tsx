"use client";
import { useLocale } from "next-intl";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { usePathname, useRouter } from "next/navigation";

interface ILanguageSwitcher {
  isMobile?: boolean;
}

export default function LanguageSwitcher({ isMobile }: ILanguageSwitcher) {
  const localeActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const slicePath = pathname.replace(/^\/[a-z]{2}(\/|$)/, "/");

  if (isMobile) {
    return (
      <Select
        value={localeActive}
        onValueChange={(e: string) => router.replace(`/${e}${slicePath}`)}
      >
        <SelectTrigger className="w-auto bg-transparent text-white border-none">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="id">Indonesia</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  }

  return (
    <Select
      value={localeActive}
      onValueChange={(e: string) => router.replace(`/${e}${slicePath}`)}
    >
      <SelectTrigger className="w-auto bg-transparent text-white border-none">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="id">ID</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
