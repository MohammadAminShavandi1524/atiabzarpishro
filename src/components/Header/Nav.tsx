"use client";

import { useLocale, useTranslations } from "next-intl";

import NavItem from "./NavItem";
import TechnicalInformationDropdown from "./TechnicalInformationDropdown";
import PartnersDropdown from "./PartnersDropdown";

const Nav = () => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();

  return (
    <nav className="3xl:ms-6.5 ms-1.5 xl:ms-3 2xl:ms-5">
      <ul className="3xl:gap-x-9 3xl:pt-3 3xl:pb-2 3xl:text-[20px] flex items-center gap-x-2.5 pt-2 pb-1.5 text-[13px] whitespace-nowrap xl:gap-x-4 xl:text-[15px] 2xl:gap-x-6 2xl:text-[17px]">
        <NavItem label={t("home")} href={`/${locale}`} />

        <PartnersDropdown />

        <NavItem
          label={t("representations")}
          href={`/${locale}/representations`}
        />

        <TechnicalInformationDropdown />

        <NavItem label={t("contactUs")} href={`/${locale}/contact-us`} />

        <NavItem label={t("aboutUs")} href={`/${locale}/about-us`} />

        <NavItem label={t("faq")} href={`/${locale}/faq`} />
      </ul>
    </nav>
  );
};

export default Nav;
