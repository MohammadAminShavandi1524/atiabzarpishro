"use client";

import { forwardRef } from "react";

import { englishToPersianNumber } from "@/lib/utils";

interface CapabilitiesStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const capabilities = [
  {
    index: "01",
    titleLine1: "items.process.titleLine1",
    titleLine2: "items.process.titleLine2",
    description: "items.process.description",
    codeEn: "PROCESS",
    codeFa: "فرآیند",
  },
  {
    index: "02",
    titleLine1: "items.consulting.titleLine1",
    titleLine2: "items.consulting.titleLine2",
    description: "items.consulting.description",
    codeEn: "CONSULT",
    codeFa: "مشاوره",
  },
  {
    index: "03",
    titleLine1: "items.tools.titleLine1",
    titleLine2: "items.tools.titleLine2",
    description: "items.tools.description",
    codeEn: "TOOLING",
    codeFa: "ابزار",
  },
  {
    index: "04",
    titleLine1: "items.oem.titleLine1",
    titleLine2: "items.oem.titleLine2",
    description: "items.oem.description",
    codeEn: "OEM",
    codeFa: "OEM",
  },
  {
    index: "05",
    titleLine1: "items.training.titleLine1",
    titleLine2: "items.training.titleLine2",
    description: "items.training.description",
    codeEn: "TRAINING",
    codeFa: "آموزش",
  },
];

const CapabilitiesStage = forwardRef<HTMLDivElement, CapabilitiesStageProps>(
  ({ isRTL, t }, ref) => {
    return (
      <div ref={ref} className="relative flex h-screen w-full overflow-hidden">
        {/* Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Horizontal Lines */}
          <span className="cap-horizontal-line bg-border absolute inset-x-0 top-[18%] h-px" />

          <span className="cap-horizontal-line bg-border absolute inset-x-0 bottom-[18%] h-px" />

          {/* Vertical Lines */}
          <span className="cap-vertical-start bg-border absolute inset-y-0 start-[5%] w-px" />

          <span className="cap-vertical-end bg-border absolute inset-y-0 end-[5%] w-px" />
        </div>

        {/* Main Content */}
        <div className="w90 relative z-10 flex h-full flex-col">
          {/* Top */}
          <div className="flex h-[18%] shrink-0 items-end justify-between pb-6">
            {/* Eyebrow */}
            <div className="cap-eyebrow flex items-center gap-4">
              <span className="cap-eyebrow-line bg-custom-primary block h-px w-10" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            {/* Chapter */}
            <div
              dir="ltr"
              className="cap-chapter text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
            >
              <span>ATI</span>

              <span className="cap-chapter-line bg-border block h-px w-8" />

              <span>{t("chapter")}</span>
            </div>
          </div>

          {/* Main Stage */}
          <div className="grid min-h-0 flex-1 grid-cols-[0.4fr_1.6fr]">
            {/* Left */}
            <div className="relative flex flex-col justify-center pe-10">
              {/* Divider */}
              <span
                aria-hidden="true"
                className="cap-main-divider bg-border absolute inset-y-0 end-0 w-px"
              />

              {/* Meta */}
              <div className="cap-left-meta max-w-[300px]">
                <span className="text-custom-primary text-[48px] font-semibold ltr:leading-[1] ltr:tracking-[-0.04em] rtl:leading-[1.2]">
                  {t("label")}
                </span>

                <p className="text-muted-foreground mt-10 text-justify text-[15px] leading-7">
                  {t("intro")}
                </p>
              </div>

              {/* Rail */}
              <div className="cap-rail mt-16 flex max-w-[310px] items-center gap-4">
                <span
                  dir="ltr"
                  className="cap-current-index text-foreground text-[26px] font-semibold"
                >
                  01
                </span>

                <div className="bg-border relative h-px flex-1 overflow-hidden">
                  <span className="cap-progress bg-custom-primary absolute inset-y-0 start-0 w-full" />
                </div>

                <span dir="ltr" className="text-muted-foreground text-xs">
                  05
                </span>
              </div>
            </div>

            {/* Capability Stage */}
            <div className="relative flex items-center ps-[7vw]">
              {capabilities.map((item, index) => (
                <article
                  key={item.index}
                  data-capability-index={index}
                  className="cap-item pointer-events-none absolute inset-y-0 start-[7vw] end-0 flex flex-col justify-center"
                >
                  {/* Technical Code */}
                  <div className="cap-code text-muted-foreground mb-5 flex items-center gap-3 text-xs tracking-[0.14em]">
                    <span
                      dir="ltr"
                      className="inline-flex items-center gap-1.5"
                    >
                      <span>{isRTL ? item.codeFa : item.codeEn}</span>

                      <span>/</span>

                      <span>
                        {isRTL
                          ? englishToPersianNumber(item.index)
                          : item.index}
                      </span>
                    </span>

                    <span className="cap-code-line bg-border block h-px w-12" />
                  </div>

                  {/* Title */}
                  <h2 className="text-foreground max-w-[900px] text-[clamp(3rem,5vw,6.2rem)] font-semibold ltr:leading-[0.98] ltr:tracking-[-0.045em] rtl:leading-[1.12] rtl:tracking-[-0.01em]">
                    <span className="block overflow-hidden">
                      <span className="cap-title-line block">
                        {t(item.titleLine1)}
                      </span>
                    </span>

                    <span className="block overflow-hidden rtl:pt-2">
                      <span className="cap-title-line text-custom-primary block">
                        {t(item.titleLine2)}
                      </span>
                    </span>
                  </h2>

                  {/* Description */}
                  <p className="cap-description text-muted-foreground mt-7 max-w-[620px] text-[17px] leading-8">
                    {t(item.description)}
                  </p>

                  {/* Decorative Item Number */}
                  <div
                    dir="ltr"
                    className="cap-item-number text-foreground/[0.025] absolute end-[2%] bottom-[5%] text-[clamp(5rem,8.5vw,9rem)] leading-none font-semibold tracking-[-0.06em]"
                  >
                    {item.index}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="relative grid h-[18%] shrink-0 grid-cols-[0.4fr_1.6fr]">
            {/* Bottom Left */}
            <div className="relative flex items-center pe-10">
              <span
                aria-hidden="true"
                className="cap-bottom-vertical bg-border absolute inset-y-0 end-0 w-px"
              />

              <span className="cap-scroll-hint text-muted-foreground/70 text-[11px] tracking-[0.12em] uppercase">
                {t("scrollHint")}
              </span>
            </div>

            {/* Steps */}
            <div className="cap-steps flex items-center justify-between ps-[7vw] pe-3">
              {capabilities.map((item, index) => (
                <div
                  key={item.index}
                  data-capability-step={index}
                  className="cap-step text-muted-foreground relative flex items-center"
                >
                  <span dir="ltr" className="font-mono text-sm">
                    {item.index}
                  </span>

                  <span className="cap-step-line bg-custom-primary absolute start-0 -bottom-3 h-px w-full origin-left scale-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

CapabilitiesStage.displayName = "CapabilitiesStage";

export default CapabilitiesStage;
