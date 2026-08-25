"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

import NavItem from "./NavItem";
import TechnicalInformationDropdown from "./TechnicalInformationDropdown";
import PartnersDropdown from "./PartnersDropdown";

const Nav = () => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <nav className="ms-2.5">
      <ul className="flex items-center gap-x-6 pt-3 pb-2 text-lg">
        <NavItem label={t("home")} href={`/${locale}`} />

        {/* Our Partners */}
        <PartnersDropdown />

        {/* Representations */}
        <NavItem
          label={t("representations")}
          href={`/${locale}/representations`}
        />

        {/* Technical Information */}
        <TechnicalInformationDropdown />

        {/* News */}
        {/* <NavItem label={t("news")} href={`/${locale}/news`} /> */}

        {/* Contact Us */}
        <NavItem label={t("contactUs")} href={`/${locale}/contact-us`} />

        {/* About Us */}
        <NavItem label={t("aboutUs")} href={`/${locale}/about-us`} />

         {/* faq */}
        <NavItem label={t("faq")} href={`/${locale}/faq`} />
      </ul>
    </nav>
  );
};

export default Nav;
