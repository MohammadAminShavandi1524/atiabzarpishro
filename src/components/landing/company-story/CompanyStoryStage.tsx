"use client";

import { forwardRef } from "react";

import { ArrowDown } from "lucide-react";

import { englishToPersianNumber } from "@/lib/utils";

interface CompanyStoryStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

const CompanyStoryStage = forwardRef<HTMLDivElement, CompanyStoryStageProps>(
  ({ isRTL, t }, ref) => {
    return (
      <div ref={ref} className="relative flex h-screen w-full overflow-hidden">
        {/* Background Technical Grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Horizontal Line - Top */}
          <div className="absolute inset-x-0 top-[22%]">
            <div className="story-horizontal-line bg-border h-px w-full" />
          </div>

          {/* Horizontal Line - Bottom */}
          <div className="absolute inset-x-0 top-[73%]">
            <div className="story-horizontal-line bg-border h-px w-full" />
          </div>

          {/* Vertical Frame - Start */}
          <div className="story-vertical-line story-vertical-start bg-border absolute inset-y-0 start-[5%] w-px" />

          {/* Vertical Frame - End */}
          <div className="story-vertical-line story-vertical-end bg-border absolute inset-y-0 end-[5%] w-px" />

          {/* Giant Background Index */}
          <div className="story-background-index text-foreground/[0.025] absolute end-[3%] top-1/2 -translate-y-1/2 text-[clamp(15rem,32vw,38rem)] leading-none font-semibold tracking-[-0.08em] select-none">
            {isRTL ? englishToPersianNumber("01") : "01"}
          </div>
        </div>

        {/* Main Content */}
        <div className="w90 relative z-10 flex h-full flex-col">
          {/* Top */}
          <div className="flex h-[18%] shrink-0 items-end justify-between border-b border-transparent pb-7">
            {/* Eyebrow */}
            <div className="story-eyebrow flex items-center gap-4">
              <span className="bg-custom-primary block h-px w-12" />

              <span className="text-muted-foreground text-sm font-medium tracking-[0.08em]">
                {t("eyebrow")}
              </span>
            </div>

            {/* Chapter */}
            <div
              dir="ltr"
              className="story-chapter text-muted-foreground hidden items-center gap-3 text-xs tracking-[0.12em] uppercase lg:flex"
            >
              <span>ATI / 01</span>

              <span className="bg-border block h-px w-10" />

              <span>{t("chapter")}</span>
            </div>
          </div>

          {/* Main Stage */}
          <div className="grid min-h-0 flex-1 grid-cols-[0.9fr_1.1fr]">
            {/* Experience */}
            <div className="relative flex items-center pe-12">
              {/* Main Vertical Divider */}
              <span
                aria-hidden="true"
                className="story-main-divider bg-border absolute inset-y-0 end-0 w-px"
              />

              <div className="w-full">
                {/* Number */}
                <div className="overflow-hidden">
                  <div className="flex items-start">
                    <span className="story-number text-foreground block text-[clamp(8rem,15vw,16rem)] font-semibold ltr:leading-[0.75] ltr:tracking-[-0.075em] rtl:leading-[0.90] rtl:tracking-[-0.090em]">
                      {isRTL ? englishToPersianNumber("25") : "25"}
                    </span>

                    <span className="story-number-suffix text-custom-primary ms-3 mt-1 text-[clamp(2.5rem,5vw,5.5rem)] leading-none font-medium">
                      +
                    </span>
                  </div>
                </div>

                {/* Experience Text */}
                <div className="story-experience mt-10 flex items-center gap-5">
                  <span className="story-experience-line bg-custom-primary block h-[3px] w-14" />

                  <p className="text-foreground max-w-[300px] text-lg leading-8 font-medium">
                    {t("experience")}
                  </p>
                </div>
              </div>

              {/* Measurement */}
              <div
                aria-hidden="true"
                className="story-measurement text-muted-foreground absolute start-0 bottom-6 flex items-center gap-4 text-xs font-medium"
              >
                <span dir={isRTL ? "rtl" : "ltr"} className="whitespace-nowrap">
                  {isRTL ? `${englishToPersianNumber("25")} سال` : "25Y"}
                </span>

                <span className="story-measurement-line bg-border block h-px w-20" />

                <span className="whitespace-nowrap">
                  {isRTL ? "تجربه" : "EXP."}
                </span>
              </div>
            </div>

            {/* Story */}
            <div className="flex flex-col justify-center ps-[8vw]">
              <div className="max-w-[800px]">
                {/* Title */}
                <h2 className="text-foreground text-[clamp(3.2rem,5.5vw,6.6rem)] font-semibold ltr:leading-[1.03] ltr:tracking-[-0.045em] rtl:leading-[1.1] rtl:tracking-[0em]">
                  <span className="block overflow-hidden pb-1">
                    <span className="story-title-line block">
                      {t("titleLine1")}
                    </span>
                  </span>

                  <span className="block overflow-hidden ltr:pb-1 rtl:pt-1.5">
                    <span className="story-title-line text-custom-primary block">
                      {t("titleLine2")}
                    </span>
                  </span>
                </h2>

                {/* Description */}
                <p className="story-description text-muted-foreground mt-9 max-w-[650px] text-lg leading-9">
                  {t("description")}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="relative grid h-[20%] shrink-0 grid-cols-[0.9fr_1.1fr]">
            {/* Bottom Horizontal Divider */}
            <span
              aria-hidden="true"
              className="story-bottom-divider bg-border absolute inset-x-0 top-0 h-px"
            />

            {/* Scroll Progress */}
            <div className="relative flex items-center pe-12">
              {/* Bottom Vertical Divider */}
              <span
                aria-hidden="true"
                className="story-bottom-vertical-divider bg-border absolute inset-y-0 end-0 w-px"
              />

              <div className="story-scroll-label flex items-center gap-4">
                <div className="border-border relative h-12 w-px overflow-hidden border-s">
                  <div className="story-progress bg-custom-primary absolute inset-x-0 top-0 h-full" />
                </div>

                <div>
                  <span className="text-muted-foreground block text-[14px] tracking-[0.16em] uppercase">
                    {t("scroll")}
                  </span>

                  <ArrowDown
                    strokeWidth={1.6}
                    className="text-custom-primary mt-2 size-5"
                  />
                </div>
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-3 ps-[8vw]">
              <StoryStat
                index="01"
                title={t("stats.engineering")}
                isRTL={isRTL}
              />

              <StoryStat index="02" title={t("stats.supply")} isRTL={isRTL} />

              <StoryStat
                index="03"
                title={t("stats.support")}
                isRTL={isRTL}
                last
              />
            </div>
          </div>
        </div>

        {/* Side Coordinate */}
        <div
          aria-hidden="true"
          className="story-side-coordinate text-muted-foreground/40 absolute top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] tracking-[0.18em] xl:block ltr:right-[1.5%] rtl:left-[1.5%]"
        >
          ATI ABZAR PISHRO — ENGINEERING / 01
        </div>
      </div>
    );
  },
);

CompanyStoryStage.displayName = "CompanyStoryStage";

export default CompanyStoryStage;

interface StoryStatProps {
  index: string;
  title: string;
  isRTL: boolean;
  last?: boolean;
}

function StoryStat({ index, title, isRTL, last = false }: StoryStatProps) {
  return (
    <div
      className={`story-stat flex flex-col justify-center px-7 ${
        last ? "" : "border-border border-e"
      }`}
    >
      <span className="text-custom-primary font-mono text-[12px] tracking-[0.09em]">
        /  {index}
      </span>

      <span className="text-foreground mt-2 min-h-12 max-w-[160px] text-[15px] leading-6 font-medium">
        {title}
      </span>
    </div>
  );
}
