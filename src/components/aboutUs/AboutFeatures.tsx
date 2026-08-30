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
      className="bg-background pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12"
    >
      <div className="w90">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {aboutFeatures.map((feature, index) => (
            <AboutFeatureItem
              key={feature.key}
              feature={feature}
              index={index}
              hasDivider={index !== aboutFeatures.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
