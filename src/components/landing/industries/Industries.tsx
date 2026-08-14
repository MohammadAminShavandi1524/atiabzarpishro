"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import IndustriesStage from "./IndustriesStage";
import { useIndustriesAnimation } from "./useIndustriesAnimation";

export default function Industries() {
  const t = useTranslations("Home.industries");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useIndustriesAnimation({
    sectionRef,
    stageRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background relative h-[380vh]"
    >
      <IndustriesStage ref={stageRef} isRTL={isRTL} t={t} />
    </section>
  );
}
