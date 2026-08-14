"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import CompanyStoryStage from "./CompanyStoryStage";
import { useCompanyStoryAnimation } from "./useCompanyStoryAnimation";

export default function CompanyStory() {
  const t = useTranslations("Home.companyStory");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useCompanyStoryAnimation({
    sectionRef,
    stageRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background relative h-[320vh]"
    >
      <CompanyStoryStage ref={stageRef} isRTL={isRTL} t={t} />
    </section>
  );
}
