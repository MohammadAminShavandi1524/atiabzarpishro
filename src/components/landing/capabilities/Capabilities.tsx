"use client";

import { useLocale, useTranslations } from "next-intl";

import CapabilitiesStage from "./CapabilitiesStage";

export default function Capabilities() {
  const locale = useLocale();
  const t = useTranslations("Home.capabilities");

  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border border-b py-14 sm:py-16 md:py-20 lg:py-20 xl:py-[88px] 2xl:py-24"
    >
      <CapabilitiesStage isRTL={isRTL} t={t} />
    </section>
  );
}
