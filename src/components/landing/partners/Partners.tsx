"use client";

import { useLocale, useTranslations } from "next-intl";

import PartnerItem from "./PartnerItem";
import { partners } from "./partners.data";

export default function Partners() {
  const locale = useLocale();
  const t = useTranslations("Home.partners");

  const isRTL = locale === "fa";

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border relative border-b py-24"
    >
      <div className="w90">
        {/* Eyebrow */}
        <div className="mb-14 flex items-center gap-4">
          <span className="bg-custom-primary block h-px w-10" />

          <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
            {t("eyebrow")}
          </span>
        </div>

        {/* Main */}
        <div className="relative grid grid-cols-[0.42fr_1.58fr]">
          {/* Divider */}
          <span
            aria-hidden="true"
            className="bg-border absolute inset-y-0 start-[21%] w-px"
          />

          {/* Description */}
          <div className="flex flex-col justify-start pe-12 pb-10">
            <span className="text-custom-primary text-[48px] font-semibold ltr:leading-[1] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
              {t("label")}
            </span>

            <p className="text-muted-foreground mt-10 text-justify text-[15px] leading-8">
              {t("intro")}
            </p>
          </div>

          {/* Partners */}
          <div className="grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-0 px-6">
            {partners.map((partner) => (
              <PartnerItem key={partner.id} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
