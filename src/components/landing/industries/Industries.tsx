"use client";

import { useLocale, useTranslations } from "next-intl";

import IndustriesStage from "./IndustriesStage";

export default function Industries() {
  const t = useTranslations("Home.industries");

  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      <IndustriesStage isRTL={isRTL} t={t} />
    </section>
  );
}
