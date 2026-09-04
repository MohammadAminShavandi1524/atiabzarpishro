"use client";

import { useLocale, useTranslations } from "next-intl";

import IndustriesStage from "./IndustriesStage";

export default function Industries() {
  const t = useTranslations("Home.industries");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border border-b py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
    >
      <IndustriesStage isRTL={isRTL} t={t} />
    </section>
  );
}