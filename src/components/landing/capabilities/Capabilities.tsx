"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import CapabilitiesStage from "./CapabilitiesStage";
import { useCapabilitiesAnimation } from "./useCapabilitiesAnimation";



export default function Capabilities() {
  const t = useTranslations("Home.capabilities");
  const locale = useLocale();

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useCapabilitiesAnimation({
    sectionRef,
    stageRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background relative h-[360vh]"
    >
      <CapabilitiesStage ref={stageRef} isRTL={isRTL} t={t} />
    </section>
  );
}
