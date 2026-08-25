"use client";

import { useLocale, useTranslations } from "next-intl";

import CompanyStoryStage from "./CompanyStoryStage";

export default function CompanyStory() {
  const t = useTranslations("Home.companyStory");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background py-24">
      <CompanyStoryStage isRTL={isRTL} t={t} />
    </section>
  );
}
