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
      className="flex items-center gap-x-2.5"
    >
      {/* Logo mark */}
      <div className="relative size-[72px] shrink-0">
        <Image
          src="/logo.webp"
          alt={t("logoLine2")}
          fill
          className="object-contain drop-shadow-[0_0_8px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.35)]"
        />
      </div>

      {/* Logo text */}
      <div className="flex flex-col justify-center text-[#222222] dark:text-[#fcf9f8] mb-0.5">
        <span
          className={
            locale === "en"
              ? "text-[34px] leading-none font-semibold tracking-[0.02em] font-cinzel"
              : "text-[30px] leading-none font-semibold"
          }
        >
          {t("logoLine1")}
        </span>

        <span
          className={
            locale === "en"
              ? "mt-1 text-[17px] leading-none font-medium tracking-[0.04em] font-cinzel"
              : "mt-1.5 text-[17px] leading-none font-medium"
          }
        >
          {t("logoLine2")}
        </span>
      </div>
    </Link>
  );
};

export default Logo;