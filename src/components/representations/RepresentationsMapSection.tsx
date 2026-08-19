"use client";

import { useLocale, useTranslations } from "next-intl";

import IranRepresentationsMap from "./IranRepresentationsMap";

export default function RepresentationsMapSection() {
  const t = useTranslations("Representations");
  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background">
      <div className="w90 py-16">
        {/* Map */}
        <IranRepresentationsMap isRTL={isRTL} />
      </div>
    </section>
  );
}
