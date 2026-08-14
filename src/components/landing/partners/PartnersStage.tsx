"use client";

import { forwardRef } from "react";

import { englishToPersianNumber } from "@/lib/utils";

import { partners } from "./partners.data";
import PartnerVisual from "./PartnerVisual";

interface PartnersStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const PartnersStage = forwardRef<HTMLDivElement, PartnersStageProps>(
  ({ isRTL, t }, ref) => {
    return (
      <div ref={ref} className="relative flex h-screen w-full overflow-hidden">
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <span className="partners-horizontal-line bg-border absolute inset-x-0 top-[18%] h-px" />

          <span className="partners-horizontal-line bg-border absolute inset-x-0 bottom-[18%] h-px" />

          <span className="partners-vertical-start bg-border absolute inset-y-0 start-[5%] w-px" />

          <span className="partners-vertical-end bg-border absolute inset-y-0 end-[5%] w-px" />

          <div className="partners-background-index text-foreground/[0.022] absolute end-[2%] top-1/2 -translate-y-1/2 text-[clamp(14rem,28vw,34rem)] leading-none font-semibold tracking-[-0.08em] select-none">
            {isRTL ? englishToPersianNumber("05") : "05"}
          </div>
        </div>

        {/* Content */}
        <div className="w90 relative z-10 flex h-full flex-col">
          {/* Top */}
          <div className="flex h-[18%] shrink-0 items-end justify-between pb-6">
            <div className="partners-eyebrow flex items-center gap-4">
              <span className="partners-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            <div
              lang="en"
              dir="ltr"
              className="partners-chapter text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
            >
              <span>ATI / 05</span>

              <span className="partners-chapter-line bg-border block h-px w-8" />

              <span>GLOBAL PARTNERS</span>
            </div>
          </div>

          {/* Main */}
          <div className="grid min-h-0 flex-1 grid-cols-[0.42fr_1.58fr]">
            {/* Rail */}
            <div className="relative flex flex-col justify-center pe-12">
              <span
                aria-hidden="true"
                className="partners-main-divider bg-border absolute inset-y-0 end-0 w-px"
              />

              <div className="partners-rail">
                <span className="text-custom-primary block text-[14px] font-medium">
                  {t("label")}
                </span>

                <p className="text-muted-foreground mt-3 max-w-[300px] text-justify text-[14px] leading-7">
                  {t("intro")}
                </p>

                <div className="mt-6 flex flex-col">
                  {partners.map((partner, index) => (
                    <div
                      key={partner.id}
                      data-partner-rail={index}
                      className="partner-rail-item border-border/60 relative flex items-center gap-4 border-b py-2"
                    >
                      <span className="partner-rail-indicator bg-custom-primary absolute start-0 h-0 w-[2px]" />

                      <span
                        lang="en"
                       
                        className="partner-rail-index text-muted-foreground w-6 text-[10px] ltr:text-end"
                      >
                        {partner.index}
                      </span>

                      <span
                        lang="en"
                        dir="ltr"
                        className="partner-rail-name text-muted-foreground text-[12px] font-medium"
                      >
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stage */}
            <div className="relative min-h-0">
              {partners.map((partner) => (
                <PartnerVisual key={partner.id} partner={partner} t={t} />
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="relative grid h-[18%] shrink-0 grid-cols-[0.42fr_1.58fr]">
            {/* Counter */}
            <div className="partners-bottom-left relative flex items-center pe-12">
              <span
                aria-hidden="true"
                className="partners-bottom-vertical bg-border absolute inset-y-0 end-0 w-px"
              />

              <div
                lang="en"
                dir="ltr"
                className="partners-counter flex items-center gap-4"
              >
                <span className="partners-current-index text-foreground text-xl font-medium">
                  01
                </span>

                <span className="bg-border block h-px w-16" />

                <span className="text-muted-foreground text-xs">10</span>
              </div>
            </div>

            {/* Readout */}
            <div className="partners-bottom-readout flex items-center justify-between ps-[7vw]">
              <span className="text-muted-foreground text-[11px] tracking-[0.12em]">
                {t("scrollHint")}
              </span>

              <div lang="en" dir="ltr" className="flex items-center gap-4">
                <span className="partners-progress bg-custom-primary block h-px w-0" />

                <span className="text-muted-foreground text-[10px] tracking-[0.12em]">
                  10 / PARTNERS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Side label */}
        <div
          lang="en"
          dir="ltr"
          aria-hidden="true"
          className="partners-side-label text-muted-foreground/30 absolute top-1/2 hidden -translate-y-1/2 rotate-90 text-[9px] tracking-[0.16em] xl:block ltr:right-[1.5%] rtl:left-[1.5%]"
        >
          ATI ABZAR PISHRO — GLOBAL PARTNERS / 05
        </div>
      </div>
    );
  },
);

PartnersStage.displayName = "PartnersStage";

export default PartnersStage;
