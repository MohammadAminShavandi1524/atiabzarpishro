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
      className="bg-background relative overflow-hidden"
    >
      {/* Main section structure */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <span className="bg-border absolute inset-x-0 top-0 h-px" />

        <span className="bg-border absolute inset-x-0 bottom-0 h-px" />

        <span className="bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="bg-border absolute inset-y-0 end-[5%] w-px" />
      </div>

      <div className="w90 relative z-10 ">
        {/* Top */}
        <div className="border-border  flex min-h-[80px] items-end justify-between border-b pb-7">
          <div className="flex items-center gap-4">
            <span className="bg-custom-primary block h-px w-10" />

            <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
              {t("eyebrow")}
            </span>
          </div>

          <div
            lang="en"
            className="text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
          >
            <span>ATI</span>

            <span className="bg-border block h-px w-8" />

            <span>GLOBAL PARTNERS</span>
          </div>
        </div>

        {/* Main */}
        <div className="relative grid grid-cols-[0.42fr_1.58fr]">
          {/* Full divider */}
          <span
            aria-hidden="true"
            className="bg-border absolute inset-y-0 start-[21%] w-px"
          />

          {/* Description */}
          <div className="flex flex-col justify-start pt-16 pe-12 pb-10">
            <span className="text-custom-primary text-[48px] font-medium font-semibold ltr:leading-[1] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
              {t("label")}
            </span>

            <p className="text-muted-foreground mt-10 text-justify text-[15px] leading-8">
              {t("intro")}
            </p>
          </div>

          {/* Partners */}
          <div className="grid grid-cols-5 grid-rows-2 gap-x-4 gap-y-0 px-6 pb-10">
            {partners.map((partner) => (
              <PartnerItem
                key={partner.id}
                partner={partner}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}