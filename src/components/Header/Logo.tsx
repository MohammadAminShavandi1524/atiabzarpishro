"use client";

import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface LogoProps {}

const Logo = ({}: LogoProps) => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <Link className="flex items-center gap-x-1.5" href={`/${locale}`}>
      <div className="relative size-[80px]">
        <Image
          src="/ati_abzar.webp"
          alt="logo"
          fill
          className="drop-shadow-[0_0_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        />
      </div>
      <div
        className={cn(
          "font-normal text-[#333333] dark:text-[#fcf9f8] ",
          locale === "en" ? "text-[28px] font-medium" : "text-[26px]",
        )}
      >
        {t("logoLabel")}
      </div>
    </Link>
  );
};

export default Logo;
