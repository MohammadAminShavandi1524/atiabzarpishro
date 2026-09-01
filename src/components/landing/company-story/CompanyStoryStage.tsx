"use client";

import { englishToPersianNumber } from "@/lib/utils";

interface CompanyStoryStageProps {
  isRTL: boolean;
  t: (key: string) => string;
}

export default function CompanyStoryStage({
  isRTL,
  t,
}: CompanyStoryStageProps) {
  return (
    <div className="w90">
      {/* Eyebrow */}
      <div className="mb-16 flex items-center gap-4">
        <span className="bg-custom-primary block h-px w-12 shrink-0" />

        <span className="text-muted-foreground text-sm font-medium tracking-[0.08em] b">
          {t("eyebrow")}
        </span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[0.72fr_1.28fr] items-stretch">
        {/* Experience */}
        <div className="relative flex items-start pe-16">
          {/* Main Vertical Divider */}
          <span
            aria-hidden="true"
            className="bg-border absolute inset-y-0 end-0 w-px"
          />

          <div className="w-full pt-2">
            {/* Number */}
            <div className="flex items-start">
              <span
                className="
                  text-foreground
                  text-[clamp(9rem,15vw,15rem)]
                  font-semibold
                  ltr:leading-[0.78]
                  ltr:tracking-[-0.075em]
                  rtl:leading-[0.9]
                  rtl:tracking-[-0.07em]
                "
              >
                {isRTL ? englishToPersianNumber("25") : "25"}
              </span>

              <span
                className="
                  text-custom-primary
                  ms-3 mt-2
                  text-[clamp(3rem,5vw,5.2rem)]
                  leading-none
                  font-medium
                "
              >
                +
              </span>
            </div>

            {/* Experience Text */}
            <div className="mt-12 flex items-start gap-5">
              <span className="bg-custom-primary mt-3 block h-[3px] w-14 shrink-0" />

              <p className="text-foreground max-w-[320px] text-lg leading-8 font-medium">
                {t("experience")}
              </p>
            </div>
          </div>
        </div>

        {/* Story */}
        <div className="ps-[7vw]">
          <div className="max-w-[920px]">
            {/* Title */}
            <h2
              className="
                text-foreground
                text-[clamp(3.5rem,5vw,6rem)]
                font-semibold
                ltr:leading-[1.02]
                ltr:tracking-[-0.045em]
                rtl:leading-[1.18]
              "
            >
              <span className="block">{t("titleLine1")}</span>

              <span className="text-custom-primary block">
                {t("titleLine2")}
              </span>
            </h2>

            {/* Description */}
            <div className="text-muted-foreground mt-12 max-w-[900px] space-y-7 text-[17px] leading-9">
              <p>{t("description1")}</p>

              <p>{t("description2")}</p>

              <p>{t("description3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}