"use client";

import { forwardRef } from "react";

import { englishToPersianNumber } from "@/lib/utils";

import IndustriesNetwork from "./IndustriesNetwork";

interface IndustriesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const IndustriesStage = forwardRef<HTMLDivElement, IndustriesStageProps>(
  ({ isRTL, t }, ref) => {
    return (
      <div ref={ref} className="relative flex h-screen w-full overflow-hidden">
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Horizontal lines */}
          <span className="industries-horizontal-line bg-border absolute inset-x-0 top-[18%] h-px" />

          <span className="industries-horizontal-line bg-border absolute inset-x-0 bottom-[18%] h-px" />

          {/* Vertical lines */}
          <span className="industries-vertical-start bg-border absolute inset-y-0 start-[5%] w-px" />

          <span className="industries-vertical-end bg-border absolute inset-y-0 end-[5%] w-px" />
        </div>

        {/* Content */}
        <div className="w90 relative z-10 flex h-full flex-col">
          {/* Top */}
          <div className="flex h-[18%] shrink-0 items-end justify-between pb-6">
            <div className="industries-eyebrow flex items-center gap-4">
              <span className="industries-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            <div
              dir="ltr"
              className="industries-chapter text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
            >
              <span>ATI</span>

              <span className="industries-chapter-line bg-border block h-px w-8" />

              <span>{t("chapter")}</span>
            </div>
          </div>

          {/* Main */}
          <div className="grid min-h-0 flex-1 grid-cols-[0.42fr_1.58fr]">
            {/* Story */}
            <div className="relative flex flex-col justify-center pe-12 pb-12">
              <span
                aria-hidden="true"
                className="industries-main-divider bg-border absolute inset-y-0 end-0 w-px"
              />

              <div className="industries-copy max-w-[340px]">
                <h2 className="text-foreground text-[48px] font-semibold ltr:leading-[1] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
                  <span className="block overflow-hidden">
                    <span className="industries-title-line block">
                      {t("titleLine1")}
                    </span>
                  </span>

                  <span className="block overflow-hidden rtl:pt-1">
                    <span className="industries-title-line text-custom-primary block">
                      {t("titleLine2")}
                    </span>
                  </span>
                </h2>

                <p className="industries-description text-muted-foreground mt-10 text-justify text-[15px] leading-8">
                  {t("description")}
                </p>
              </div>

              {/* Counter */}
              <div className="industries-counter absolute start-0 bottom-7 flex items-center gap-4">
                <span
                  dir="ltr"
                  className="industries-current-index text-foreground font-mono text-xl font-medium"
                >
                  01
                </span>

                <span className="bg-border block h-px w-16" />

                <span
                  dir="ltr"
                  className="text-muted-foreground font-mono text-xs"
                >
                  08
                </span>
              </div>
            </div>

            {/* Network */}
            <IndustriesNetwork t={t} />
          </div>

          {/* Bottom */}
          <div className="grid h-[18%] shrink-0 grid-cols-[0.42fr_1.58fr]">
            {/* Scroll hint */}
            <div className="relative col-start-1 row-start-1 flex items-center pe-12">
              {/* Divider alignment */}
              <span
                aria-hidden="true"
                className="industries-bottom-vertical bg-border absolute inset-y-0 w-px ltr:right-[0px] rtl:left-[0px]"
              />

              <span className="industries-scroll-hint text-muted-foreground/70 text-[11px] tracking-[0.12em] uppercase">
                {t("scrollHint")}
              </span>
            </div>

            {/* Readout */}
            <div className="industries-readout col-start-2 row-start-1 flex items-center justify-between ps-[5vw]">
              <span
                lang="en"
                className="text-muted-foreground font-mono text-[11px] tracking-[0.14em]"
              >
                INDUSTRIAL APPLICATIONS
              </span>

              <div dir="ltr" className="flex items-center gap-3">
                <span className="industries-readout-progress bg-custom-primary block h-px w-0" />

                <span className="text-muted-foreground font-mono text-[11px]">
                  08 / SECTORS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

IndustriesStage.displayName = "IndustriesStage";

export default IndustriesStage;
