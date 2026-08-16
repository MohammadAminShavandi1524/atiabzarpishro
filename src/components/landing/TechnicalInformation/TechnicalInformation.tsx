"use client";

import { useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

import { englishToPersianNumber } from "@/lib/utils";

import { technicalResources } from "./technicalInformation.data";
import TechnicalResourceItem from "./TechnicalResourceItem";
import { useTechnicalInformationAnimation } from "./useTechnicalInformationAnimation";

export default function TechnicalInformation() {
  const locale = useLocale();
  const t = useTranslations("Home.technicalInformation");

  const isRTL = locale === "fa";

  const sectionRef = useRef<HTMLElement>(null);

  useTechnicalInformationAnimation({
    sectionRef,
    isRTL,
  });

  return (
    <section
      ref={sectionRef}
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-background border-border relative overflow-hidden border-t"
    >
     

      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="technical-bg-line bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="technical-bg-line bg-border absolute inset-y-0 end-[5%] w-px" />
      </div>

      <div className="w90 relative z-10">
        {/* Header */}
        <div className="technical-header border-border grid min-h-[360px] grid-cols-[0.42fr_1.58fr] border-b">
          {/* Chapter */}
          <div className="relative flex flex-col justify-between pe-12 pt-18 pb-12 ">
            <span
              aria-hidden="true"
              className="technical-divider bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="technical-eyebrow flex items-center gap-4">
              <span className="technical-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

          
          </div>

          {/* Intro */}
          <div className="flex items-end ps-[7vw] pt-12 pb-14">
            <div className="max-w-[900px]">
              <div className="technical-title overflow-hidden">
                <h2 className="technical-title-line text-foreground text-[clamp(2.7rem,4.4vw,5.5rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
                  {t("titleLine1")}
                </h2>
              </div>

              <div className="technical-title mt-1 overflow-hidden">
                <h2 className="technical-title-line text-custom-primary text-[clamp(2.7rem,4.4vw,5.5rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.2]">
                  {t("titleLine2")}
                </h2>
              </div>

              <p className="technical-description text-muted-foreground mt-7 max-w-[660px] text-[15px] leading-8">
                {t("description")}
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-[0.42fr_1.58fr]">
          {/* Side */}
          <div className="relative py-10 pe-12">
            <span
              aria-hidden="true"
              className="technical-list-divider bg-border absolute inset-y-0 end-0 w-px"
            />

            <div className="technical-list-label">
             

              <p className="text-muted-foreground mt-4 max-w-[280px] text-justify text-[15px] leading-7">
                {t("listDescription")}
              </p>
            </div>
          </div>

          {/* List */}
          <div className="ps-[7vw]">
            {technicalResources.map((resource) => (
              <TechnicalResourceItem
                key={resource.id}
                resource={resource}
                isRTL={isRTL}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
