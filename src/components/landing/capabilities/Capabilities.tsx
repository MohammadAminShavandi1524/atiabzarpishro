"use client";

import { useLocale, useTranslations } from "next-intl";

import CapabilitiesStage from "./CapabilitiesStage";

export default function Capabilities() {
  const locale = useLocale();
  const t = useTranslations("Home.capabilities");

  const isRTL = locale === "fa";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-background pt-24">
      <CapabilitiesStage isRTL={isRTL} t={t} />
    </section>
  );
}
