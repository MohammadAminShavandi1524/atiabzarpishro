"use client";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import NavItem from "./NavItem";
import TechnicalInformationDropdown from "./TechnicalInformationDropdown";

const Nav = () => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="ms-2.5">
      <ul className="flex items-center gap-x-6">
        <NavItem label={t("home")} href={`/${locale}`} />

        <li
          className={cn(
            "group flex items-center gap-x-1 text-lg transition-all",
            "hover:text-ring",
            pathname === `/${locale}/our-partners` && "text-ring font-medium",
          )}
        >
          <span>{t("ourPartners")}</span>

          <ChevronDown
            className={cn(
              "mt-[3px] size-5.5 transition-transform duration-250 ease-out",
              "group-hover/technical:rotate-180",
            )}
            strokeWidth={1.8}
          />
        </li>

        <TechnicalInformationDropdown />

        <NavItem label={t("news")} href={`/${locale}/news`} />

        <NavItem label={t("contactUs")} href={`/${locale}/contact-us`} />

        <NavItem label={t("aboutUs")} href={`/${locale}/about-us`} />
      </ul>
    </nav>
  );
};

export default Nav;
