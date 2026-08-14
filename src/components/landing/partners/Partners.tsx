"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import PartnersStage from "./PartnersStage";
import { usePartnersAnimation } from "./usePartnersAnimation";

export default function Partners() {
  const locale = useLocale();
  const t = useTranslations("Home.partners");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  usePartnersAnimation({
    sectionRef,
    stageRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background relative h-[420vh]"
    >
      <PartnersStage ref={stageRef} isRTL={isRTL} t={t} />
    </section>
  );
}
