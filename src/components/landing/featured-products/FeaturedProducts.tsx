"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import FeaturedProductsStage from "./FeaturedProductsStage";
import { useFeaturedProductsAnimation } from "./useFeaturedProductsAnimation";

export default function FeaturedProducts() {
  const locale = useLocale();
  const t = useTranslations("Home.featuredProducts");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useFeaturedProductsAnimation({
    sectionRef,
    stageRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background relative h-[300vh]"
    >
      <FeaturedProductsStage
        ref={stageRef}
        isRTL={isRTL}
        t={t}
      />
    </section>
  );
}