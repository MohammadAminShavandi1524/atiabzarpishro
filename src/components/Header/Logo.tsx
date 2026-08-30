"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Logo = () => {
  const locale = useLocale();
  const t = useTranslations("Header");

  return (
    <Link
      href={`/${locale}`}
      className="3xl:gap-x-2.5 flex items-center gap-x-1.5 xl:gap-x-2"
    >
      <div className="3xl:size-[90px] relative size-[60px] shrink-0 xl:size-[72px] 2xl:size-[82px]">
        <Image
          src="/logo.webp"
          alt={t("logoLine2")}
          fill
          className="z-10 object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        />

        <div className="bg-foreground 3xl:size-12.5 absolute top-1/2 left-1/2 hidden size-8 -translate-x-1/2 -translate-y-1/2 rounded-full xl:size-10 2xl:size-11 dark:block" />
      </div>

      <div className="mb-0.5 flex flex-col justify-center text-[#222222] dark:text-[#fcf9f8]">
        <span
          className={
            locale === "en"
              ? "font-cinzel 3xl:text-[36px] text-[20px] leading-none font-semibold tracking-[0.02em] xl:text-[26px] 2xl:text-[31px]"
              : "3xl:text-[32px] text-[22px] leading-none font-semibold xl:text-[26px] 2xl:text-[29px]"
          }
        >
          {t("logoLine1")}
        </span>

        <span
          className={
            locale === "en"
              ? "font-cinzel 3xl:text-[20px] mt-1 text-[13px] leading-none font-medium tracking-[0.04em] xl:text-[15px] 2xl:text-[18px]"
              : "3xl:mt-1.5 3xl:text-[20px] mt-1 text-[13px] leading-none font-medium xl:text-[16px] 2xl:text-[18px]"
          }
        >
          {t("logoLine2")}
        </span>
      </div>
    </Link>
  );
};

export default Logo;
