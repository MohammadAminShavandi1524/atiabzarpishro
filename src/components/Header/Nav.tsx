"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import NavItem from "./NavItem";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavProps {}

const Nav = ({}: NavProps) => {
  const t = useTranslations("Header.Navigation");
  const locale = useLocale();
  const pathname = usePathname();
  return (
    <nav className="ms-2.5">
      <ul className="flex items-center gap-x-6">
        <NavItem label={t("home")} href={`/${locale}`} />

        <li>
          <Link
            className={cn(
              "group flex items-center gap-x-1 text-lg transition-all",
              "hover:text-ring",
              pathname === `/${locale}/our-partners` &&
                "text-ring font-medium",
            )}
            href={`/${locale}/our-partners`}
          >
            <span>{t("ourPartners")}</span>

            <ChevronDown
              className={cn(
                "mt-[3px] size-5.5 transition-transform duration-300",
                "group-hover:rotate-180",
              )}
              strokeWidth={1.8}
            />
          </Link>
        </li>

        <li>
          <Link
            className={cn(
              "group flex items-center gap-x-1 text-lg transition-all",
              "hover:text-ring",
              pathname === `/${locale}/technical-information` &&
                "text-ring font-medium",
            )}
            href={`/${locale}/technical-information`}
          >
            <span>{t("technicalInformation")}</span>

            <ChevronDown
              className={cn(
                "mt-[3px] size-5.5 transition-transform duration-300",
                "group-hover:rotate-180",
              )}
              strokeWidth={1.8}
            />
          </Link>
        </li>

        <NavItem label={t("blog")} href={`/${locale}/blog`} />

        <NavItem label={t("contactUs")} href={`/${locale}/contact-us`} />

        <NavItem label={t("aboutUs")} href={`/${locale}/about-us`} />
      </ul>
    </nav>
  );
};

export default Nav;
