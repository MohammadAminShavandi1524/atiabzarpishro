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
      {/* Section divider accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20"
      >
        <span className="bg-custom-primary absolute start-[5%] top-[-1px] block h-px w-16" />
      </div>

      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="technical-bg-line bg-border absolute inset-y-0 start-[5%] w-px" />

        <span className="technical-bg-line bg-border absolute inset-y-0 end-[5%] w-px" />

        <div className="technical-bg-index text-foreground/[0.022] absolute end-[2%] top-1/2 -translate-y-1/2 text-[clamp(15rem,30vw,36rem)] leading-none font-semibold tracking-[-0.08em] select-none">
          {isRTL ? englishToPersianNumber("06") : "06"}
        </div>
      </div>

      <div className="w90 relative z-10">
        {/* Header */}
        <div className="technical-header border-border grid min-h-[360px] grid-cols-[0.42fr_1.58fr] border-b">
          {/* Chapter */}
          <div className="relative flex flex-col justify-between py-12 pe-12">
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

            <div
              lang="en"
              dir="ltr"
              className="technical-chapter text-muted-foreground flex items-center gap-3 font-mono text-[10px] tracking-[0.14em]"
            >
              <span>ATI / 06</span>

              <span className="technical-chapter-line bg-border block h-px w-8" />

              <span>TECHNICAL INFORMATION</span>
            </div>
          </div>

          {/* Intro */}
          <div className="flex items-end ps-[7vw] pb-14">
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
              <span
                lang="en"
                dir="ltr"
                className="text-custom-primary font-mono text-[10px] tracking-[0.14em]"
              >
                04 / INDEX
              </span>

              <p className="text-muted-foreground mt-4 max-w-[260px] text-justify text-[13px] leading-7">
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

        {/* Bottom */}
        <div className="technical-bottom border-border grid min-h-[120px] grid-cols-[0.42fr_1.58fr] border-t">
          <div className="relative flex items-center pe-12">
            <span
              aria-hidden="true"
              className="bg-border absolute inset-y-0 end-0 w-px"
            />

            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground font-mono text-[12px] tracking-[0.12em]"
            >
              06 / 08
            </span>
          </div>

          <div className="flex items-center justify-between ps-[7vw]">
            <span className="text-muted-foreground text-[12px] tracking-[0.08em]">
              {t("bottomLabel")}
            </span>

            <span
              lang="en"
              dir="ltr"
              className="text-muted-foreground font-mono text-[11px] tracking-[0.14em]"
            >
              ATI ABZAR PISHRO / TECHNICAL RESOURCES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
