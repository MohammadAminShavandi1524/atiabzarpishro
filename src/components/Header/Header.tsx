"use client";

import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { ThemeButton } from "../theme/ThemeButton";
import SearchBar from "./Searchbar";
import Nav from "./Nav";
import { CustomButton } from "../ui/custom-button";
import { CircleHelp } from "lucide-react";
import Link from "next/link";
import { customButtonVariants } from "../ui/custom-button/custom-button-variants";
import { cn } from "@/lib/utils";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Header");
  return (
    <div className="border-b border-b-border">
      <div className="w90 flex flex-col gap-y-1.5 pt-2.5 pb-2.5">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Logo />

          {/* search bar */}
          <SearchBar />

          {/* theme and language switcher */}
          <div className="flex items-center gap-x-3">
            <ThemeButton />
            <LanguageSwitcher defaultLocale={locale} />
          </div>
        </div>

        <div className="flex items-center justify-between px-1.5">
          {/* nav */}
          <Nav />

          {/* faq buttton */}
          <Link
            href={`/${locale}/faq`}
            className={cn(
              customButtonVariants({
                intent: "primary",
                variant: "solid",
              }),
              "gap-2 rounded-sm bg-primary",
            )}
          >
            <CircleHelp className="size-5.5" />
            <span className="text-lg">{locale === "fa" ? "سؤالات متداول" : "FAQ"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
