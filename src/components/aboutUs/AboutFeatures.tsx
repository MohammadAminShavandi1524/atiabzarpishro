"use client";

import { useLocale } from "next-intl";

import AboutFeatureItem from "./AboutFeatureItem";
import { aboutFeatures } from "./about-features.data";

export default function AboutFeatures() {
  const locale = useLocale();
  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background pt-8 pb-12"
    >
      <div className="w90">
        <div className="grid grid-cols-4">
          {aboutFeatures.map((feature, index) => (
            <AboutFeatureItem
              key={feature.key}
              feature={feature}
              hasDivider={index !== aboutFeatures.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}